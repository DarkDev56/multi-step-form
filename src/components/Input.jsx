export default function Input({ name, type, placeholder, value, onChange, pattern})
{
    return (
        <div>
            <label>{name}</label>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} required={true} pattern={pattern} />
        </div>
    )
}