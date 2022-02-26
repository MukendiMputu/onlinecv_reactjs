import {Container, Nav, Navbar, NavbarBrand, NavLink} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";


function Header () {
    return (
        <header>
            <Navbar bg={"light"} variant={"light"} expand={"md"}>
                <Container>
                    <NavbarBrand href={"#home"}>Mukendi Mputu</NavbarBrand>
                    <NavbarToggle aria-controls={"responsive-navbar-nav"} />
                    <NavbarCollapse>
                        <Nav className={"me-auto"}/>
                        <Nav>
                            <NavLink href={"#about"}>About Me</NavLink>
                            <NavLink href={"#projects"}>Projects</NavLink>
                            <NavLink href={"#contact"}>Contact</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
