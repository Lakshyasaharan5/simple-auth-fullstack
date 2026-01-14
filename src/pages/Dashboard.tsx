import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl mb-4">
        Welcome, {user?.username}
      </h1>

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
