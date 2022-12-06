export default function AddOn({name, desc, price})
{
    return (
        <div>
            <div>
                <i className="fa fa-check"></i>
            </div>
            <div>
                <h4>{name}</h4>
                <p>{desc}</p>
            </div>
            <div>
                <span>+${price}/{"mo"}</span>
            </div>
        </div>
    )
}