import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer class="footer-distributed">
	    <section className='center-footer'>
	        <div class="footer-left">
              <span className="my_shop-footer"><Link className='item-link my-shopping-logo' to="/"><span className='shopping-logo'>A&A</span> Shopping</Link></span>
              <p class="footer-company-name">A&A Shopping © 2022</p>
            </div>
            <div class="footer-center">
			  <div>
			    <p><i class="fa-solid fa-location-dot"></i> Derfflinger Str, Hannover</p>
	            <p>444 S. a&a shopping</p>
			</div>
	        <p><i className="fa-solid center-phone fa-phone"></i> +1.555.555.5555</p>
              </div>
            <div class="footer-right">
              <div class="footer-icons">
	            <Link to="#"><i class="fa-brands fa-youtube"></i></Link>
	            <Link to="#"><i class="fa-brands fa-facebook"></i></Link>
	            <Link to="#"><i class="fa-brands fa-square-instagram"></i></Link>
	            <Link to="#"><i class="fa-brands fa-twitter"></i></Link>
                <Link to="#"><i class="fa-brands fa-linkedin-in"></i></Link>
	          </div>
              <div  className='support-email'>  
				<Link className='shopping-support-email' to="mailto:support@company.com"><i class="fa-solid fa-envelope-circle-check"></i>ashopping@gemail.com</Link>
              </div>
            </div>
	    </section>

			

		</footer>
  )
}

export default Footer