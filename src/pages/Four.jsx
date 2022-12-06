import Header from "../components/Header";
import Bill from "../components/Bill";

export default function Four()
{
    return (
        <div>
            <Header
                heading="Finishing up"
                content="Double-check everything looks OK before confirming."
            />
            <div>
                <Bill />
            </div>
        </div>
    )
}