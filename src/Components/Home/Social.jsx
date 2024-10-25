import "./home.css"

export function Social(){
    return (
        <div className="home_social_links">
            <a href="https://www.instagram.com/viera_1511?igsh=cmJ5MTc2OHZycnNu&utm_source=qr" className="home_social_icon" target="_blank">
                <img src="src/assets/Icons/instagram.svg" alt="Instagram_link" />
            </a>
            <a href="https://github.com/DiegoViera1511" className="home_social_icon" target="_blank">
                <img src="src/assets/Icons/github.svg" alt="github_link"/>
            </a>
            <a href="www.linkedin.com/in/diego-manuel-viera-martínez-1b35a32b6" className="home_social_icon" target="_blank">
                <img src="src/assets/Icons/linkedin.svg" alt="linkedin_link" />
            </a>
        </div>
    )
}