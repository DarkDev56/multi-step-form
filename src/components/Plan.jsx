export default function Plan({name, price})
{
    return (
        <div>
            <img src={require(`../images/icon-${name}.svg`)} alt={`icon-${name}`} />
            <div>
                <h4 className="capitalize">{name}</h4>
                <p>{`$${price}/${"mo"}`}</p>
                <span>2 months free</span>
            </div>
        </div>
    )
}