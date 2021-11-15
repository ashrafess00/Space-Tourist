import React, { useState } from 'react'
import Douglas from "../images/Douglas.png"
import Mark from "../images/Mark.png"
import Victor from "../images/Victor.png"
import Anousheh from "../images/Anousheh.png"

const Crew = () => {
    const[crewsIdx , setCrewsIdx] = useState(0)
    const crewsInfo = [
        {
            img:Douglas,
            desc:"Commander",
            name:"Douglas Hurley",
            bio:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",

        },
        {
            img:Mark,
            desc:"Mission Specialist",
            name:"MARK SHUTTLEWORTH",
            bio:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        {
            img:Victor,
            desc:"PILOT",
            name:"Victor Glover",
            bio:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        }
        ,
        {
            img:Anousheh,
            desc:"Flight Engineer",
            name:"Anousheh Ansari",
            bio:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        }
    ]

    const getCrewInfo = (index)=>{
        setCrewsIdx(index)
    }
    return (
        <>
        <p className="title crewTitle"><span className="num">02</span> Meet your crew</p>
        <section className="crews">
                <img src={crewsInfo[crewsIdx].img} alt="" />
                <div>
                    <div className="dots flex jc-sb m-c">
                        <div onClick={()=>getCrewInfo(0)} className={crewsIdx == 0 ? "showOp" : ""}></div>
                        <div onClick={()=>getCrewInfo(1)} className={crewsIdx == 1 ? "showOp" : ""}></div>
                        <div onClick={()=>getCrewInfo(2)} className={crewsIdx == 2 ? "showOp" : ""}></div>
                        <div onClick={()=>getCrewInfo(3)} className={crewsIdx == 3 ? "showOp" : ""}></div>
                    </div>
                    <p className="desc">{crewsInfo[crewsIdx].desc}</p>
                    <h2 className="crewName">{crewsInfo[crewsIdx].name} </h2>
                    <p className="bio">{crewsInfo[crewsIdx].bio}</p>
                </div>
        </section>
        </>
        
    )
}

export default Crew
