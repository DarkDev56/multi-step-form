export default function Header({heading, content})
{
    return (
        <header>
            <h1>{heading}</h1>
            <p>{content}</p>
        </header>
    )
}