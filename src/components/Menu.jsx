import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";
import Switch from "./Switch";
import { StepContext } from "./Context";

export default function Menu()
{
    const menu = tab => <div>
        {tab}
        <Switch />
    </div>;

    return (
        <StepContext.Consumer>
            {({step, setStep}) => {
                console.log("aah" + step)
                switch (step)
                {
                    case 1:
                        console.log("its 1 aaaah" + step)
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
                        return <Five/>;
                        break;
                }
            }}
        </StepContext.Consumer>
    )
}