import { DurationContext } from "./Context"

export default function Toggler()
{
    return (
        <DurationContext.Consumer>
            {({duration, setDuration}) => (
                <div className="w-full flex justify-center my-3 bg-magnolia rounded-md py-3">
                    <div className="flex gap-4 items-center">
                        <span className={`${duration === "monthly" ? "text-marine-blue" : "text-cool-gray"} transition-colors font-[700]`}>Monthly</span>
                        <button 
                            onClick={() => duration === "monthly" ? setDuration("yearly") : setDuration("monthly")}
                            className="p-1 w-12 rounded-3xl bg-marine-blue">
                            <div className={`w-5 h-5 rounded-[50%] bg-white transition-[margin] ${duration === "yearly" ? "ml-5" : "ml-0"}`}></div>
                        </button>
                        <span className={`${duration === "yearly" ? "text-marine-blue" : "text-cool-gray"} transition-colors font-[700]`}>Yearly</span>
                    </div>
                </div>
            )}
        </DurationContext.Consumer>
    )
}