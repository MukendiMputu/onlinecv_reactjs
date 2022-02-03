import './App.css';
import Header from "./Header/Header";
import MukendiMputuHome from "./Home/MukendiMputuHome";
import Portfolio from "./Portfolio/Portfolio";

function About() {
    return (
        <section className={"about"}>
            <h3>About</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
        </section>
    );
}

function Contact() {
    return (
        <section>
            <h3>Contact</h3>
            <span className={"contact_prefix"}>Phone</span> 0123 4567 8901
            <span className={"contact_prefix"}>Email</span> example@thisite.com
            <p>LinkedIn</p>
            <p>Xing</p>
            <p>GitHub</p>
        </section>
    );
}

function Footer() {
    return (
        <section className={"footer"}>
           <p>&copy; 2021 by Mukendi Mputu. Made with ❤️ using ReactJS</p>
        </section>
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
