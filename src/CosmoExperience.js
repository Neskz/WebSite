import React from 'react';
import './App.css';
import Warper from './Warper';
import Popup from 'reactjs-popup';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
};

const CosmoExperience = () => (
  <Popup
    trigger={
      <h3 class="mb-0">
        Stagiaire Ingénieur Logiciel
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
        <h3 class="modal-title" id="exampleModalLabel">Stagiaire Ingénieur Logiciel</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
          <h4 class="modal-title" id="exampleModalLabel">Contexte</h4>
          <div className="context-body">
            L'objectif était d'obtenir une plateforme web permettant l'automatisation de tests pour nos clients dans le domaine WebRTC avec la nécessité d'avoir le choix de la plateforme entre AWS et Microsoft Azure.
          </div>
          <h4 class="modal-title" id="exampleModalLabel">Réalisations</h4>
          <h6 style={{color:'rgb(31,79,106)'}}>Avancement du projet AWS</h6>
          <ul>
                <li>Préparation des templates de VMs pour l'automatisation des tests</li>
                <li>Finalisation de l'interface web niveau front-end</li>
          </ul>
          <h6 style={{color:'rgb(31,79,106)'}}>Réalisation de la partie Microsoft Azure</h6>
          <ul>
                <li>Réalisation de toute la partie Microsoft Azure de manière isolé au projet</li>
                <li>Intégration au projet de la partie front-end </li>
                <li>Transmission de la partie backend pour intégration par un collègue en parallèle de mon intégration du front-end</li>
                <li>Préparation des templates de VMs pour la réalisation des tests</li>
          </ul>
        </div>
        
      </div>
    )}
  </Popup>
);

export default Warper(CosmoExperience);
