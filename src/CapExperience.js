import React from 'react';
import './App.css';
import Warper from './Warper';
import Popup from 'reactjs-popup';

const contentStyle = {
  maxWidth: '600px',
  width: '90%',
};

const CapExperience = () => (
  <Popup
    trigger={
      <h3 class="mb-0">
        Consultant Infrastructure
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
        <h3 class="modal-title" id="exampleModalLabel">Consultant Infrastructure</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={close}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div className="modal-body">
          <h4 class="modal-title" id="exampleModalLabel">Contexte</h4>
          Intégration d'une équipe locale pour la gestion du périmètre informatique du site :
            <ul>
                <li>Mise en place et prise en charge d'infrastructures avec réalisation de la documentation nécessaire (Hyper-V - Esxi)</li>
                <li>MCO/MCS des infrastructures en place</li>
                <li>Suivi des incidents et des changements (Principe ITIL)</li>
                <li>Suivi des tâches de production de toute l’équipe</li>
            </ul>
          <h4 class="modal-title" id="exampleModalLabel">Réalisations</h4>
          <h6 style={{color:'rgb(31,79,106)'}}>Mise en place de deux infrastructures (HyperV/ESXi)</h6>
          <ul>
                <li>Suivi d'un DAT</li>
                <li>Propositions d'amélioration : Sécurisation du flux de transfert de fichiers entre deux serveurs, Limitation des flux entre deux serveurs</li>
                <li>Réalisation des documentations de mise en place et de réalisation des MCO/MCS de l'infrastructure</li>
                <li>Réalisation d'un script pour l'automatisation des transferts de fichier</li>
          </ul>
          <h6 style={{color:'rgb(31,79,106)'}}>Amélioration Continue des infrastructures présentes</h6>
          <ul>
                <li>Propositions d'amélioration en terme de sécurité et d'optimisation des tâches récurrentes et parfois réalisation de ces améliorations. 
                Exemple : Récupération automatique des patchs WSUS et automatisation de l'application de ceux-ci, Mise en place du LDAPS, Limitation du nombre de comptes de service
                </li>
                <li>Mise en place de scripts pour l'optimisation de tâches récurrentes : Sauvegarde des machines virtuelles, déploiement des signatures antivirales</li>
          </ul>
        </div>
        
      </div>
    )}
  </Popup>
);

export default Warper(CapExperience);
