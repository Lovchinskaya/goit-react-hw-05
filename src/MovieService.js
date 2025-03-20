import axios from "axios"

const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDNjNzU4NDM4NzQ1MDk0NDNkMDMxNzUzN2ExY2JlNiIsIm5iZiI6MTc0MjM4NzQ5Ny43NjYsInN1YiI6IjY3ZGFiOTI5YzUzNmFmNjViYmE2Y2YxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0COcLMQAbWCr_MQAY3DdzDTpPazzS0Ied8kEfNbHtok",
    },
  };

export const fetchMovies = async () => {
    // const key = '403c75843874509443d0317537a1cbe6';
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const response = await axios.get(url, options)
    return response.data.results;
}

export const fetchMoviesById = async (movieId) => {
    // const key = '403c75843874509443d0317537a1cbe6';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const response = await axios.get(url, options)
    return response.data;
}




