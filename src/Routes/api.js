import axios from "axios";

export function getHospitals() {
  return axios.get("https://json-server-mock-ravi.herokuapp.com/hospitals");
}

export function getDoctors() {
    return axios.get("https://json-server-mock-ravi.herokuapp.com/doctors");
  }

export function addHospitals({ title, status }) {
  return axios({
    url: `https://json-server-mock-ravi.herokuapp.com/tasks`,
    method: "POST",
    data: {
      Name,
      Address
    }
  });
}

export function addDoctors({ title, status }) {
    return axios({
      url: `https://json-server-mock-ravi.herokuapp.com/tasks`,
      method: "POST",
      data: {
        Name,
        Hospital,
        Specialisation,
        Salary
      }
    });
  }

