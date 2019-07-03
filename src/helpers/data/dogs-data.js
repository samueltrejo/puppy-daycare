import axios from 'axios';
import fbref from '../fbconfig.json';

const databaseUrl = fbref.firebaseConfig.databaseURL;

const getDogsData = () => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/dogs.json`)
    .then((response) => {
      const dogs = [];
      Object.keys(response.data).forEach((dogId) => {
        response.data[dogId].id = dogId;
        dogs.push(response.data[dogId]);
      });
      resolve(dogs);
    })
    .catch(error => reject(error));
});

export default { getDogsData };
