import React from 'react';
import './App.css';
import './styles.css';
import Scrollspy from "react-scrollspy";

class NavigationMention extends React.Component {
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="/#about">
                    <span class="d-block d-lg-none">Aurélien RABET</span>
                    <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../profile.jpg" alt="" /></span>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Scrollspy
                        className="navbar-nav"
                        items={[
                        "about",
                        "education",
                        "experience",
                        "awards",
                        "skills",
                        "interests"
                        ]}
                        currentClassName="is-current"
                        offset={-200}
                    >
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#about">À propos</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#education">Formations</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#experience">Experiences</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#awards">Projets</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#skills">Compétences</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/#interests">Intérêts</a></li>
                    </Scrollspy>
                </div>
            </nav>
        )
    }
}

export default NavigationMention;