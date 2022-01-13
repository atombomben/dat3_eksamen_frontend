import { Table } from "react-bootstrap";
import { URL } from "../constants.js";
import { useEffect, useState } from "react";


function RacesComponent() {

const [races, setRaces] = useState([])
    
    useEffect(() => {
      fetch(URL + "/api/race/show")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRaces(data);
    });
    }, []);
    
    return (
      <>
      {races.length > 0 ? (
      <>
      <div>
          <Table striped bordered hover>
            <thead>
            <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Time</td>
            <td>Location</td>
            <td>Date</td>
            </tr>
              </thead>
              <tbody>
        {races.map((x) => {
          return (
          <tr key={x.id}>
          <td>{x.id}</td>
          <td>{x.name}</td>
          <td>{x.time}</td>
          <td>{x.location}</td>
          <td>{x.date}</td>
          </tr>
          )
        })}
        </tbody>
        </Table>
        </div>
      </>
      )
       :
      (
      <h2>Failed fetching data</h2>
      )}
      </>
      );

	  }

const RaceScreen = () => {

	return (
		RacesComponent());
	
};

export default RaceScreen;
