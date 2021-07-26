export const fetchApiProject = () => fetch(`/api_project.json`).then((r) => r.json())

export const fetchApiData = () => fetch(`/api_data.json`).then((r) => r.json())

import axios from '../libs/axios'

// export const fetchApiProject = () => {
//   return axios.get(`/api_project.json`);
// }
