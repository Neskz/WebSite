import React from 'react';
import './App.css';
import './styles.css';

class Interests extends React.Component {
    render(){
        return (
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Intérêts</h2>
                    <ul class="list-inline line-space">
                    <li class=""><i class="interest-icon fas fa-gamepad" style={{color: "black"}}></i> Coach Esport (Niveau semi-professionel / <a href="https://snowball.gg/fr/rainbow-six-siege/coach/neska">Snowball Coach</a>)</li>
                    <li class=""><i class="interest-icon fas fa-swimmer" style={{color: "black"}}></i> Nageur/Sauveteur (Compétition niveau régional et national + Obtention du BNSSA)</li>
                    <li class=""><i class="interest-icon fas fa-plane" style={{color: "black"}}></i> Voyageur (Singapour, Thaïlande, Vietnam, Malaisie,...)</li>
                    <li class=""><i class="interest-icon fas fa-music" style={{color: "black"}}></i> Passioné de musique (Solfège)</li>
                    </ul>
                </div>
            </section>  
        )
    }
}

export default Interests;