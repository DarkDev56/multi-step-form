import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";
import Switch from "./Switch";
import { StepContext } from "./Context";

export default function Menu()
{
    const menu = tab => (
        <div className="m-4 rounded-md relative z-20 bg-white top-24">
            <div className="p-6 w-full max-w-md">
                {tab}
                <Switch />
            </div>
        </div>
    );

    return (
        <StepContext.Consumer>
            {({step, setStep}) => {
                switch (step)
                {
                    case 1:
                        return menu(<One step={step} setStep={setStep} />);
                        break;
                    case 2:
                        return menu(<Two/>);
                        break;
                    case 3:
                        return menu(<Three/>);
                        break;
                    case 4:
                        return menu(<Four/>);
                        break;
                    case 5:
                        return <div className="m-4 rounded-md relative z-20 bg-white top-24">
                        <div className="p-6 w-full max-w-md">
                            <Five />
                        </div>
                    </div>;
                        break;
                }
            }}
        </StepContext.Consumer>
    )
}