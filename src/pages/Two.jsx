import Header from "../components/Header";
import Plan from "../components/Plan";
import Toggler from "../components/Toggler";

export default function Two()
{
    return (
        <div>
            <Header
                heading="Select your plan"
                content="You have the option of monthly or yearly billing."
            />
            <div className="flex flex-col gap-4 justify-between">
                <Plan
                    name="arcade"
                    price={9}
                />
                <Plan
                    name="advanced"
                    price={12}
                />
                <Plan
                    name="pro"
                    price={15}
                />
            </div>
            <Toggler />
        </div>
    )
}