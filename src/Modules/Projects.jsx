import React, { Fragment } from 'react';
import CustomNav from '../Components/NavBar';
import { Container, Row, Col } from 'react-bootstrap';
import { projectsList } from '../utils/helperList';

const Projects = () => {
  return(
    <>
      <CustomNav />
      <Container className="mt-5">
        {/* <h2 className="color-customBlue">Weekend / hobby projects</h2> */}
        {projectsList.map(proj => (
          <Fragment key={proj.label}>
            <Row className="my-5 px-md-5" xs={1} md={2}>
              <Col>
                <img className="img-fluid proj-image shadow" src={proj.imgSrc} alt={proj.label} />
              </Col>
              <Col className="pt-2">
                <h3 className="font-weight-bold color-customBlue mb-0">{proj.label}</h3><br />
                {proj.description && <>
                  <span>{proj.description}</span><br />
                </>}
                Link: <a href={proj.src} target="_blank" rel="noopener noreferrer">{proj.src}</a><br /><br />
                {proj.githubSrc && <>
                  Source code: <a href={proj.githubSrc} target="_blank" rel="noopener noreferrer">{proj.githubSrc}</a><br />
                </>}
              </Col>
            </Row>
          </Fragment>
        ))}
      </Container>
    </>
  )
};

export default Projects;
