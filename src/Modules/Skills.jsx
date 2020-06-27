import React from 'react';
import CustomNav from '../Components/NavBar';
import { Container, CardDeck, Row, ProgressBar, Card, FormLabel, CardGroup, Col } from 'react-bootstrap';
import IconCard from '../Components/IconCard';
import { showcaseSkills, skillsList } from '../utils/skillsList';

const Skills = () => {
  return(
    <>
      <CustomNav />
      <Container
        className="mt-5"
        style={{
          // backgroundColor: "#f9f9f9"
          // height: '100vh'
        // , position: 'absolute', top: 0, bottom: 0, left: 0, right: 0
        }}
      >
        <h2 className="color-customBlue">Tech stack experience</h2>
        <div className="p-3 shadow">
          {showcaseSkills.map(skill => <>
            <FormLabel className="color-customBlue">{skill.label}</FormLabel>
            <ProgressBar now={skill.rating} variant="info" className="" /><br />
          </>)}
        </div>
        <Row className="my-5 justify-content-evenly">
          {skillsList.map(s => (
            <IconCard src={s.src} />
          ))}
        </Row>
      </Container>
    </>
  )
};

export default Skills;
