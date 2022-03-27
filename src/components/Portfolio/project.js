import {Card} from "react-bootstrap";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Project(props) {
    return (
        <Card>
            <Card.Img variant={"top"} src={props.project.picture} alt={props.project.alt}/>
            <Card.Body>
                <Card.Title>
                    {props.project.name}
                    <a href={props.project.link} target={"_blank"} rel="noreferrer">
                        <FontAwesomeIcon icon={faLink}/>
                    </a>
                </Card.Title>
                <Card.Text>
                    {props.project.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Project;