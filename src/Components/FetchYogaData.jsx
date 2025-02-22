import React from "react";
import UseFetch from "./UseFetch";

const FetchYogaData = () => {
  console.log("FetchYogaData");
  const [data] = UseFetch("https://api.npoint.io/4459a9a10e43812e1152");
  console.log(data);
  return (
    <>
      <ul className="list_data_main">
        <h1 className="usefetch_heading">Use Fetch Custom Hook Yoga</h1>
        {data &&
          data.map((item) => (
            <li key={item.id} className="list_data">
              <h3>{item.name}</h3>
              <p>
                <strong>Importance: </strong>
                {item.importance}
              </p>
              <p>
                <strong>Benefits: </strong>
                {item.benefits6}
              </p>
              <p>
                <strong>Time to eat: </strong>
                {item.best_time_to_intake}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};
export default FetchYogaData;
