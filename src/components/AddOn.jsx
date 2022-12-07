import { DurationContext, AddOnsContext } from "./Context"

export default function AddOn({name, desc, price})
{
    return (
        <DurationContext.Consumer>
            {({duration, setDuration}) => (
                <AddOnsContext.Consumer>
                    {({addOns, setAddOns}) => {
                        const isMonthly = (duration === "monthly");
                        const isCurrent = addOns.filter(addOn => addOn.name === name).length === 1;
                        return (
                            <div
                                className={`${ isCurrent ? "border-purplish-blue bg-magnolia" : "border-cool-gray"} py-3 px-4 cursor-pointer border-[1px] rounded-lg flex items-center`}
                                onClick={() => {
                                isCurrent ?
                                (setAddOns(addOns.filter(addOn => addOn.name !== name))) :
                                (setAddOns([...addOns, {name, price}]))
                            }}>
                                <div className={`flex justify-center items-center w-6 h-6 border-[1px] rounded-lg bg-white mr-5 ${isCurrent ? "border-purplish-blue bg-purplish-blue" : "border-cool-gray"}`}>
                                    <i className={`fa fa-check text-white ${isCurrent ? "" : "hidden"}`}></i>
                                </div>
                                <div>
                                    <h4 className="font-[700] text-marine-blue">{name}</h4>
                                    <p className="text-cool-gray text-sm">{desc}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="text-purplish-blue font-[700]">+${isMonthly ? price : price * 10}/{isMonthly ? "mo" : "yr"}</span>
                                </div>
                            </div>
                        )
                    }}
                </AddOnsContext.Consumer>
            )}
        </DurationContext.Consumer>
    )
}