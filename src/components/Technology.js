import React, { useRef, useState } from 'react'

import launch from "../images/launch.png"
import launchPc from "../images/launchPc.jpg"

import spaceport from "../images/spaceport.png"
import spaceportPc from "../images/spaceportPc.jpg"

import spacecapsule from "../images/spacecapsule.png"
import spacecapsulePc from "../images/spaceapsulePc.jpg"

const Technology = () => {
    const [techIdx , setTechIdx] = useState(0)
    const teckInfo = [
        {
            img:launch,
            imgPc:launchPc,
            name:"LAUNCH VEHICLE",
            desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            img:spaceport,
            imgPc:spaceportPc,
            name:"SPACEPORT",
            desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch." 
        },
        {
            img:spacecapsule,
            imgPc:spacecapsulePc,
            name:"SPACE CAPSULE",
            desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." 
        }
    ]
    const getTechInfo = (idx)=>{
        setTechIdx(idx)
    }
    return (
        <section className="tech">
            <p className="title"><span className="num">03</span> SPACE LAUNCH 101</p>
            <div>
                <picture>
                    <source media="(min-width:1200px)" srcSet={teckInfo[techIdx].imgPc}/>
                    <img src={teckInfo[techIdx].img} alt="" />
                </picture>
                

                <div className="info">
                    <div className="numberC flex jc-sb m-c">
                        <div  className={`flex jc-c al-c ${techIdx == 0 ? "colored" : ""}`} onClick={()=>getTechInfo(0)}>1</div>
                        <div  className={`flex jc-c al-c ${techIdx == 1 ? "colored" : ""}`} onClick={()=>getTechInfo(1)}>2</div>
                        <div  className={`flex jc-c al-c ${techIdx == 2 ? "colored" : ""}`} onClick={()=>getTechInfo(2)}>3</div>
                    </div>
                    <div className="infoTwo">
                        <p>THE TERMINOLOGY…</p>
                        <h2>{teckInfo[techIdx].name}</h2>
                        <p>{teckInfo[techIdx].desc}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Technology
