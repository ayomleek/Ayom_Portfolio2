import { useEffect, useState } from "react";
import "./About.css";
import freelancer from "../../assets/images/freelance.png";
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
                    <div className="aboutdescrip1">
                        <p>
                            I 'm a Web Developer and ICT professional with expertise in front-end development, responsive 
                            web design and software development, skilled in HTML, CSS, JavaScript, PHP and Python.
                        </p>
                        <p>
                            Trained through Learning Lions, Power Learn Project and other technology programmes, and currently 
                            serving as an ICT Coach at Learning Lions, where I mentor learners and build practical digital skills.
                        </p>
                        <p>
                            Driven by continuous learning and creative problem-solving, I bridge technology and creativity to 
                            build accessible, impactful digital experiences that solve real-world problems.
                        </p>
                    </div>
            </div>
            <div className="imgdiv"><img src={freelancer} className="imgq"/></div>
            </div>
            
            
        </section>
        </>
    )
}
export default Aboutme;