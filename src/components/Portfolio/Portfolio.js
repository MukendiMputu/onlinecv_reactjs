import './portfolio.css'
import {Card} from "react-bootstrap";
import {faLink} from "@fortawesome/free-solid-svg-icons/faLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {useState} from "react";
import Project from "./project";

let gitRepos = [
    {
        name: "Conference Room",
        description: "A meeting room booking website built using Ruby on Rails.",
        picture: "assets/img/ruby_on_rails.jpg",
        alt: "Photo by Christina Morillo from Pexels",
        link: "https://github.com/MukendiMputu/conference_room_ruby"
    },
    {
        name: "Sixteen Clothing",
        description: "A fictive fashion company website built using ReactJS",
        picture: "assets/img/reactjs.jpg",
        alt: "Photo by Antonio Batinić from Pexels",
        link: ""
    },
    {
        name: "GET racing Dortmund e.V.",
        description: "Technical University of Dortmund student racing team",
        picture: "assets/img/GET_racing.jpg",
        alt: "https://www.get-racing.de/fs219/",
        link: "https://www.get-racing.de/fs219/"
    },
];

function Portfolio(props) {
    const [projectList] = useState(gitRepos);

    return (
        <section id={"projects"} className={"portfolio"}>
            <h3 className={"title"}>Projects</h3>
            <hr/>
            <p>This is a set of projects I've been working on.</p>
            <div className={"grid"}>
                {projectList.map((project, id) => (
                        <Project key={id} project={project}/>
                    )
                )}
            </div>
        </section>
    );
}

export default Portfolio;