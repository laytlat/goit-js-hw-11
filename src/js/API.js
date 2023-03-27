import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = 'key=34774253-d36109085483ad06eaf8205ea';

export default async function getDataFromAPI(queryName) {
  const options = {
    params: {
      key: '34774253-d36109085483ad06eaf8205ea',
      q: `${queryName}`,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 40,
      page: 1,
    },
  };
  const data = await axios.get(BASE_URL, options).then(data => {
    return data.data.hits;
  });
  return data;
}
