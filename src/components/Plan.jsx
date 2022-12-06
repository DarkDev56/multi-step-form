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
                            <div onClick={
                                () => setPlan({plan:{name,price}})
                            }>
                                <img src={require(`../images/icon-${name}.svg`)} alt={`icon-${name}`} />
                                <div>
                                    <h4 className="capitalize">{name}</h4>
                                    <p>{`$${isMonthly ? price : price * 10}/${isMonthly ? "mo" : "yr"}`}</p>
                                    <span className={`${isMonthly ? "hidden" : ""}`}>2 months free</span>
                                </div>
                            </div>
                        )
                        
                    }}
                </DurationContext.Consumer>
            )}
        </PlanContext.Consumer>
    )
}