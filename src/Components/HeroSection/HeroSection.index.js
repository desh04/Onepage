import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import bgImg from '../../images/homepage/bgImg.jpg';
import { Button } from '../ButtonElement';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    ImgBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnwrapper, 
    ArrowForward,
    ArrowRight
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="heroSection">
            <HeroBg>
                <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
                {/* <ImgBg src={bgImg} /> */}
            </HeroBg>
            <HeroContent>    
                <HeroH1>My first One page site</HeroH1>
                <HeroP>
                    This is the practice project for my porfolio website I will be building after this.
                </HeroP>
                <HeroBtnwrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Go to the site {hover ? <ArrowForward /> : <ArrowRight />} 
                    </Button>
                </HeroBtnwrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
 