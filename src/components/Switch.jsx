import { StepContext } from "./Context";

export default function Switch()
{
    const nextBtnStyle = "bg-marine-blue py-2 px-3 text-white font-[500] rounded-md outline-none border-none text-md";
    return (
        <StepContext.Consumer>
            {({step, setStep}) => (
                <div className="flex justify-between">
                <button
                    className={`${step === 1 && "hidden"} text-cool-gray font-[700] py-2 px-3`}
                    onClick={() => setStep(step - 1)}
                >Go Back</button>
                {step !== 1 ?
                <button
                    className={nextBtnStyle}
                    onClick={() => setStep(step + 1)}
                >{step === 4 ? "Confirm" : "Next Step"}</button>
                :
                <button
                    className={nextBtnStyle}
                    type="submit"
                    form="input_form"
                >Next Step</button>}
            </div>
            )}
        </StepContext.Consumer>
    )
}