import "./contact_card.css"

export function Contact_Card(){
    return (
        <div className="contact_card">
            <div className="contact_social">
                <span>
                    <i className="uil uil-envelope-alt social_icon"></i>
                    <a href="mailto:diegovieramartinez@gmail.com"> diegovieramartinez@gmail.com</a>
                </span>
                <span>
                    <i className="uil uil-whatsapp social_icon"></i>
                    <a href="https://wa.me/5354714256">+53 54714256</a>
                </span>
                <span>
                    <i className="uil uil-telegram-alt social_icon"></i>
                    <a href="t.me/viera1511">@viera1511</a>
                </span>
            </div>
            <div className="card_logo">
                <span>
                    <img src="src/assets/Images/Viera_Logo.png" className="logo"/>
                </span>
            </div>
        </div>
    )
}