import React from 'react';
import './App.css';
import './styles.css';

class Education extends React.Component {
    render(){
        return (
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5 text-primary">Formations</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">école d'ingénieur en informatique</h3>
                            <div class="subheading mb-3">ISIMA, Institut Supérieur d’Informatique, de Modélisation et de leurs Applications, Clermont-Ferrand</div>
                            <p>F5 – Option réseau et sécurité informatique</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2017 - 2020</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">Classe préparatoire aux grandes écoles</h3>
                            <div class="subheading mb-3">Lycée Lafayette, Clermont-Ferrand</div>
                            <p>CPGE option MP (Mathématiques Physiques)</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2015 - 2017</span></div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">baccalauréat scientifique</h3>
                            <div class="subheading mb-3">Lycée Théodore de Banville, Moulins(03)</div>
                            <p>Baccalauréat Scientique obtenu avec mention Bien</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">2012 - 2015</span></div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Education;