import { DurationContext, AddOnsContext, PlanContext } from "./Context";

export default function Bill()
{
    return (
        <DurationContext.Consumer>
            {({duration, setDuration}) => (
                <AddOnsContext.Consumer>
                    {({addOns, setAddOns}) => (
                        <PlanContext.Consumer>
                            {({plan, setPlan}) => {
                                const isMonthly = (duration === "monthly");
                                const shortForm = isMonthly ? "mo" : "yr";
                                const total = isMonthly ? plan.price : plan.price * 10;
                                addOns.forEach(addOn => {
                                    total += isMonthly ? addOn.price : addOn.price * 10;
                                });

                                return (
                                    <div>
                                        <div>
                                            <div>
                                                <div>
                                                    <h3>{plan.name} ({duration})</h3>
                                                    <a href="#">Change</a>
                                                </div>
                                                <span>${isMonthly ? plan.price : plan.price * 10}/{shortForm}</span>
                                            </div>
                                            {(addOns.length === 0) ? "" :
                                            <ul>
                                                {addOns.map((addOn, key) => (
                                                    <li key={key}>
                                                        <span>{addOn.name}</span>
                                                        <span>+${isMonthly ? addOn.price : addOn.price * 10}/{shortForm}</span>
                                                    </li>
                                                ))}
                                            </ul>}
                                        </div>
                                        <div>
                                            <h2>Total per ({duration.slice(0,-2)})</h2>
                                            <span>${total}/{shortForm}</span>
                                        </div>
                                    </div>
                                )            
                            }}
                        </PlanContext.Consumer>
                    )}
                </AddOnsContext.Consumer>
            )}
        </DurationContext.Consumer>
    )
}

