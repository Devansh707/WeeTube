import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResult: 50,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


//   This is the function that allows us to call the api's , pass some dynamic url and then call it from within any component in our application
  export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }