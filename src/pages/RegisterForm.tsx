import { useState } from "react";
import { type RegisterRequest, type RegisterResponse } from "../types/auth";
import { FormButton } from "../components/FormButton";
import { FormHeading } from "../components/FormHeading";
import { InputField } from "../components/InputField";
import { Card } from "../components/Card";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterForm() {
    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const payload: RegisterRequest = {
            username: form.username,
            password: form.password,
        };

        axios.post("http://localhost:3000/register", payload)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });

        // const response = await fetch("http://localhost:3000/register", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload),
        // });

        // const data: RegisterResponse = await response.json();

        // console.log("Logged in:", data);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm((prev: { username: string; password: string }) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="min-h-screen bg-violet-100 flex items-center justify-center">
            <Card>
                <FormHeading title="Register" />
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
                    <FormButton title="Register" />
                    <Link to="/login" className="text-sm text-center text-blue-600 mt-4">
                        Already have an account? Log-in
                    </Link>
                </form>
            </Card>
        </div>
    );
}

export default RegisterForm;