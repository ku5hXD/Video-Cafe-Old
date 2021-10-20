import React, { useEffect, useState } from "react";
import fetchData from "./FetchData";
import Render from "./Render";


const All = () => {

  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);

  const handleDetails = (value) => {
    setData(value)
  }
  const handleDates = (value) => {
    setDates(value)
  }

  useEffect(() => {

    fetchData('', handleDetails, handleDates)

  }, []);

  return <Render data={data} dates={dates} />

};

export default All;
