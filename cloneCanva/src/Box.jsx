import box1 from "./assets/box1.png"
import box2 from "./assets/box2.png"
import box3 from "./assets/box3.png"
import box4 from "./assets/box4.png"
import "./Box.css"
function Box() {
    const imgs = [
        { id: 1, src: box1, description: "Set up a Brand Kit to unify your designs", btnText: "Learn More" },
        { id: 2, src: box2, description: "Empower your team to scale content", btnText: "Learn More" },
        { id: 3, src: box3, description: "Collaborate & create in real time", btnText: "View Plans" },
        { id: 4, src: box4, description: "Protect and secure your data", btnText: "Learn More" }
    ]
    return (
        <div className="box-main">
            <div className="heading-box">
                <h1>Our Business Features</h1>
                <p>Enhance the design capabilities of your team or your entire business with Canva's business plans! To enquire about our </p>
                <p>Enterprise plan, please contact us <a href="#">here!</a></p>
            </div>
            <div className="box-container">

                {

                    imgs.map((img => <div className="box" key={img.id}>
                        <div className="containt">
                            <h2>{img.description}</h2>
                            <button>{img.btnText}</button>
                        </div>
                        <img src={img.src} alt={img.src} />
                    </div>))
                }


                {/* <img src={box1} alt="" />
        <img src={imgs[0].src} alt="" /> */}
            </div>
        </div>
    );
}
export default Box