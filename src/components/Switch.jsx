export default function Switch({page, setPage})
{
    const nextBtnStyle = "bg-marine-blue py-2 px-3 text-white font-[500] rounded-md outline-none border-none text-md";
    return (
        <div className="flex justify-between">
            <button
                className={`${page === 1 && "hidden"} text-cool-gray font-[700] py-2 px-3`}
                onClick={() => setPage(page - 1)}
            >Go Back</button>
            {page !== 1 ?
            <button
                className={nextBtnStyle}
                onClick={() => setPage(page + 1)}
            >{page === 4 ? "Confirm" : "Next Step"}</button>
            :
            <button
                className={nextBtnStyle}
                type="submit"
                form="input_form"
            >Next Step</button>}
            
        </div>
    )
}