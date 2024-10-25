import "./footer.css"

export function Footer(){
    return(
        <footer className="footer">
            <div className="footer_container">
                <h1 className="footer_title">Viera</h1>
                <a href="#home">Home <i className="uil uil-arrow-up"></i></a>
                <span className="footer_social">
                    <a href="www.linkedin.com/in/diego-manuel-viera-martínez-1b35a32b6"  target="_blank">
                         <img src="src/assets/Icons/linkedin.svg"/>
                    </a>
                    <a href="https://www.instagram.com/viera_1511?igsh=cmJ5MTc2OHZycnNu&utm_source=qr"  target="_blank">
                         <img src="src/assets/Icons/instagram.svg"/>
                    </a>
                    <a href="https://github.com/DiegoViera1511"  target="_blank">
                        <img src="src/assets/Icons/github.svg"/>
                    </a>
                </span>
            </div>
        </footer>
    )
}