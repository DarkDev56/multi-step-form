import Header from "../components/Header";
import Input from "../components/Input";
import { InputsContext } from "../components/Context";
import { useState } from "react";

export default function One({ page, setPage })
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    return (
        <form id="input_form" onSubmit={() => setPage(page + 1)}>
            <Header
                heading="Personal info"
                content="Please provide your name, email address, and phone number"
            />
            <div>
                <Input
                    name="Name"
                    type="text"
                    placeholder="e.g. Stephen King"
                    value={name} pattern="[A-Za-z0-9]{1,20}"
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    name="Email Address"
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                    value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    name="Phone Number"
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                    value={tel} pattern="(+)[0-9]{9,12}"
                    onChange={(e) => setTel(e.target.value)}
                />
            </div>
        </form>
    )
}