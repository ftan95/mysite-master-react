import React from "react";
import { Link } from "react-router-dom";
import './footer.css';
import email from "./email.svg";
import facebook from "./facebook.svg";
import linkedin from './linkedin.svg';
import pinterest from './pinterest.svg';

function Footer() {
    return (
        <div className = "footer">
			<div className = "container-fluid">
				<div>
					<div className = "media-links row myRow">
						<div className = "col-md-1">
							<div className = "facebook">
								<a href = "#"><img className = "img-responsive" src = {facebook}/></a>
							</div>
						</div>

						<div className = "col-md-1">
							<div className = "linkedin">
								<a href = "#"><img className = "img-responsive" src = {linkedin}/></a>
							</div>
						</div>

						<div className = "col-md-1">
							<div className = "pinterest">
								<a href = "#"><img className = "img-responsive" src = {pinterest}/></a>
							</div>
						</div>

						<div className = "col-md-1">
							<div className = "email-icon">
								<a href = "#"><img className = "img-responsive" src = {email}/></a>
							</div>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-6 col-md-6">
						<div className = "personal-contact phone">
							<h4>Phone: XXXXXX</h4>
						</div>
					</div>

					<div className = "col-sm-6 col-md-6">
						<div className = "personal-contact email-personal-contact">
							<h4>Email: XXXXX@gmail.com</h4>
						</div>
					</div>
				</div>

				<div className = "row">
					<div className = "col-sm-4 col-md-4 text-center">
						<div className = "company-information">
							<h3>XXXX</h3>
							<h4>Copyright &copy; 2021</h4>
							<h4>NY</h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "home-footer">
							<h4><Link to="/">Home</Link></h4>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "portfolio-footer">
							<h4><Link to="/portfolio">Portfolio</Link></h4>
							<ul>
								<li><a href = "#">Project1</a></li>
								<li><a href = "#">Project2</a></li>
								<li><a href = "#">Project3</a></li>
								<li><a href = "#">See All</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "resume-footer">
							<h4><a href = "#">Resume</a></h4>
							<ul>
								<li><a href = "#">Download</a></li>
							</ul>
						</div>
					</div>

					<div className = "col-sm-2 col-md-2 text-center">
						<div className = "contact-footer">
							<h4><Link to="/contact">Contact</Link></h4>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Footer;