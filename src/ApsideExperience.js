import React from 'react';
import './App.css';
import Warper from './Warper';
import Popup from 'reactjs-popup';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
};

const ApsideExperience = () => (
  <Popup
    trigger={
      <h3 class="mb-0">
        Stagiaire Ingénieur Infrastructures/Systèmes
      </h3>
    }
    modal
    lockScroll={true}
    contentStyle={contentStyle}
    nested
  >
    {close => (
      <div className="modal-content">
        <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Stagiaire Ingénieur Infrastructures/Systèmes</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
          <h4 class="modal-title" id="exampleModalLabel">Contexte</h4>
          <div className="context-body">
          Projet personnel encadré : Création d’une application web afin de centraliser et exploiter les données réseaux et sécurité présentes sous Microsoft Azure au sein d’un projet de migration de tout un datacenter vers Microsoft Azure.
          </div>
          <h4 class="modal-title" id="exampleModalLabel">Réalisations</h4>
          <h6 style={{color:'rgb(31,79,106)'}}>Création de l'application WEB</h6>
          <ul>
                <li>Réalisation puis ajustement du cahier des charges avec l'avancement de la migration</li>
                <li>Planification de réunions, discussions avec les interlocuteurs nécessaires à l'avancement et à la cohérence du projet</li>
                <li>Suivi de la migration réalisée par l'équipe à travers les réunions quotidiennes pour une évolution de l'application en temps réel ainsi qu'une montée en compétence sur Microsoft Azure et AzureDevOps</li>
          </ul>
          <h6 style={{color:'rgb(31,79,106)'}}>Elements de l'application</h6>
          <ul>
                <li>Une page d'accueil recensant les dernières modifications, les dernières alertes et la quantité des équipements</li>
                <li>Une cartographie des équipements sous Microsoft Azure</li>
                <li>Une liste des règles de sécurité avec une intelligence artificielle permettant de détecter des doublons, des règles essentielles manquantes ou des règles trop larges</li>
                <li>Une fonctionnalité permettant de tester une communication entre deux équipements : test de la connexion, chemin emprunté et règles trouvées. Il y a aussi une intelligence permettant de détecter une opposition des règles ou la présence d'une même règle avec des priorités différentes sur le chemin parcouru</li>
                <li>Une authentification Microsoft restreint aux personnels autorisés</li>
          </ul>
        </div>
        
      </div>
    )}
  </Popup>
);

export default Warper(ApsideExperience);
