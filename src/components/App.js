import './App.css';
import Header from "./Header/Header";
import MukendiMputuHome from "./Home/MukendiMputuHome";
import Portfolio from "./Portfolio/Portfolio";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin, faTwitter, faWordpress, faXing} from "@fortawesome/free-brands-svg-icons";
import {Bootstrap, Grid, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <section className={"about"}>
            <h3>About Me</h3>
            <hr/>
            <p>
                I am a web developer with ~4 years work experience in HTML, CSS and JavaScript. Expanding my skills in
                popular Frameworks (React, Angular, Spring, Django, Ruby on Rails and others) and eager to contribute
                to a collaborative developer team.<br/>
                My capacity to learn quickly and adapt to difficult conditions is something I'm most proud of;
                they make me aware of my limits so that I can push past them. I can currently communicate in five languages
                and am learning a sixth one. I'm a proactive thinker who is always up for new challenges.
            </p>
        </section>
    );
}

function Contact() {
    return (
        <section id={"contact"} className={"contact"}>
            <h3>Contact</h3>
            <hr/>
            <ul>
                <li><FontAwesomeIcon icon={faSquarePhone} size={"1x"}/> <a href={"tel:+4917686021406"}>+49 176 86 021 406</a></li>
                <li><FontAwesomeIcon icon={faAt}/><a href={"mailto:mukendi_mputu@outlook.com"}> mukendi_mputu@outlook.com</a></li>
                <li><FontAwesomeIcon icon={faWordpress}/><a href={"https://blog.mukendi-mputu.de/"}>WordPress Blog</a></li>
                <li><FontAwesomeIcon icon={faLinkedin}/> <a href={"https://linkedin.com/mukendi-mputu-de"}>LinkedIn</a></li>
                <li><FontAwesomeIcon icon={faXing}/> <a href={"https://xing.com/profile/Mukendi_Mputu/cv"}>Xing</a></li>
                <li><FontAwesomeIcon icon={faGithub}/> <a href={"https://github.com/MukendiMputu"}>GitHub</a></li>
            </ul>
        </section>
    );
}

function Footer() {
    return (
    <Container className={"p-3"}>
        <Row className={"row"}>
            <div className={"col-xs-12"}>
                <h3>Mukendi Mputu</h3>

                <div className={"row"}>
                    <div className={"col-xs-12 col-sm-7"}>
                        <p><small>Website created with ❤️ using ReactJS</small></p>
                    </div>
                    <div className={"col-xs-12 col-sm-5"}>
                        <p className={"text-right"}>
                            {/*<a href="https://facebook.com/" className={"social-round-icon white-round-icon fa-icon"}
                               title="">
                                <FontAwesomeIcon icon={faFacebook} aria-hidden={"true"} />
                            </a>
                            <a href="https://twitter.com/" className={"social-round-icon white-round-icon fa-icon"}
                               title="">
                                <FontAwesomeIcon icon={faTwitter} aria-hidden={"true"} />
                            </a>*/}
                            <a href="https://blog.mukendi-mputu.de/" className={"social-round-icon black-round-icon fa-icon"}
                               title="">
                                <FontAwesomeIcon icon={faWordpress} aria-hidden={"true"} />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
    );
}

function App() {
    return (
        <>
            <Header/>
            <MukendiMputuHome/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    );
}

export default App;
