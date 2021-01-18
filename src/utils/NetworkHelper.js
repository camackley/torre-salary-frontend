import Axios from "axios";

function NetWorkHelper() {
  const CORS = "https://cors-anywhere.herokuapp.com/";
  const SERVICE_URL = "https://torre-salary-backend.herokuapp.com/";

  var obj = {};

  obj.httpGet = async (path) => {
    return new Promise((resolve, reject) => {
      Axios.get(CORS + SERVICE_URL + path)
        .then((response) => {
          if (response.data["error"] !== null) {
            return reject(response.data["error"]);
          }
          return resolve(response.data["body"]);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };

  obj.httpPots = async (path, data) => {
    return new Promise((resolve, reject) => {
      Axios.post(CORS + SERVICE_URL + path, data)
        .then((response) => {
          if (response.data["error"] !== null) {
            return reject(response.data["error"]);
          }
          return resolve(response.data["body"]);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  };
  return obj;
}

export default NetWorkHelper;
