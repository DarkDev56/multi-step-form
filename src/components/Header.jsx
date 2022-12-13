export default function Header({heading, content})
{
    return (
        <header className="mb-4">
            <h1 className="capitalize text-marine-blue font-bold text-2xl lg:text-3xl">{heading}</h1>
            <p className="capilalize text-cool-gray text-lg">{content}</p>
        </header>
    )
}