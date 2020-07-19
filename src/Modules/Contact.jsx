import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Col } from 'react-bootstrap';
import CurvedSvg from '../Icons/curvedSvg';
import curveSvg from '../Icons/curved.svg';
import useWindowDimensions from '../utils/dimensionHelper';
import SignatureSvg from '../Icons/signature';

const Contact = () => {
  const { width } = useWindowDimensions();
  const textContainerWidthClass = width >= 768 ? 'w-50' : 'w-100'
  return(
    <>
      <CustomNav />
      <div className="position-absolute w-100 d-none d-md-block" style={{height: '100vh', top: 0, zIndex: -1000}}>
        <div style={{backgroundImage: `url(${curveSvg})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed', backgroundSize: `auto 100vh`}} className="h-100" />
      </div>
      <Container className={`${textContainerWidthClass} mt-2 float-md-right text-right mr-lg-5`}>
        <h1 className="pr-lg-5 pr-xs-3 text-boldest mb-0 color-customBlue">Lets <br />Work <br/> Together!</h1>
        <h1 className="pr-lg-4 pr-xs-2 mb-0 mt-2 color-customBlue" style={{fontSize: 70, height: 45}}>”</h1>
        <h5 className="pr-lg-5 pr-xs-3 text-wrap color-customBlueLight">One of my favorite things about this job is the variety, in clients and projects. So no matter the work or technology, get in touch and tell me what you have in mind. — I can’t wait to hear all about it!</h5>
        <br/>
        <div className="pr-lg-5 pr-xs-3">
          <SignatureSvg fill="#091292" style={{width: '70%'}} />
        </div>
      </Container>
    </>
  )
};

export default Contact;
