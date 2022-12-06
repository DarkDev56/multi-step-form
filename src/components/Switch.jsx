export default function Switch({page})
{
    return (
        <div>
            <button
                className=""
            >{page === 4 ? "Confirm" : "Next Step"}</button>
            <button
                className={`${page === 1 && "hidden"}`}
                
            >Go Back</button>
        </div>
    )
}