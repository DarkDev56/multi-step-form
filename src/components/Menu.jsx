import One from "../pages/One";
import Two from "../pages/Two";
import Three from "../pages/Three";
import Four from "../pages/Four";
import Five from "../pages/Five";
import Switch from "./Switch";
import { StepContext } from "./Context";

const generateMenu = menu => (
    <div className="mx-auto fixed top-0 left-0 w-full flex justify-center lg:left-none lg:max-w-5xl md:relative md:top-[-6.5rem] lg:top-0">
        <div className="m-4 lg:h-full md:m-0 rounded-md max-w-md relative z-20 bg-white top-24 lg:static lg:max-w-none">
            <div className="p-8 w-full max-w-md flex justify-center md:flex-col lg:py-10 lg:px-24 lg:max-w-none lg:h-full">
                {menu}
            </div>
        </div>
    </div>
)



export default function Menu()
{
    const divStyle = "lg:flex flex-col justify-between lg:h-full";
    return (
        <StepContext.Consumer>
            {({step, setStep}) => {
                switch (step)
                {
                    case 1:
                        return generateMenu(<div className={divStyle}><One step={step} setStep={setStep} /><Switch /></div>);
                    case 2:
                        return generateMenu(<div className={divStyle}><Two/><Switch /></div>);
                    case 3:
                        return generateMenu(<div className={divStyle}><Three/><Switch /></div>);
                    case 4:
                        return generateMenu(<div className={divStyle}><Four/><Switch /></div>);
                    case 5:
                        return generateMenu(<div className="lg:flex justify-center items-center lg:h-full"><Five/></div>);
                    default:
                        break;
                }
            }}
        </StepContext.Consumer>
    )
}