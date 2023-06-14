import { faker } from "@faker-js/faker";

import React, { useState } from "react";
import SVGComponent from "./AvatarCreation";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

import "./App.css";

const FakePeople = () => {
  const [person, setPerson] = useState({
    fullName: faker.name.fullName(),
    randomEmail: faker.internet.email(),
    jobTitle: faker.name.jobTitle()
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const changeContent = () => {
    setIsButtonDisabled(true);

    setTimeout(() => {
      setPerson({
        fullName: faker.name.fullName(),
        randomEmail: faker.internet.email(),
        jobTitle: faker.name.jobTitle()
      });
      setIsButtonDisabled(false);
    }, 5000);
  };

  return (
    <>
      <Card
        style={{ width: "20rem" }}
        className="text-center p-3 border border-dark"
      >
        <SVGComponent fakerData={person.fullName} />
        <hr className="border"></hr>
        <Card.Body className="text-dark">
          <Card.Title>{person.fullName}</Card.Title>
          <Card.Text>
            <dt>Job:</dt>
            {person.jobTitle}
          </Card.Text>
          <Card.Text>
            <dt>Email:</dt> {person.randomEmail}
          </Card.Text>

          <button
            onClick={changeContent}
            type="button"
            className="btn btn-primary btn-block"
            disabled={isButtonDisabled}
          >
            {isButtonDisabled ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />{" "}
                Please wait...
              </>
            ) : (
              "New Person"
            )}
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default FakePeople;
