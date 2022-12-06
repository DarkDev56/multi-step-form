export default function Input({ name, type, placeholder, value, onChange, pattern})
{
    return (
        <div className="flex flex-col">
            <label className="text-marine-blue font-[500] mb-2">{name}</label>
            <input
                className="outline-none w-full px-3 py-2 font-[400] border-cool-gray border-[1px] rounded-sm"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={true}
                pattern={pattern} />
        </div>
    )
}