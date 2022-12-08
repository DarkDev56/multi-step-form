import thankYou from "../images/icon-thank-you.svg";

export default function five()
{
    return (
        <div className="flex flex-col gap-3 p-5">
            <div className="w-full flex justify-center">
                <img src={thankYou} alt="icon-thank-you" />
            </div>
            <h2 className="text-marine-blue font-[700] text-3xl flex justify-center">Thank you!</h2>
            <p className="text-cool-gray text-lg text-center">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
    )
}