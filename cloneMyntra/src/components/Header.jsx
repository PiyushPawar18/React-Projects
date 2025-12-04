import "./Header.css"
import { Link } from "react-router";
import { CiSearch } from "react-icons/ci";
function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src="./src/assets/myntraLogo.png" alt="" id="logo" /></Link>
                </div>
                <div className="navlink-container">
                    <ul>
                        <li className="navlinks"><Link to="/men">MEN</Link></li>
                        <li className="navlinks"><Link to="/women">WOMEN</Link></li>
                        <li className="navlinks"><Link to="/">KIDS</Link></li>
                        <li className="navlinks"><Link to="/">HOME</Link></li>
                        <li className="navlinks"><Link to="/">BEAUTY</Link></li>
                        <li className="navlinks"><Link to="/">GENZ</Link></li>
                        <li className="navlinks">
                            <Link to="/">
                                STUDIO <sup className="sup">NEW</sup>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div id="search-bar">
                    <CiSearch className="search" />
                    <input type="search" placeholder="Search for produts,brands and more" id="search" />
                </div>
                <div id="profile-bar">
                    <span>
                        <img src="./src/assets/profile.png" alt="" />
                        <p>profile</p>
                    </span>
                    <span>
                        <img src="./src/assets/wishlist.png" alt="" />
                        <p>wishlist</p>
                    </span>
                    <span>
                        <img src="./src/assets/bag.png" alt="" />
                        <p>bag</p>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Header