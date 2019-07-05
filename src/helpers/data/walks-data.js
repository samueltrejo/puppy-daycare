import axios from 'axios';
import fbref from '../fbconfig.json';

const databaseUrl = fbref.firebaseConfig.databaseURL;

const getWalksData = () => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/walks.json`)
    .then((response) => {
      const walks = [];
      Object.keys(response.data).forEach((walkId) => {
        response.data[walkId].id = walkId;
        walks.push(response.data[walkId]);
      });
      resolve(walks);
    })
    .catch(error => reject(error));
});

const addWalk = newWalk => axios.post(`${databaseUrl}/walks.json`, newWalk);

export default { getWalksData, addWalk };
