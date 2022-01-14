import { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import raceFacade from "../facades/raceFacade";

const CreateRaceComponent = () => {
  const initialRace = { name: "", date: "", time: "", location: ""};
  const [race, setRace] = useState(initialRace);

  const handleChange = (event) => {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setRace({ ...race, [id]: value });
  };

  const createRace = async () => {
    try {
      const response = await raceFacade.createRace(race);
      alert("Race created!");
    } catch (error) {
      const e = await error;
      alert(e.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      createRace();
      setRace(initialRace);
      //Used as checkbox is seperate from object
      event.target.reset();
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#EBEBEB",
        maxWidth: "550px",
        padding: 20,
        borderRadius: 5,
      }}
    >
      <h2>Create race</h2>
      <Form onSubmit={handleSubmit} style={{ justifyContent: "center" }}>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              id="name"
              value={race.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="text"
              id="date"
              value={race.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Time:</Form.Label>
            <Form.Control
              type="text"
              id="time"
              value={race.time}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              id="location"
              value={race.location}
              onChange={handleChange}
              required
            />
          </Form.Group>
          </Row>

        <br></br>
        <Button variant="primary" type="submit" value="Submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateRaceComponent;
