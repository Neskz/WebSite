import React from 'react';
import './App.css';
import './styles.css';

class About extends React.Component {
    render(){
        return (
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0 text-second">
                        Aurélien
                        <span class="text-primary"> Rabet</span>
                        
                    </h1>
                    <div class="subheading mb-5">
                        Auvergne-Rhônes-Alpes, FRANCE · 06XXXXXXXX · 
                        <a href="mailto:arabet37@gmail.com"> arabet37@gmail.com</a>
                    </div>
                    <p class="lead mb-5 justify-text">Consultant Infrastructure chez Capgemini, particulièrement intéressé par tout ce qui tourne autour du Cloud. 
                    Je suis diplômé depuis 2020 d'un diplôme d'ingénieur informatique option Sécurité et Réseau. 
                    Je suis dynamique et curieux avec pour valeur dominante le travail en équipe, le partage afin d'avoir une progression collective et permanente.  </p>
                    <div class="social-icons">
                        <a class="social-icon" href="https://www.linkedin.com/in/aurelienrabet/"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="https://www.root-me.org/Neska?inc=score&lang=fr">
                        <i class="	fas fa-user-secret"></i>
                        </a>
                        <a class="social-icon" href="https://snowball.gg/fr/rainbow-six-siege/coach/neska">
                        <i class="	fas fa-gamepad"></i>
                        </a>
                        <a class="social-icon" href="https://twitter.com/NeskaR6S"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;