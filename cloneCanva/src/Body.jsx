
import canvaAdv from "./assets/canvaAdv.png"
import Card from "./Card.jsx"
import imgGen from "./assets/img-generator.avif"

function Body() {
    return (
        <div className="main">
            <div className="Heading">
                <span id="left-block">

                    <h1>Where heart meets art</h1>
                    <p>Canva makes it easy to create and share professional designs.</p>
                    <button id="go-toSign">Sign up and start designing</button>

                </span>
                <span id="right-block">
                    <img src={canvaAdv} alt="canvaAdv" />
                </span>
            </div>
            <div className="template">
                <h1>Explore Canva's Templates and AI Tools</h1>
                <div className="row">
                    <Card title="Bye-bye background, in a single click" bgColor="#FF8F8F" textColor="white" btnText="Remove background"></Card>
                    <Card title="Watch your words turn into production-quality visuals with AI" bgColor="#E9D484" textColor="black" flex="2" btnText="Generate media"></Card>
                    <Card title="Make easy edits with an AI-powered editor" bgColor="#fd9445ff" textColor="white" flex="1" btnText="Edit an image"></Card>
                </div>
                <div className="row">
                    <Card title="Make your videos look awesome on any screen" bgColor="#70B2B2" textColor="white" flex="2" btnText="Edit a video"></Card>
                    <Card title="Create scroll-stopping social media content for any platform" bgColor="#450693" textColor="white" btnText="Design for social media"></Card>
                    <Card title="Design, present & inspire with presentations" bgColor="#DD7BDF" textColor="white" flex="1" btnText="Create a presentation"></Card>
                </div>
                <div className="row">
                    <Card title="Try Image Generator" textColor="white" btnText="Generate" bgImg={imgGen}></Card>
                </div>
            </div>
        </div>
    );
}
export default Body