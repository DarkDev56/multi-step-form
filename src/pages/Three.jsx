import Header from "../components/Header";
import AddOn from "../components/AddOn";

export default function Three()
{
    return (
        <div>
            <Header
                heading="Pick add-ons"
                content="Add-ons help enhance your gaming experience."
            />
            <div>
                <AddOn
                    name="Online service"
                    desc="Access to multiplayer games"
                    price={1}
                />
                <AddOn
                    name="Larger storage"
                    desc="Extra 1TB of cloud save"
                    price={2}
                />
                <AddOn
                    name="Customizable profile"
                    desc="Custom theme on your profile"
                    price={2}
                />
            </div>
        </div>
    )
}