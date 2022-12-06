import { DurationContext } from "./Context"

export default function Toggler()
{
    return (
        <DurationContext.Consumer>
            {({duration, setDuration}) => (
                <div>
                    <div>
                        <span>Monthly</span>
                        <button onClick={() => duration === "monthly" ? setDuration("yearly") : setDuration("monthly")}>
                            <div>Switch</div>
                        </button>
                        <span>Yearly</span>
                    </div>
                </div>
            )}
        </DurationContext.Consumer>
    )
}