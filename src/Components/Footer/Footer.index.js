import React from 'react';
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin 
} from 'react-icons/fa';

import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElement';


const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>                               
                            <FooterLink to="/">How it works</FooterLink>    
                            <FooterLink to="/">Testimonials</FooterLink>    
                            <FooterLink to="/">Careers</FooterLink>    
                            <FooterLink to="/">Investors</FooterLink>    
                            <FooterLink to="/">Terms of Service</FooterLink>                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>                               
                            <FooterLink to="/">Contact</FooterLink>    
                            <FooterLink to="/">Support</FooterLink>    
                            <FooterLink to="/">Destinaions</FooterLink>    
                            <FooterLink to="/">Sponsership</FooterLink>                                
                        </FooterLinkItems>    
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>                               
                            <FooterLink to="/">Submit video</FooterLink>    
                            <FooterLink to="/">Ambassadors</FooterLink>    
                            <FooterLink to="/">Agency</FooterLink>    
                            <FooterLink to="/">Influencer</FooterLink>                                
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>                               
                            <FooterLink to="/">Instagram</FooterLink>    
                            <FooterLink to="/">Facebook</FooterLink>    
                            <FooterLink to="/">Twitter</FooterLink>    
                            <FooterLink to="/">Youtube</FooterLink>                                
                        </FooterLinkItems>    
                    </FooterLinksWrapper>    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo>
                            DD
                        </SocialLogo>
                        <WebsiteRights>
                            DD © {new Date().getFullYear()} All rights reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            {/* 
                                if want href link to work use like 
                                <SocialIconLink href='//www.twitter.com/desh0404' target="_blank" aria-label="Twitter">
                            */} 
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>    
            </FooterWrap>            
        </FooterContainer>
    )
}

export default Footer;
