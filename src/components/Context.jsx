import { createContext } from "react";

export const DurationContext = createContext({
    duration: "monthly",
    setDuration : () => {}
});

export const PlanContext = createContext({
    plan : {name: null, price: null},
    setPlan: () => {}
});

export const AddOnsContext = createContext({
    addOns: [],
    setAddOns: () => {}
});