import React from "react";
import { Accordion, Card } from "react-bootstrap";

//Person Details
const Person = ({ person, index }) => {
  return (
    <div>
      <Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {person.name}</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Name- {person.name}</li>
                <li>Gender- {person.gender}</li>
                <li>Date of birth- {person.birth_year}</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
};

export default Person;
