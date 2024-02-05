import { useState } from "react";
import Form from "./Form";
import Hero from "./Hero";
import Preview from "./Preview";

function Main() {
  const [data, setData] = useState({
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
  });

  const handleProyectName = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setData({ ...data, [inputName]: inputValue });
    //pendiente de explicación
  };

  return (
    <main className="main">
     <Hero />
      <Preview/>
      <Form data={data} />
    </main>
  );
}

export default Main;
