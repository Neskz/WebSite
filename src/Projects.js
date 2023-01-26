import React from 'react';
import './App.css';
import './styles.css';

class Projects extends React.Component {
    render(){
        return (
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5 text-primary">Projets</h2>
                    <div class="subheading mb-3 colortitle">ISIMA, 3ème année (Projet de 120 heures)</div>
                    <p>
                    Réalisation d’un audit de sécurité d’un site web : mise en place d’un périmètre, étude et rapport.<br></br>
                    <u>Méthodes</u> : Contrôle des versions, Tentative d'intrusion, Boîte Noire/Grise/Blanche, ...
                    </p>
                    <div class="subheading mb-3 colortitle">ISIMA, 2ème année (Projet de 60 heures)</div>
                    <p>
                    Mise en place d'une supervision sur des équipements réseaux (switchs, routeurs) avec l’utilisation du protocole SNMP.<br></br>
                    <u>Logiciel</u> : ServiceNav by Coservit.
                    </p>
                    <div class="subheading mb-3 colortitle">ISIMA, 1ère année (Projet de 20 heures)</div>
                    <p>
                    Résolution de 3 problèmes de mathématiques /informatique comme la simulation d’un poker fermé.<br></br>
                    <u>Langages</u> : Python et C.
                    </p>
                    <div class="subheading mb-3 colortitle">CPGE, Concours (Projet d'une durée de 6 mois)</div>
                    <p>
                    Simulation d’une file d’attente et comparaison de l’efficacité entre une file unique et plusieurs files.<br></br>
                    <u>Langages</u> : Python.
                    </p>
                </div>
            </section> 
        )
    }
}

export default Projects;