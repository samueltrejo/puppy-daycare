import axios from 'axios';
import fbref from '../fbconfig.json';

const databaseUrl = fbref.firebaseConfig.databaseURL;

const getStaffData = () => new Promise((resolve, reject) => {
  axios.get(`${databaseUrl}/staff.json`)
    .then((response) => {
      const staff = [];
      Object.keys(response.data).forEach((staffId) => {
        response.data[staffId].id = staffId;
        staff.push(response.data[staffId]);
      });
      resolve(staff);
    })
    .catch(error => reject(error));
});

export default { getStaffData };
