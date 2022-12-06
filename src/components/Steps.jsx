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
                    return <li key={index}>
                        <span>{step.index}</span>
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