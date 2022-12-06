export default function Switch({page, setPage})
{
    return (
        <div>
            <button
                className={`${page === 1 && "hidden"}`}
                onClick={() => setPage(page - 1)}
            >Go Back</button>
            <button
                className=""
                onClick={() => setPage(page + 1)}
            >{page === 4 ? "Confirm" : "Next Step"}</button>
        </div>
    )
}