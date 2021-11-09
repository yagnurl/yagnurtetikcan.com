import "./portfolio.scss"
import PortfolioList from '../portfolioList/PortfolioList'
import {useState, useEffect} from "react"
import {featuredPortfolio, webPortfolio, uiPortfolio} from "../../data"


export default function Portfolio() {

    const [selected,setSelected] = useState("featured");
     const [data, setData] = useState([]);
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "ui",
            title: "UI Design"
        },
        {
            id: "web",
            title: "Web Development"
        },
        
    ]
    
    useEffect(() => {
       switch(selected){
           case "featured":
               setData(featuredPortfolio);
               break;
           case "web":
               setData(webPortfolio);
               break;
           case "ui":
               setData(uiPortfolio);
               break;
               default:
                   setData(featuredPortfolio);
       }

    },[selected])

    return (
    <div className="portfolio" id="portfolio">
     <div> <h1>Portfolio</h1></div>
<div>
         <ul>
            {list.map(item => (
                <PortfolioList 
                title={item.title} 
                active={selected === item.id} 
                setSelected={setSelected} 
                id={item.id}
                />
            )
            )}
         </ul>
         </div>
         <div className="container">
             {data.map(item=> (

             <div className="item">
                 <img src={item.img} alt="" />
                 <h3>{item.title}</h3>
             </div>
             ))}
             
         </div>
    </div>
    )
}
