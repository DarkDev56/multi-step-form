import { DurationContext, PlanContext } from "./Context";
import arcadeSVG from "../images/icon-arcade.svg";
import proSVG from "../images/icon-pro.svg";
import advancedSVG from "../images/icon-advanced.svg";

const images = {
    "arcade" : arcadeSVG,
    "pro" : proSVG,
    "advanced" : advancedSVG
}

const ContextProvider = jsx => (
    <PlanContext.Consumer>
        {({plan, setPlan}) => (
            <DurationContext.Consumer>
                {({duration}) => (
                    jsx({plan, setPlan, duration})
                )}
            </DurationContext.Consumer>
        )}
    </PlanContext.Consumer>
);

export default function Plan({name, price})
{
    const Component = ({plan, setPlan, duration}) => {

        const isMonthly = (duration === "monthly");
        const calcPrice = isMonthly ? price : price * 10;
        const shortForm = isMonthly ? "mo" : "yr";

        const HandleClick = () => setPlan({name, price});

        return (
            <div onClick={HandleClick} className={`${plan.name === name ? 'border-marine-blue bg-magnolia' : 'border-cool-gray'} cursor-pointer p-4 border-[1px] rounded-md w-full flex flex-row gap-4 lg:p-6 lg:flex-col lg:h-30`}>
                <img src={images[name]} alt={`icon-${name}`} className="lg:w-12" />
                <div>
                    <h4 className="capitalize font-[700] text-marine-blue">{name}</h4>
                    <p className="text-cool-gray font-[500]">${calcPrice}/{shortForm}</p>
                    <span className={`${isMonthly ? "hidden" : ""} text-marine-blue font-[500] lg:text-sm lg:font-[700]`}>2 months free</span>
                </div>
            </div>
        )
    };

    return ContextProvider(Component);
}