import React from 'react';
import Projects from './Projects';
import Contact from './Contact';
import '../style.css';


const Home = () => {
        return (
        <>
            <div className="home-bg">
                <div className="overlay">
                    <div className="container overlay-container">
                    
                        <h1 className="display-3 heading-text center">Hi, I'm Henry. I design and build beautiful web applications</h1>
                        <div className="btn-container">
                            <button className="btn btn-outline-light btn-lg my-4">View My Work</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <section id="skills">
                <div className= "container">
                <div className="skills-wrapper">
                    
                    <h3 className="section-heading">My skills and tools</h3>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i className="fab fa-html5"></i>
                            <h5 className="card-title">HTML5</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-js"></i>
                            <h5 className="card-title">Javascript</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-css3"></i>
                            <h5 className="card-title">CSS</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i className="fab fa-python"></i>
                            <h5 className="card-title">Python</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-node"></i>
                            <h5 className="card-title">Node</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-less"></i>
                            <h5 className="card-title">Less</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    <div className="card skills-card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <i class="fab fa-react"></i>
                            <h5 className="card-title">React</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    </div>
                </div>
             
            </section>

            
            <Projects />
            <Contact />
            <section id="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <p>Henry Moland @copy 2019</p>
                    </div>
                </div>
            </section>
        </>
        )

}
export default Home;