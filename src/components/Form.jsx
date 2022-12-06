import Steps from "./Steps";
import Menu from "./Menu";
import { DurationContext, PlanContext, AddOnsContext } from "./Context";
import { useState } from "react";

export default function Form()
{
    const [duration, setDuration] = useState("monthly");
    const [addOns, setAddOns] = useState([]);
    const [plan, setPlan] = useState({
        name : "arcade",
        price: 9
    });

    return (
        <div className="font-primary">
            <Steps />
            <DurationContext.Provider value={{duration, setDuration}}>
                <PlanContext.Provider value={{plan, setPlan}}>
                    <AddOnsContext.Provider value={{addOns, setAddOns}}>
                        <Menu />
                    </AddOnsContext.Provider>
                </PlanContext.Provider>
            </DurationContext.Provider>
        </div>
    );
}