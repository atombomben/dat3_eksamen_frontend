import { Table } from "react-bootstrap";
import { URL } from "../constants.js";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


function RacesComponent() {


const pathname = window.location.pathname
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
        {races.map((race) => {
          return (
          <tr key={race.id}>  
          <td><Link to={{
              pathname: `/SingleRace/${race.id}`
              ,state: {race}
              }}> {race.id}</Link></td>
          <td>{race.name}</td>
          <td>{race.time}</td>
          <td>{race.location}</td>
          <td>{race.date}</td>
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
