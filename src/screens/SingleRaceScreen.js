import { Table } from "react-bootstrap";
import { URL } from "../constants.js";
import { useEffect, useState } from "react";


function SingleRaceComponent() {

const pathname = window.location.pathname;
const myArray = pathname.split("/");
const id = parseInt(myArray[2]);

const [race, setRace] = useState([])
    
    useEffect(() => {
      fetch(URL + "/api/race/" + id)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setRace(data);
    });
    }, []);
    
    return (
      <>
      {race.cars.length > 0 ? (
      <>
      <div>
          <Table striped bordered hover>
            
            <thead>
            <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Brand</td>
            <td>Make</td>
            <td>Year</td>
            </tr>
              </thead>
              <tbody>
        {race.cars.map((car) => {
          return (
          <tr key={car.id}>  
          <td>{car.id}</td>
          <td>{car.name}</td>
          <td>{car.brand}</td>
          <td>{car.make}</td>
          <td>{car.year}</td>
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

const SingleRaceScreen = () => {

	return (
		SingleRaceComponent());
	
};

export default SingleRaceScreen;
