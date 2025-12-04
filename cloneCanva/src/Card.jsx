

function Card(props) {
    const cardStyle = {
        flex: props.flex || '1',
        height: "25rem",
        backgroundColor: props.bgColor || '#282c34', // default color if not provided
        color: props.textColor || 'white',            // default text color if not provided
        padding: '2rem',
        borderRadius: '10px',
        backgroundImage: props.bgImg ? `url(${props.bgImg})` : 'none', // ✅ background image
        backgroundSize: 'cover',       // makes the image fill the card
        backgroundPosition: 'center',  // centers the image
        backgroundRepeat: 'no-repeat', // no repeating pattern
    };
    const button = {
        marginTop: "2rem",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
    }
    return (
        <div style={cardStyle} className="card">
            <h3>{props.title}</h3>
            <button style={button}>{props.btnText || "Generate"}</button>
        </div>
    );
}

export default Card