import { notFound } from "next/navigation";

type Props = {
    params: { user: string };
};

export default async function UserDetails({ params }: Props) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.user}`, {
            cache: "no-store",
        });

        if (!res.ok) return notFound();

        const user = await res.json();

        return (
            <div className="user-details">
                <h1>{user.name}</h1>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <a href="/">← Back to list</a>
            </div>
        );
    } catch (error) {
        return notFound();
    }
}
