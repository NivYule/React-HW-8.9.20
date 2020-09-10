import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import Button from "react-bootstrap/esm/Button";
import Spinner from "react-bootstrap/esm/Spinner";

export default function MoviePage() {
  const initialData: any = {};
  const { movieId } = useParams();
  const history = useHistory();
  const [movieDetails, setmovieDetails] = useState(initialData);

  async function getMovieData() {
    try {
      const { data } = await Axios.get(
        `http://www.omdbapi.com/?apikey=132549e4&i=${movieId}`
      );
      setmovieDetails(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMovieData();
  }, [movieId]);

  if (!Object.keys(movieDetails).length)
    return (
      <Spinner animation="border" role="status">
        {" "}
      </Spinner>
    );
  return (
    <div>
      <h1> {movieDetails.Title} </h1>
      <h2> Movie id: {movieId} </h2>
      <Button className={"m-auto"} onClick={() => history.push(`/`)}>
        {" "}
        Go Back to Movies Page
      </Button>
    </div>
  );
}
