import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Andperman/00_proyecto_final_frontend.git" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Andperman/00_proyecto_final_backend.git" target="_blank" rel="noreferrer"><h2>ChatBot</h2></a>
                <p>ChatBot project for the FELGTBIQ+ to help people regarding HIV.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Andperman/park_Camper.git" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Andperman/park_Camper.git" target="_blank" rel="noreferrer"><h2>Park_Camper</h2></a>
                <p>In this application, you can search for the best places to spend the night with your Camper. Additionally, you will find thousands of locations throughout Spain, each with a detailed description and image. It also includes an admin profile, where you can create different locations.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Andperman/QuizProject.git" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Andperman/QuizProject.git" target="_blank" rel="noreferrer"><h2>Quiz game</h2></a>
                <p>You will be able to play and get graphs with your game results. The games change the questions, and the chosen topic is music.</p>
            </div>
            <div className="project">
                <a href="https://andperman.github.io/biblioteca_NYT/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://andperman.github.io/biblioteca_NYT/" target="_blank" rel="noreferrer"><h2>New York Times Library</h2></a>
                <p>Based on the library API, we can view all its books, get descriptions, filter by topics, add books to favorites, and purchase them on Amazon.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;