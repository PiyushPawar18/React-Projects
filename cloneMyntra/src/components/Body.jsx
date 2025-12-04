import "./Body.css"
import Root,{useState,useEffect} from "react"

function Body() {
    const imgDetails = [
        {id:1,src:"./src/assets/img/bottle.avif",description:"Gym Water Bottle",price:"400",oldPrice:"600",discount:"30%"},
        {id:2,src:"./src/assets/img/cricketkit1.avif",description:"Cricket kit",price:"1400",oldPrice:"2000",discount:"30%"},
        {id:3,src:"./src/assets/img/shoes1.avif",description:"Shoes",price:"800",oldPrice:"1200",discount:"30%"},
        {id:4,src:"./src/assets/img/cricketkit2.avif",description:"Cricket kit",price:"1600",oldPrice:"2200",discount:"30%"},
        {id:5,src:"./src/assets/img/shoes2.avif",description:"Shoes",price:"1200",oldPrice:"1600",discount:"30%"},
        {id:6,src:"./src/assets/img/t-shirt.avif",description:"t-shirt Combo",price:"800",oldPrice:"1000",discount:"30%"},
        {id:7,src:"./src/assets/img/shoes3.avif",description:"Shoes",price:"1300",oldPrice:"1800",discount:"30%"},
        {id:8,src:"./src/assets/img/t.webp",description:"Gray t-shirt",price:"400",oldPrice:"600",discount:"30%"},
        {id:9,src:"./src/assets/img/body-spray.avif",description:"Fresh Body spray",price:"600",oldPrice:"800",discount:"30%"},
        {id:10,src:"./src/assets/img/bluet-shirt.png",description:"blue t-shirt",price:"400",oldPrice:"600",discount:"30%"},
        {id:11,src:"./src/assets/img/oranget-shirt.png",description:"orange t-shirt",price:"400",oldPrice:"600",discount:"30%"},
    ]
    const [items , setItem] = useState(imgDetails)
    function handleRange(rangeNo){
        const newArr = imgDetails.filter(item => item.price < rangeNo+1)
        setItem(newArr)
    }
    const displayAllItem = () => {
        // const allitems = imgDetails.map(item => item)
        // setItem(allitems)
        // setItem(imgDetails)
        setItem([...imgDetails])
    }
    let rangePrice = 0;
    return (
        <div className="Body-container">
            <div id="offerImg">
                <img src="./src/assets/GetOffer.png" alt="offerImg" />
            </div>
            <div id="range">
                <b>Range : </b>
                <button onClick={displayAllItem}>All</button>
                <button onClick={() => handleRange(600)}>&#8377;0-&#8377;600</button>
                <button onClick={() => handleRange(1000)}>&#8377;0-&#8377;1000</button>
                <button onClick={() => handleRange(1500)}>&#8377;0-&#8377;1500</button>
                <button onClick={() => handleRange(2000)}>&#8377;0-&#8377;2000</button>
            </div>
            <div className="Card-container">
                {
                    items.map((item,range) => 
                    <div className="card" key={range}>  
                        <img src={item.src} alt="" />
                        <div id="card-details">
                          <p>{item.description}</p>
                          <p><b>{item.discount} &#8377;{item.price}</b><sup><del>{item.oldPrice}</del></sup></p>
                          <button>Add to Cart</button>
                        </div>
                    </div>
                    
                )
                }

            </div>
        </div>
    )
}
export default Body

