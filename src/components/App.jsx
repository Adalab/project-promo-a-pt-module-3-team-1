import { useEffect, useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Create from "./Create";
import Footer from "./Footer";
import ls from "../components/services/localStorage";
import { Routes, Route } from "react-router-dom";
import LandingApp from "./LandingApp";

function App() {
  const [data, setData] = useState(
    ls.get("project", {
      name: "",
      slogan: "",
      technologies: "",
      demo: "",
      repo: "",
      desc: "",
      autor: "",
      job: "",
      image: "",
      photo: "",
    })
  );
  const [responseFetch, setResponseFetch] = useState("");

  useEffect(() => {
    ls.set("project", data);
  }, [data]);

  const changeData = (inputName, inputValue) => {
    setData({ ...data, [inputName]: inputValue });
    const clonData = { ...data };
    clonData[inputName] = inputValue;
    setData(clonData);
  };

  const updateAvatarAuthor = (avatar) => {
    const clonData = { ...data };
    clonData.photo = avatar;
    setData(clonData);
  };
  const updateAvatarProject = (avatar) => {
    const clonData = { ...data };
    clonData.image = avatar;
    setData(clonData);
  };

  const handleFetchCreate = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log("Llegó el Fetch!");

        console.log(dataResponse);
        setResponseFetch(dataResponse);
      });
  };

  return (
    <div className="container">
      <div >
        <Header />

        <Routes>
          <Route path="/" element={<LandingApp />} />
          <Route
            path="/create"
            element={
              <Create
                data={data}
                changeData={changeData}
                updateAvatarAuthor={updateAvatarAuthor}
                updateAvatarProject={updateAvatarProject}
                onSubmit={handleFetchCreate}
                responseFetch={responseFetch}
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
