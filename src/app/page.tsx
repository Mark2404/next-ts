"use client";

import { useEffect, useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import API from "@/lib/API";
import { Usertype } from "@/types";
import Header from "@/components/header";
import Link from "next/link";

const Home = () => {
    const [data, setData] = useState<Usertype[]>([]);
    const [selectedUser, setSelectedUser] = useState<Usertype | null>(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await API.get('/users', { params: { _limit: 100 } });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    return (
        <div className="app-container">
            <Header setSelectedUser={setSelectedUser} />
            <div className="user-list">
                {selectedUser ? (
                    <Link href={`/users/${selectedUser.id}`} className="user-card">
                        <UserOutlined style={{ fontSize: '48px' }} />
                        <h2>{selectedUser.name}</h2>
                        <p>{selectedUser.email}</p>
                    </Link>
                ) : (
                    data.map((user) => (
                        <Link key={user.id} href={`/users/${user.id}`} className="user-card">
                            <UserOutlined style={{ fontSize: '48px' }} />
                            <h2>{user.name}</h2>
                            <p>{user.email}</p>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
};

export default Home;
