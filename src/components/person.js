import React from "react";
import { Accordion, Card } from "react-bootstrap";

//Person Details
const Person = ({ person, index }) => {
  return (
    <div>
      <Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey={index}>
            <Accordion.Header> {person.firstName}</Accordion.Header>
            <Accordion.Body>
              <table style={{ border: "2px solid black", width: "100%" }}>
                <tr>
                  <td
                    style={{
                      width: "30%",
                      border: "1px solid black",
                    }}
                  >
                    <b>Title</b>
                  </td>
                  <td style={{ width: "70%" }}>{person.title}</td>
                </tr>

                <tr>
                  <td style={{ width: "30%", border: "1px solid black" }}>
                    <b>First Name</b>
                  </td>
                  <td style={{ width: "70%", border: "1px solid black" }}>
                    {person.firstName}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%", border: "1px solid black" }}>
                    <b>Last Name</b>
                  </td>
                  <td style={{ width: "70%", border: "1px solid black" }}>
                    {person.lastName}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%", border: "1px solid black" }}>
                    <b>ID</b>
                  </td>
                  <td style={{ width: "70%", border: "1px solid black" }}>
                    {person.id}
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "30%", border: "1px solid black" }}>
                    <b>Email</b>
                  </td>
                  <td style={{ width: "70%", border: "1px solid black" }}>
                    {person.email}
                  </td>
                </tr>
              </table>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </div>
  );
};

export default Person;
