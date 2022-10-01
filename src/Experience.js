import React from 'react';
import './App.css';
import CapExperience from './CapExperience';
import ApsideExperience from './ApsideExperience';
import CosmoExperience from './CosmoExperience';
import './styles.css';

class Experience extends React.Component {   
    render(){
        return (
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5 text-primary">Experiences</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"><CapExperience></CapExperience></h3>
                            <div class="subheading mb-3">Capgemini (ORANO - CEA), Bagnols-sur-Cèze </div>
                            <p class="text-justify">
                            Intégration d'une équipe locale pour la gestion du périmètre informatique du site. 
                            Mes objectifs principaux sont la maintenance de nos infrastructures, la gestion des tâches de production de l'équipe et la mise en place de nouvelles infrastructures.
                            </p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Janvier 2021 - Aujourd'hui</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0"><ApsideExperience></ApsideExperience></h3>
                            <div class="subheading mb-3">Apside (Crédit Agricole Immobilier), Toulouse</div>
                            <p class="text-justify">Gestion d’un projet au sein du Crédit Agricole Immobilier afin de les aider à la migration de tout leur
                                datacenter vers Microsoft Azure. Création d’une application web afin de
                                centraliser et exploiter les données réseaux et sécurité présentes sous Microsoft
                                Azure.</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Avril 2020 - Septembre 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                        <h3 class="mb-0"><CosmoExperience></CosmoExperience></h3>
                            <div class="subheading mb-3">CoSMo Software Consulting Pte Ltd, Singapour</div>
                            <p class="text-justify">
                                L'objectif était d'obtenir une plateforme web utilisant AWS et Microsoft Azure et permettant l'automatisation de tests pour nos clients dans le domaine WebRTC.
                                Mon rôle principal : L'extension du projet sur la plateforme de Cloud Computing Microsoft Azure.
                            </p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">Avril 2019 - Août 2019</span></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Experience;