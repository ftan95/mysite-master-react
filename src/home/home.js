import React from "react";
import './home.css';
import Projects from "./projects/projects";
import Contact from "./contact/contact";

import developerdesign from './developerdesign.svg';
import innovativesolutions from './innovativesolutions.svg';
import passion from './passion.svg';
import responsivedesign from './responsivedesign.svg';

function Home() {
    return (
        <div>
            <div className = "main">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "entry-banner text-center">
                            <h1 id = "hello">Hello, I'm</h1>
                            <h1 id = "name">XXXX</h1>
                            <h1 id = "person-description">UI Developer. UX Desinger. Problem Solver.</h1>
                        </div>
                    </div>

                    <div className = "text-center">
                        <div className = "banner-buttons row myRow">
                            <div className = "col-md-2">
                                <a className = "btn btn-default btn-border" href = "#about">Info</a>
                            </div>

                            <div className = "col-md-2">
                                <a className = "btn btn-default btn-border" href = "#projects">Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "about" id="about">
                <div className = "container-fluid">
                    <div className = "row">
                        <div className = "col-sm-12 col-md-12 text-center">
                            <div className = "about-header">
                                <h1>About Me</h1>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "col-sm-12 col-md-12 text-center">
                            <div className = "about-header-quote">
                                <h3>Sharing a little bit of my story...</h3>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "about-general-description ">
                            <div className = "col-sm-8 col-md-8 ">
                                <h2>General Overview</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "statistic-row">
                        <div className = "about-statistic-description">
                            <div className = "col-sm-8 col-md-8">
                                <h2>Statistics</h2>
                                <h5><em>And for those that don't fancy reading:</em></h5>
                                <br/>

                                <p>Male, 200 years old.</p>
                                <p>Five feet 110 inches</p>
                                <p>Favorite fonts:Roboto </p>
                                <p>Loves to learn new things</p>
        
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "about-option-buttons">
                            <div className = "col-sm-2 col-md-2">
                                <a href = "#contact" className = "btn btn-default btn-black-border">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = "summary">
                <div className = "container-fluid">
                    <div className = "summaryRow">
                        <div className = "row development-summary">
                            <div className = "col-md-2">
                                <div className = "development-img">
                                    <img className = "img-responsive" src ={developerdesign} alt="developer" />
                                </div>
                            </div>

                            <div className = "col-md-10">
                                <div className = "development-description">
                                    <h3>Development and Design</h3>
                                    <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
                                </div>
                            </div>
                        </div>

                        <div className = "row responsive-summary">
                            <div className = "col-md-2">
                                <div className = "responsive-img">
                                    <img className = "img-responsive" src ={responsivedesign} alt="response" />
                                </div>
                            </div>

                            <div className = "col-md-10">
                                <div className = "responsive-description">
                                    <h3>Responsive Layouts</h3>
                                    <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className = "summaryRow">
                        <div className = "row ideas-summary">
                            <div className = "col-md-2">
                                <div className = "idea-img">
                                    <img className = "img-responsive" src ={innovativesolutions} alt="innovate" />
                                </div>
                            </div>

                            <div className = "col-md-10">
                                <div className = "idea-description">
                                    <h3>Ideas and Solutions</h3>
                                    <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                                </div>
                            </div>
                        </div>

                        <div className = "row passion-summary">
                            <div className = "col-md-2">
                                <img className = "img-responsive" src ={passion} alt="passion" />
                            </div>

                            <div className = "col-md-10">
                                <div className = "passion-description">
                                    <h3>Passion and Dedication</h3>
                                    <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Projects />
            <Contact />
        </div>
    )
}

export default Home;