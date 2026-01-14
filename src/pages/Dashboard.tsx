import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import type { User } from "../types/auth"

function Dashboard() {
    const { user, logout } = useAuth();
    const [ userList, setUserList ] = useState<User[]>([]);

    useEffect(() => {
        async function getUserList() {
            const token = localStorage.getItem("token");
            console.log(token);
            const response = await fetch("http://localhost:3000/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const data: User[] = await response.json();
            
            setUserList(data);
            
        }
        getUserList();
    }, []);
    console.log(userList);
    return (
        <div className="min-h-screen p-8">
            <h1 className="text-3xl mb-4">
                Welcome, {user?.username}
            </h1>
            <ul>
                { userList.map((u) => {
                    return <li>{u.username}</li>
                }) }
            </ul>
            <button
                onClick={logout}
                className="bg-gray-800 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    );
}

export default Dashboard;
