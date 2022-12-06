import thankYou from "../images/icon-thank-you.svg";

export default function five()
{
    return (
        <div>
            <div>
                <img src={thankYou} alt="icon-thank-you" />
            </div>
            <h2>Thank you!</h2>
            <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}