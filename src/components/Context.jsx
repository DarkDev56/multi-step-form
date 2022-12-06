import { createContext } from "react";

export const DurationContext = createContext({
    duration: "monthly",
    setDuration : () => {}
});

export const PlanContext = createContext({
    plan : {name: "arcade", price: 9},
    setPlan: () => {}
});

export const AddOnsContext = createContext({
    addOns: [],
    setAddOns: () => {}
});