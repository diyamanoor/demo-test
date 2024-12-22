import React, { useEffect, useState } from "react";
import axios from "axios";
import DemoName from './DemoName';

const NewPage = () => {
  const [data, setData] = useState([]);

  const [api, setApi] = useState([]);

  useEffect(() => {
    console.log("useEffect")
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    };
    fetchData();
  },[]);

  useEffect(()=>{

    const apiData = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setApi(response.data);
    };
    apiData();

  },[]);


  return (
    <div>
      <div>api response</div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>Id: {item.id}
            {item.title}{item.body}
          </li>
        ))}
      </ul>
        <div> anther</div>
      <ul>
        {
        api.map((ob) => (
            <li key={ob.id}>{ob.title}</li>

          ))
        }
      </ul>

      <div><DemoName name="Diya" title="SE" color="red"/></div>
    </div>
  );
};

export default NewPage;
