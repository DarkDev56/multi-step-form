import { DurationContext, AddOnsContext, PlanContext, StepContext } from "./Context";

const ContextProvider = jsx => (
    <StepContext.Consumer>
        {({setStep}) => (
            <DurationContext.Consumer>
                {({duration}) => (
                    <AddOnsContext.Consumer>
                        {({addOns}) => (
                            <PlanContext.Consumer>
                                {({plan}) => (
                                    jsx({duration, plan, addOns, setStep})
                                )}
                            </PlanContext.Consumer>
                        )}
                    </AddOnsContext.Consumer>
                )}
            </DurationContext.Consumer>
        )}
    </StepContext.Consumer>
);

export default function Bill()
{
    const Component = ({duration, plan, addOns, setStep}) => {

        const isMonthly = (duration === "monthly");
        const shortForm = isMonthly ? "mo" : "yr";
        let total, calcPlanPrice;
        total = calcPlanPrice = isMonthly ? plan.price : plan.price * 10;
        addOns.forEach(addOn => {
            total += isMonthly ? addOn.price : addOn.price * 10;
        });

        return (
            <div>
                <div className="bg-alabaster rounded-lg p-6">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h3 className="capitalize text-marine-blue font-[700] text-lg">{plan.name} ({duration})</h3>
                            <button onClick={() => setStep(2)} className="text-sm text-cool-gray font-[500] underline mr-auto">Change</button>
                        </div>
                        <span className="font-[700] text-lg text-marine-blue">${calcPlanPrice}/{shortForm}</span>
                    </div>
                    {(addOns.length === 0) ? "" :
                    <ul className="pt-4 mt-6 border-t-[1px] border-t-light-gray flex flex-col gap-1">
                        {addOns.map((addOn, key) => (
                            <li key={key} className="flex justify-between">
                                <span className="text-cool-gray font-[500]">{addOn.name}</span>
                                <span className="text-marine-blue text-lg font-[700]">+${isMonthly ? addOn.price : addOn.price * 10}/{shortForm}</span>
                            </li>
                        ))}
                    </ul>}
                </div>
                <div className="p-6 flex justify-between">
                    <h2 className="font-[500] text-cool-gray">Total (per {duration.slice(0,-2)})</h2>
                    <span className="font-[700] text-xl text-purplish-blue">${total}/{shortForm}</span>
                </div>
            </div>
        )
    };

    return ContextProvider(Component);
}

