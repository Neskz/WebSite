import React from 'react';
import {Link} from 'react-scroll';
import './App.css';
import './styles.css';
import Scrollspy from "react-scrollspy";

class Navigation extends React.Component {
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <Link className="navbar-brand js-scroll-trigger" to="/mentions" offset={50} duration={500}>
                    <span class="d-block d-lg-none">Aurélien RABET</span>
                    <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="profile.jpg" alt="" /></span>
                </Link>
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
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="about"  spy={true} smooth={true} offset={50} duration={500}>À propos</Link></li>
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="education" spy={true} smooth={true} offset={50} duration={500}>Formations</Link></li>
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="experience" spy={true} smooth={true} offset={50} duration={500}>Experiences</Link></li>
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="awards" spy={true} smooth={true} offset={50} duration={500}>Projets</Link></li>
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="skills" spy={true} smooth={true} offset={50} duration={500}>Compétences</Link></li>
                        <li class="nav-item"><Link className="nav-link js-scroll-trigger" to="interests" spy={true} smooth={true} offset={50} duration={500}>Intérêts</Link></li>
                    </Scrollspy>
                </div>
            </nav>
        )
    }
}

export default Navigation;