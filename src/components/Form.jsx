import Steps from "./Steps";
import Menu from "./Menu";
import { DurationContext, PlanContext, AddOnsContext, StepContext } from "./Context";
import { useState } from "react";

export default function Form()
{
    const [step, setStep] = useState(1);
    const [duration, setDuration] = useState("monthly");
    const [addOns, setAddOns] = useState([]);
    const [plan, setPlan] = useState({ name : "arcade", price: 9 });

    const FormWithContext = () => (
        <StepContext.Provider value={{step, setStep}}>
            <DurationContext.Provider value={{duration, setDuration}}>
                <PlanContext.Provider value={{plan, setPlan}}>
                    <AddOnsContext.Provider value={{addOns, setAddOns}}>
                            <Steps />
                            <Menu />
                    </AddOnsContext.Provider>
                </PlanContext.Provider>
            </DurationContext.Provider>
        </StepContext.Provider>
    );

    return (
        <div className="font-primary md:rounded-md md:shadow-xl md:relative lg:w-full lg:max-w-5xl lg:max-h-[36rem] lg:bottom-0">
            <div className="lg:flex">
                <FormWithContext />
            </div>
        </div>
    );
}