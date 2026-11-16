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
                            I am a Web Developer and ICT professional passionate about building innovative digital solutions,
                            exploring emerging technologies, and using technology to solve real-world problems. My expertise
                            spans front-end development, responsive web design, and software development, complemented by a
                            strong foundation in digital technologies and visual design.
                        </p>
                        <p>
                            Through my learning journey at Learning Lions, Power Learn Project, and other technology-focused
                            programmes, I have developed practical skills in HTML, CSS, JavaScript, PHP, WordPress, and
                            software engineering.
                        </p>
                        <p>
                            Currently serving as an ICT Coach at Learning Lions, I combine technical expertise with a passion
                            for digital education, mentoring learners and supporting the development of practical ICT skills. I
                            am driven by continuous learning, creative problem-solving, and building accessible, impactful
                            technology solutions.
                        </p>
                        <p>
                            My goal is to bridge technology and creativity to build meaningful digital experiences that make a
                            difference.
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