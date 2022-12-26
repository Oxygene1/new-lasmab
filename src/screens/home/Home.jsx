// import React, { useEffect, useState } from "react";
// import cn from "classnames";
// import { Button } from "../../components/Button";
// import axios from "axios";
// import Header from "../../components/header/Header";
import StoryContainer from "../../components/storyPath/StoryContainer";
// import StoryContainer from "../../components/storyPath/StoryContainer";

const Home = () => {
  //   let API_URL = `https://lasmab.azurewebsites.net/api/v1.0/Website/GetSchoolProfile/1`;
  // async function fetchData(api) {
  //   const result = await axios.get(api);
  //   console.log(result)
  //   // return result.data;
  // };

  // fetchData(API_URL)
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     (async () => {
  //       const data = await fetchData(API_URL);
  //       setData(data);
  //     })();
  //   }, [API_URL]);

  return (
    <div>
      <StoryContainer />
      {/* <StoryContainer /> */}
      {/* <div className="-mt-48">{data}</div> */}
      {/* <button onClick={setData} className="text-red-600">get schools</button> */}
    </div>
  );
};

export default Home;
