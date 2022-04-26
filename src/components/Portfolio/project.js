import {Card} from "react-bootstrap";
import {faLink, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Project(props) {
    return (
        <Card>
            <Card.Img variant={"top"} src={props.project.picture} alt={props.project.alt}/>
            <Card.Body>
                <Card.Title>
                    {props.project.name}&nbsp;

                    { props.project.name === "Conference Room" ?
                       (<a href="https://conference-room-ruby.herokuapp.com/"><FontAwesomeIcon icon={faGlobe}/></a>):
                        <a href={props.project.link} target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faLink}/>
                        </a>
                    }
                </Card.Title>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Project;