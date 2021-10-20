import React, { useEffect, useState } from "react";
import Render from "./Render";
import fetchData from "./FetchData";

const Movies = () => {

  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);

  const handleDetails = (value) => {
    setData(value)
  }
  const handleDates = (value) => {
    setDates(value)
  }

  useEffect(() => {

    fetchData('Movies', handleDetails, handleDates)

  }, []);

  return <Render data={data} dates={dates} />

};

export default Movies;
