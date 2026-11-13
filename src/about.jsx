import { useEffect, useState } from "react";
import"./about.css";
import freelancer from "./assets/freelance.png"
function Aboutme(){
     const aboutcolor=['gold','yellow','white']
    const[colorr,setcolorr]=useState(0);
    useEffect(()=>{const venom=setInterval(() => {
        setcolorr(prev=>(prev+1)%aboutcolor.length)
        
    },1000);
     return () => clearInterval(venom);

    },[])
    return(
        <>
        <section className="aboutsection" id="abouts1"><span className="ds">. </span>
          
            
            <h4 className="skills1" >
                        <div
                            className="carrerDotss wess"
                            style={{backgroundColor:aboutcolor[colorr]  }}


                        ></div>
                        About Me
                    </h4> <h1 className="whoiam">Who I Am_</h1>
            <div className="div1s">
            <div className="aboutdiv1">
                    <h5 className="aboutdescrip1">I am a passionate and motivated Junior Web Developer with a solid foundation in visual design and front-end web development. While I am in the early stages of my professional journey, I have built my skills through personal projects, practice and continuous learning. I am eager to grow, take on new challenges and contribute to a team where I can learn while adding value.</h5>
            </div>
            <div className="imgdiv"><img src={freelancer} className="imgq"/></div>
            </div>
            
            
        </section>
        </>
    )
}
export default Aboutme;