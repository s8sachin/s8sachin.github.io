import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import curveSvg from '../Icons/curved.svg';
import useWindowDimensions from '../utils/dimensionHelper';
import SignatureSvg from '../Icons/signature';
import GmailSvg from '../Icons/gmail';

const Contact = () => {
  const { width } = useWindowDimensions();
  let textContainerWidthClass, heroTextFontSize, quoteFontSize, descFontSize;
  
  if (width < 768) {
    textContainerWidthClass = 'w-100';
    heroTextFontSize = undefined;
    quoteFontSize = 60;
    descFontSize = undefined;
  } else if (width >= 768 && width < 992) {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = 'xx-large';
    quoteFontSize = 65;
    descFontSize = 'inherit';
  } else {
    textContainerWidthClass = 'w-50';
    heroTextFontSize = undefined;
    quoteFontSize = 70;
    descFontSize = undefined;
  }

  return(
    <>
      <CustomNav />
      <div className="position-absolute w-100 d-none d-md-block" style={{height: '100vh', top: 0, zIndex: -1000}}>
        <div 
          style={{
            backgroundImage: `url(${curveSvg})`, 
            backgroundRepeat: 'no-repeat', 
            backgroundAttachment: 'fixed', 
            backgroundSize: `auto 100vh`
          }}
          className="h-100 position-fixed fixed-top fixed-bottom" 
        />
      </div>
      <Container className={`${textContainerWidthClass} mt-5 float-md-right text-right mr-lg-5`}>
        <h1 className="pr-lg-5 pr-xs-3 text-boldest mb-0 color-customBlue" style={{fontSize: heroTextFontSize}}>
          Lets <br />Work <br/> Together!
        </h1>
        <h1 className="pr-lg-4 pr-xs-2 mb-0 mt-2 color-customBlue" style={{fontSize: quoteFontSize, height: quoteFontSize - 25}}>
          ”
        </h1>
        <h5 className="pr-lg-5 pr-xs-3 text-wrap color-customBlueLight" style={{fontSize: descFontSize}}>
          One of my favorite things about building software is the variety, in clients and projects. So no matter the work or technology, get in touch and tell me what you have in mind. — I can’t wait to hear all about it!
        </h5>
        <br/>
        <div className="pr-lg-5 pr-xs-3">
          <SignatureSvg fill="#091292" style={{width: '70%'}} />
        </div>
        <br/>
        <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1" onClick={() => window.open('https://www.linkedin.com/in/sachin-srinivasan-03103895/', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faLinkedinIn} /><span style={{}}>Linkedin</span>
          </Button>
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1" onClick={() => window.open('https://www.facebook.com/s.sachin94/', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faFacebookF} /><span>Facebook</span>
          </Button>
          <Button className="contact-btns bg-customBlue mr-2 shadow border-0 py-1 px-2" onClick={() => window.open('https://twitter.com/sachinsrinivasa', '_blank')}>
            <FontAwesomeIcon size="1x" icon={faTwitter} /><span>Twitter</span>
          </Button>
          <Button className="contact-btns bg-customBlue shadow border-0 py-1 px-2" onClick={() => window.open('mailto:s.sachin94@gmail.com?subject="Hello !"', '_blank')}>
            <GmailSvg fillColor="#8d81a5" style={{width: 16}} /><span>Mail</span>
          </Button>
        </div>
      </Container>
    </>
  )
};

export default Contact;
