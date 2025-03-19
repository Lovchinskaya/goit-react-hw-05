import axios from "axios"

// axios.defaults.baseURL = "https://api.themoviedb.org";




const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDNjNzU4NDM4NzQ1MDk0NDNkMDMxNzUzN2ExY2JlNiIsIm5iZiI6MTc0MjM4NzQ5Ny43NjYsInN1YiI6IjY3ZGFiOTI5YzUzNmFmNjViYmE2Y2YxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0COcLMQAbWCr_MQAY3DdzDTpPazzS0Ied8kEfNbHtok",
  },
};

export const fetchMovies = async () => {
    // const key = '403c75843874509443d0317537a1cbe6';
    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
    const response = await axios.get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
  console.log(response.data.hits)
    return response.data;
}
// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));




// export const fetchMovies = async (time, page) => {
//   console.log(time, page);
//   const url = `/3/trending/movie/${time}?language=en-US&page=${page}`;
//   const response = await axios(url, options);
//   return response.data;
// };

// export const fetchMoviesByQuery = async (query, page) => {
//     console.log(query, page);
//     const url = `/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`;
//     const response = await axios.get(url, options);
//     return response.data;
// }
 



//     const axiosParams = {
//         params: {
//           query: topic,
//           client_id: '403c75843874509443d0317537a1cbe6',
//           page: currentPage,
//           per_page: 15,
//         },
//       };
//       console.log(axiosParams);
//       const response = await axios.get(
//         `https://api.unsplash.com/search/photos`,
//         axiosParams
//       );
//       return response.data.results;
//     };
// }