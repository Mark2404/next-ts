import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ user: string }>;
};

export default async function UserDetails({ params }: Props) {
    const { user } = await params;

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`, {
            cache: "no-store",
        });

        if (!res.ok) return notFound();

        const userData = await res.json();

        return (
            <div className="user-details">
                <h1>{userData.name}</h1>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.phone}</p>
                <p>Website: {userData.website}</p>
                <a href="/">← Back to list</a>
            </div>
        );
    } catch (error) {
        return notFound();
    }
}
