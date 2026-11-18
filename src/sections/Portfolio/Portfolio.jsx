import { useState } from 'react';
import './Portfolio.css';
import imgs3 from "../../assets/images/billingsoft1.png";
import imgs2 from "../../assets/images/bikespare2.png";
import imgs4 from "../../assets/images/billingsoft2.png";
import imgs5 from "../../assets/images/busfleet1.png";
import imgs6 from "../../assets/images/busfleet2.png";


function Projects(props) {
    const [changeimg1, setchangeimg1] = useState(0)
    const [changeimg2, setchangeimg2] = useState(0)
    const [changeimg3, setchangeimg3] = useState(0)
    return (
        <>
            <section className='prosection'>
                <header className="projects-heading">
                    <h4 className="skills11 project-eyebrow">
                        <span className="carrerDotss wes project-heading-dot" aria-hidden="true"></span>
                        Digital Expertise
                    </h4>
                    <h1 className='prossName' id='projectss1'>Projects</h1>
                </header>

                <div className='projectbox'>

                    <div className='project1'>
                        <div className='pro1'>
                            <h1 className='heading'>enTRACK Agency Website</h1>
                            <div className='imagboxs'>
                                {changeimg1 === 0 && (
                                    <img src={props.images} alt='enTRACK Agency' className='proimgs1' onMouseEnter={() => setchangeimg1(1)} />)}
                                {changeimg1 === 1 && (<img src={imgs2} onMouseLeave={() => setchangeimg1(0)} alt='enTRACK Agency' className={`proimgs2 ${(changeimg1 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>A professional multi-page website for a creative social enterprise and incubator serving East African artists and businesses. It presents media production services, a gear rental catalog with booking inquiries, a merchandise showcase with WhatsApp ordering, and training programs, all under consistent brand identity and optimized for mobile users.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>
                                <h4 className='toolpro1'>TypeScript</h4>
                                <h4 className='toolpro1'>Node.js</h4>
                                <h4 className='toolpro1'>Next.js</h4>
                                <h4 className='toolpro1'>JavaScript</h4>
                            </div>
                            <div className='viewpro'>
                                <a href='https://github.com/visva532/Bike-spares' className='ach' target='_blank'>
                                <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span>
                                </h4></a>
                                <h4 className='prodate'>2026</h4>
                            </div>

                        </div>

                    </div>
                    <div className='project2'>
                        <div className='pro1'>
                            <h1 className='heading'>Young Dave Personal Website</h1>
                            <div className='imagboxs'>
                                {changeimg2 === 0 && (
                                    <img src={imgs3} alt='young dave' className='proimgs1' onMouseEnter={() => setchangeimg2(1)} />)}
                                {changeimg2 === 1 && (<img src={imgs4} onMouseLeave={() => setchangeimg2(0)} alt='young dave' className={`proimgs2 ${(changeimg2 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>A professional artist website for Young Dave, an emerging musician from Kakuma, built to grow his fan base and open doors to bookings and collaborations. It features an artist story, a music showcase with featured tracks and releases, and a contact section for booking inquiries. A mobile-first responsive layout ensures fans can discover and share his music from any device.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>
                                <h4 className='toolpro1'>Node.js</h4>
                                <h4 className='toolpro1'>JavaScript</h4>
                                <h4 className='toolpro1'>React</h4>
                                <h4 className='toolpro1'>Express</h4>
                            </div>
                            <div className='viewpro'>
                               <a href='https://github.com/visva532/Restaurant-Billing-Table-Management-System'target='_blank'> <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span></h4></a>
                                <h4 className='prodate'>2025</h4>
                            </div>

                        </div>

                    </div>
                    <div className='project3'>
                        <div className='pro1'>
                            <h1 className='heading'>SpendWise Expense Tracker</h1>
                            <div className='imagboxs'>
                                {changeimg3 === 0 && (
                                    <img src={imgs5} alt='expense tracker' className='proimgs1' onMouseEnter={() => setchangeimg3(1)} />)}
                                {changeimg3 === 1 && (<img src={imgs6} onMouseLeave={() => setchangeimg3(0)} alt='expense tracker' className={`proimgs2 ${(changeimg3 === 1) ? "disp" : ""}`} />)}</div>
                            <h3 className='prodescriptio'>A personal finance dashboard that gives users full visibility into their spending. Users log expenses by name, amount, category, and date, while budget cards and remaining balance update in real time. Includes an expense history table, reports, customizable settings, and dark mode for comfortable use. It has a clean, modern design and responsive layout.</h3>
                            <div className='toolsboxs'>
                                <h4 className='toolpro1'>HTML</h4>
                                <h4 className='toolpro1'>CSS</h4>

                                <h4 className='toolpro1'>JavaScript</h4>
                            </div>
                            <div className='viewpro'>
                               <a href='http://github.com/visva532/busfleet' target='_blank'> <h4 className='viewspros'>View Project<span className="material-icons" >open_in_new</span></h4></a>
                                <h4 className='prodate'>2025</h4>
                            </div>

                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
export default Projects;