import canvaLogo from "./assets/canvaLogo.png";

function  Header(){
    return(
        <>
        <div className="header">
            <div className="logo">
                <img src={canvaLogo} alt="canva Img" />
            </div>
            <div className="link-container">
                <ul>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Plans</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Education</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>
            <div className="sign-container">
                <button className="btn sign-in">Sign up</button>
                <button className="btn log-in">Log in</button>
            </div>
        </div>
        
        </>
    )
}


export default Header