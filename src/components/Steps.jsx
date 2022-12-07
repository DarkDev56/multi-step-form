const stepsContext = [
    {index: 1, name: "Your info"},
    {index: 2, name: "Select plan"},
    {index: 3, name: "Add-ons"},
    {index: 4, name: "Summary"}
];

export default function Steps()
{
    return (
        <div>
            <ul>
                {stepsContext.map((step, index) => {
                    return <li key={index} className="flex items-center gap-4">
                        <span className="w-8 h-8 flex justify-center items-center border-[1px] border-black rounded-[50%]">{step.index}</span>
                        <div>
                            <h4>Step {step.index}</h4>
                            <p>{step.name}</p>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    );
}