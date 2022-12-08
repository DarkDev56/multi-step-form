import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";
import Switch from "./Switch";
import { StepContext } from "./Context";

const generateMenu = menu => (
    <div className="mx-auto w-full max-w-md lg:max-w-5xl">
        <div className="m-4 md:m-0 rounded-md relative z-20 bg-white top-24 lg:static">
            <div className="p-6 w-full max-w-md flex justify-center md:flex-col">
                {menu}
            </div>
        </div>
    </div>
)

export default function Menu()
{
    return (
        <StepContext.Consumer>
            {({step, setStep}) => {
                switch (step)
                {
                    case 1:
                        return generateMenu(<><One step={step} setStep={setStep} /><Switch /></>);
                    case 2:
                        return generateMenu(<><Two/><Switch /></>);
                    case 3:
                        return generateMenu(<><Three/><Switch /></>);
                    case 4:
                        return generateMenu(<><Four/><Switch /></>);
                    case 5:
                        return generateMenu(<Five/>);
                    default:
                        break;
                }
            }}
        </StepContext.Consumer>
    )
}