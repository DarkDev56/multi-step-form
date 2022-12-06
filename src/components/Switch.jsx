export default function Switch({page, setPage})
{
    return (
        <div>
            <button
                className={`${page === 1 && "hidden"}`}
                onClick={() => setPage(page - 1)}
            >Go Back</button>
            {page !== 1 ?
            <button
                className=""
                onClick={() => setPage(page + 1)}
            >{page === 4 ? "Confirm" : "Next Step"}</button>
            :
            <button
                className=""
                type="submit"
                form="input_form"
            >Next Step</button>}
            
        </div>
    )
}