import React from "react";
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SociealMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<FooterContainer>
				<FooterWrap>
					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin">How it workds</FooterLink>
								<FooterLink to="/signin">Testimonials</FooterLink>
								<FooterLink to="/signin">Investors</FooterLink>
								<FooterLink to="/signin">Terms of Services</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin">How it workds</FooterLink>
								<FooterLink to="/signin">Testimonials</FooterLink>
								<FooterLink to="/signin">Investors</FooterLink>
								<FooterLink to="/signin">Terms of Services</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin">How it workds</FooterLink>
								<FooterLink to="/signin">Testimonials</FooterLink>
								<FooterLink to="/signin">Investors</FooterLink>
								<FooterLink to="/signin">Terms of Services</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle> About us </FooterLinkTitle>
								<FooterLink to="/signin">How it workds</FooterLink>
								<FooterLink to="/signin">Testimonials</FooterLink>
								<FooterLink to="/signin">Investors</FooterLink>
								<FooterLink to="/signin">Terms of Services</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContainer>
					<SociealMedia>
						<SocialMediaWrap>
							<SocialLogo to="/">Trippi</SocialLogo>
							<WebsiteRights>
								Trippi c {new Date().getFullYear()}All rights reserved.{" "}
							</WebsiteRights>
							<SocialIcons>
								<SocialIconLink href="/" targetk="blank" aria-label="Facebook">
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink href="/" targetk="blank" aria-label="Instagram">
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink href="/" targetk="blank" aria-label="Youtube">
									<FaYoutube />
								</SocialIconLink>
								<SocialIconLink href="/" targetk="blank" aria-label="Twitter">
									<FaTwitter />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SociealMedia>
				</FooterWrap>
			</FooterContainer>
		</>
	);
};

export default Footer;
