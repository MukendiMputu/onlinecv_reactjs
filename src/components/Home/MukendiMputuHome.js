import Button from "react-bootstrap/Button";


function MukendiMputuHome () {
    return (
        <section className={"hero"}>
            <div className={"background-image"} style={{backgroundImage: "url(assets/img/mountains.jpg)"}}>&nbsp;</div>
            <div className={"hero-content-area"}>
                <h1>Hello, I'm Mukendi</h1>
                <h3>Bachelor of Computer Science</h3>
                <Button
                    download
                    variant={"success"}
                    className={""}
                    href="public/assets/docs/Mukendi Mputu CV HQ.pdf"
                >Here's my CV
                </Button>
            </div>
        </section>
    );
}

export default MukendiMputuHome;