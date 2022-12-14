import React from "react";
import "./about.css";
import shopping  from "../assets/shopping.jpg"

const About = () => {
  return (
    <>

      <section className="about">
		<div className="main">
		
			<div className="about-text">
				<h2>ABOUT <span>US</span> </h2>
				<h5>Developer <span> Designer</span></h5>
				<p>We are web developer. We can provide clean code and pixel perfect design. We also make the website more & more interactive with web animations.We can provide clean code and pixel perfect design. We also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
				
			</div>
			<img src={shopping} alt="" />
		</div>
		<button className="about-button" type="button">CONTACT US</button>
	</section>

	<div className="service">
		<div className="title">
			<h2>OUR <span>SERVICES</span></h2>
		</div>

		<div className="box">
			<div className="card">
				<i className="fas fa-bars"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button-link" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-user"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button-link" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div className="card">
				<i className="far fa-bell"></i>
				<h5>Web Development</h5>
				<div className="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p >
						<a className="button-link" href="#">Read More</a>
					</p>
				</div>
			</div>
		</div>
	</div>
    </>
  );
};

export default About;
