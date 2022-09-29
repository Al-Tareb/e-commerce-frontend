import React from 'react';
import "./Team.css"
import Abdullah from "../assets/team1.png"


const Team = () => {
  return (
    <div>
      <section id="tea">
            <article class="tea-container">
                <div class="section-header">
                    <h2 class="section-tittle">Our Team</h2>
                    <span class="line"></span>
                </div>
                <div class="team-container">


                    <figure class="team-section top-to-bottom-effect">
                        <div class="team-img">
                            <img src={Abdullah} alt="" />
                            <div class="team-img-icon">
                                <a href="#"><i class="fab fa-facebook"></i></a>
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-google-plus"></i></a>
                            </div>
                        </div>
                        <div class="team-img-desc">
                            <h3>Abdullah Al-Tareb</h3>
                            <p>Web Developer</p>
                        </div>
                    </figure>




                   
                </div>

            </article>
        </section>

    </div>
  )
}

export default Team
