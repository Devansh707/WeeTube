import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    // method: 'GET',
    // url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
    //   q: 'music',
    //   part: 'snippet,id',
    //   regionCode: 'US',
      maxResults: '50',
    //   order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': '066b117b5amshd7760ec69b4b587p1b1403jsnc7bf112a01de',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };



//   This is the function that allows us to call the api's , pass some dynamic url and then call it from within any component in our application      066b117b5amshd7760ec69b4b587p1b1403jsnc7bf112a01de    youtube-v31.p.rapidapi.com  KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA
  export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }