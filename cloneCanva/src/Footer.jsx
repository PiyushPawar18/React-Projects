import canvaLogo from "./assets/canvaLogo.png";
import "./Footer.css"

function Footer() {
    return (
        <>
            <div className="footer">
                <div id="top-logo">
                    <img src={canvaLogo} alt="" />
                </div>
                <div id="bottom-info">
                    <div id="download">
                        <p>Download Canva for free</p>
                        <span>
                            <button>Window</button>
                            <button>Mac</button>
                        </span>
                    </div>
                    <div className="info-container">
                        <div id="product" className="flex">
                            <p id="title">Product</p>
                            <ul className="ul">
                                <li>Latest launches</li>
                                <li>Visual Suite</li>
                                <li>Magic Studio</li>
                                <li>Social media</li>
                                <li>Apps Marketplace</li>
                                <li>Print</li>
                                <li>Features</li>
                            </ul>
                        </div>
                        <div id="plans" className="flex">
                            <p id="title">Plans</p>
                            <ul className="ul">
                                <li>Pricing</li>
                                <li>Pro</li>
                                <li>Business</li>
                                <li>Enterprise</li>
                                <li>Education</li>
                                <li>Nonprofits</li>
                                <li>Higher education</li>
                            </ul>
                        </div>
                        <div id="help" className="flex">
                            <p id="title">Help</p>
                            <ul className="ul">
                                <li>Help Center</li>
                                <li>Security</li>
                                <li>Trust Center</li>
                                <li>Canva Safe AI</li>
                                <li>Accessibility</li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer