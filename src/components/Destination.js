import React from 'react'
import moon from "../images/moon.png"
import mars from "../images/mars.png"
import europa from "../images/europa.png"
import titan from "../images/titan.png"
import { useState } from 'react'




const Destination = () => {
    const [planetIndex, setPlanetIndex] = useState(0)
    const destinationPlanets = [
        {
            name:"MOON",
            description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            avgDistance:"384,400 km",
            est:"3 days",
            img:moon,
        
        },
        {
            img:mars,
            name:"MARS",
            description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            avgDistance:"225 MIL. km",
            est:"9 months",
        
        },
        {
            img:europa,
            name:"EUROPA",
            description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            avgDistance:"628 MIL. km",
            est:"3 years",
        
        },
        {
            img:titan,
            name:"TITAN",
            description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            avgDistance:"1.6 BIL. km",
            est:"7 years",
        
        },
    ] 
    
    function getPlanetPage(index){
        setPlanetIndex(index)
        console.log(document.querySelectorAll(".planetsTitles"))
    }
    return (
        <section className="destinationPlanets">
            <div>
                <div className="title"><span className="num">01</span> Pick your destination</div>
                    <img src={destinationPlanets[planetIndex].img} className="planetsImg" alt="" />
            </div>
            <div className="secondDiv">
                    <ul className="planetsTitles flex jc-sb">
                    <li><a onClick={()=>getPlanetPage(0)} className={planetIndex == 0 ? "line" : ""}>MOON</a></li>
                    <li><a onClick={()=>getPlanetPage(1)} className={planetIndex == 1 ? "line" : ""}>MARS</a></li>
                    <li><a onClick={()=>getPlanetPage(2)} className={planetIndex == 2 ? "line" : ""}>EUROPA</a></li>
                    <li><a onClick={()=>getPlanetPage(3)} className={planetIndex == 3 ? "line" : ""}>TITAN</a></li>
                    </ul>
                    <article>
                    <h2 className="planetName">{destinationPlanets[planetIndex].name}</h2>
                    <p>{destinationPlanets[planetIndex].description}</p>
                    <hr />
                    <div className="botInfo">
                        <div>
                            <p className="small-headings">AVG. DISTANCE</p>
                            <p className="medium-txt">{destinationPlanets[planetIndex].avgDistance}</p>
                        </div>
                        <div>
                            <p className="small-headings">Est. travel time</p>
                            <p className="medium-txt">{destinationPlanets[planetIndex].est}</p>
                        </div>
                    </div>
                    </article>
            </div>
        </section>
    )
}

export default Destination
