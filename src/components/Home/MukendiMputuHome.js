import Button from "react-bootstrap/Button";
import {Form} from "react-bootstrap";


function MukendiMputuHome () {
    return (
        <section className={"hero"}>
            <div className={"background-image"} style={{backgroundImage: "url(assets/img/mountains.jpg)"}}>&nbsp;</div>
            <div className={"hero-content-area"}>
                <h1>Hello, I'm Mukendi</h1>
                <h3>Computer Science Master Student</h3>
                <Form method={"get"} action={"assets/docs/Mukendi_Mputu_CV.pdf"}>
                    <Button
                        variant={"success"}
                        className={""}
                        type={"submit"}
                    >Here's my CV
                    </Button>
                </Form>
            </div>
        </section>
    );
}

export default MukendiMputuHome;