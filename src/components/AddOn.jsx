import { DurationContext, AddOnsContext } from "./Context"

export default function AddOn({name, desc, price})
{
    return (
        <DurationContext.Consumer>
            {({duration, setDuration}) => (
                <AddOnsContext.Consumer>
                    {({addOns, setAddOns}) => {
                        const isMonthly = (duration === "monthly");
                        return (
                            <div onClick={() => {
                                (addOns.filter(addOn => addOn.name === name).length > 0) ?
                                (setAddOns(addOns.filter(addOn => addOn.name !== name))) :
                                (setAddOns([...addOns, {name, price}]))
                            }}>
                                <div>
                                    <i className="fa fa-check"></i>
                                </div>
                                <div>
                                    <h4>{name}</h4>
                                    <p>{desc}</p>
                                </div>
                                <div>
                                    <span>+${isMonthly ? price : price * 10}/{isMonthly ? "mo" : "yr"}</span>
                                </div>
                            </div>
                        )
                    }}
                </AddOnsContext.Consumer>
            )}
        </DurationContext.Consumer>
    )
}