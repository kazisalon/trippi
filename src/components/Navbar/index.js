import { animateScroll as scroll } from "react-scroll";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
	NavBtn,
	NavBtnLink,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { MdSpa } from "react-icons/md";

const Navbar = ({ toggle }) => {
	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to="/" onClick={toggleHome}>
						Trippi <MdSpa />
					</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLinks
								to="about"
								// smooth={true}
								// duration={500}
								// spy={true}
								// exact="true"
								// offset={-80}
								// activeClass="active"
							>
								Home
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="discover">Destination</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="services">Services</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="signup">Sign Up</NavLinks>
						</NavItem>
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/signin">Sign In</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
};

export default Navbar;
