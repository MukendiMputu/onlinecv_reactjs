import './portfolio.css'

function Portfolio() {
    return (
        <section className={"projects"}>
            <h3 className={"title"}>Projects</h3>
            <p>This is a set of projects I've been working on.</p>
            <hr/>
            <ul className={"grid"}>
                <li style={{backgroundImage: "url(assets/img/ruby_on_rails.jpg)"}}>&nbsp;Photo by Christina Morillo from Pexels</li>
                <li style={{backgroundImage: "url(assets/img/reactjs.jpg)"}}>&nbsp;Photo by Antonio Batinić from Pexels</li>
                <li style={{backgroundImage: "url(assets/img/GET_racing.jpg)"}}>&nbsp;https://www.get-racing.de/fs219/</li>
            </ul>
        </section>
    );
}

export default Portfolio;