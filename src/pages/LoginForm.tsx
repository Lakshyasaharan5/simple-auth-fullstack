import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { FormHeading } from "../components/FormHeading";
import { InputField } from "../components/InputField";
import { FormButton } from "../components/FormButton";
import type { LoginRequest, LoginResponse } from "../types/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [form, setForm] = useState({
    username: "",
    password: "",
  });


  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const payload: LoginRequest = {
      username: form.username,
      password: form.password,
    };

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data: LoginResponse = await response.json();

    if (!response.ok) {
      console.error(data);
      return;
    }
    
    console.log("Logged in:", data);
    
    localStorage.setItem("token", data.token);
    login(data.user);      // store user in auth state
    navigate("/dashboard");
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm((prev: { username: string; password: string }) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (<>
    <div className="min-h-screen bg-violet-100 flex items-center justify-center">
      <Card>
        <FormHeading title="Log-in" />
        <form className="flex flex-col space-y-6 px-6 py-16" onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <InputField
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <FormButton title="Log-in" />
          <Link to="/register" className="text-sm text-center text-blue-600 mt-4">
            Don’t have an account? Register
          </Link>
        </form>
      </Card>
    </div>
  </>);
}

export default LoginForm;
