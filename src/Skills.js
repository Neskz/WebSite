import React from 'react';
import './App.css';
import './styles.css';

class Skills extends React.Component {
    render(){
        return (
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5 text-primary">Compétences & Certifications</h2>
                    <div class="subheading mb-3 colortitle">Compétences techniques</div>
                    <ul>
                        <li>
                            <>Langages de programmation ou frameworks/bibliothèques :  </>
                            <li title="HTML" class="list-inline-item"><i class="fab fa-html5"></i></li>
                            <li title="CSS" class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                            <li title="JS" class="list-inline-item"><i class="fab fa-js-square"></i></li>
                            <li title="Angular" class="list-inline-item"><i class="fab fa-angular"></i></li>
                            <li title="React" class="list-inline-item"><i class="fab fa-react"></i></li>
                            <li title="Node" class="list-inline-item"><i class="fab fa-node-js"></i></li>
                            <li title="Java" class="list-inline-item"><i class="fab fa-java"></i></li>
                            <li title="Python" class="list-inline-item"><i class="fab fa-python"></i></li>
                            <img title="C" class="icon-image-prog" src="c.jpg" alt="C"/>
                            <img title="C++" class="icon-image-prog" src="c++.jpg" alt="C++"/>
                            <img title="Powershell" class="icon-image" src="powershell.jpg" alt="Powershell"/>
                        </li>
                        <li>
                            <>Bases de données : </>
                            <img title="SQL" class="icon-image" src="sql.jpg" alt=""/>
                            <img title="MongoDB" class="icon-image" src="mongoDB.jpg" alt=""/>
                        </li>
                        <li>
                            <>Plateformes de Cloud Computing : </>
                            <li title="AWS" class="list-inline-item"><i class="fab fa-aws"></i></li>
                            <img title="Azure" class="icon-image" src="azure.jpg" alt=""/> 
                        </li>
                        <li>
                            <>Environnement : </> 
                            <li title="Linux" class="list-inline-item"><i class="fab fa-linux"></i></li>
                            <li title="Windows" class="list-inline-item"><i class="fab fa-windows"></i></li>
                        </li>
                        <li>
                            <>Autres : </> 
                            <li title="GitHub" class="list-inline-item"><i class="fab fa-github"></i></li>
                            <li title="Docker" class="list-inline-item"><i class="fab fa-docker"></i></li>
                            <li title="Jira" class="list-inline-item"><i class="fab fa-jira"></i></li>
                            <img title="CCNA" class="icon-image-prog" src="ccna.jpg" alt="CCNA"/> 
                            <img title="ITIL v4" class="icon-image" src="itil.jpg" alt="ITIL"/> 
                        </li>
                    </ul>
                    <div class="subheading mb-3 colortitle">Compétences supplémentaires</div>
                    <ul>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Travailler en équipe pour atteindre des objectifs
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Encadrement d’une équipe, Gestion de conflits
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Gestion d’un planning collectif en adéquation avec des objectifs
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Analyser une situation et Prise de décision
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Rapidité d’exécution
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Autonomie, Organisation et Rigueur
                        </li>
                    </ul>
                    <div class="subheading mb-3 colortitle">Certifications</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-award" style={{color: 'gold'}}></i></span>
                            <a href="https://www.credly.com/badges/dabf862b-9ad8-494b-b025-db826feee019?source=linked_in_profile">Microsoft Azure (AZ-104) : Azure Administrateur</a>
                        </li>
                    </ul>
                </div>
            </section>  
        )
    }
}

export default Skills;