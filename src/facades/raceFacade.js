import { URL } from "../constants.js";
import ApiFacade from "./apiFacade";

const raceFacade = () => {
    const createRace = (race) => {
      const options = ApiFacade.makeOptions("POST", true, race);
      return fetch(URL + "/api/race/addrace", options).then(ApiFacade.handleHttpErrors);
    };
  
    return {
      createRace
    };
  };

  export default raceFacade();