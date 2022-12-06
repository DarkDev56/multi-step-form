import Header from "../components/Header";
import Input from "../components/Input";

export default function One()
{
    return (
        <div>
            <Header
                heading="Personal info"
                content="Please provide your name, email address, and phone number"
            />
            <div>
                <Input
                    name="Name"
                    type="text"
                    placeholder="e.g. Stephen King"
                />
                <Input
                    name="Email Address"
                    type="email"
                    placeholder="e.g. stephenking@lorem.com"
                />
                <Input
                    name="Phone Number"
                    type="tel"
                    placeholder="e.g. +1 234 567 890"
                />
            </div>
        </div>
    )
}