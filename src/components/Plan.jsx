import { DurationContext, PlanContext } from "./Context"

export default function Plan({name, price})
{
    return (
        <PlanContext.Consumer>
            {({plan, setPlan}) => (
                <DurationContext.Consumer>
                    {({duration, setDuration}) => {
                        const isMonthly = (duration === "monthly");
                        return (
                            <div className={`${plan.name === name ? 'border-marine-blue bg-magnolia' : 'border-cool-gray'} cursor-pointer p-4 border-[1px] rounded-md w-full flex flex-row gap-4`}
                            onClick={
                                () => setPlan({name,price})
                            }>
                                <img src={require(`../images/icon-${name}.svg`)} alt={`icon-${name}`} />
                                <div>
                                    <h4 className="capitalize font-[700] text-marine-blue">{name}</h4>
                                    <p className="text-cool-gray font-[500]">{`$${isMonthly ? price : price * 10}/${isMonthly ? "mo" : "yr"}`}</p>
                                    <span className={`${isMonthly ? "hidden" : ""} text-marine-blue font-[500]`}>2 months free</span>
                                </div>
                            </div>
                        )
                        
                    }}
                </DurationContext.Consumer>
            )}
        </PlanContext.Consumer>
    )
}