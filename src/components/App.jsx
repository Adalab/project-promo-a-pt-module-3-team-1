import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Create from "./Create";
import Footer from "./Footer";

function App() {
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
  const [ responseFetch, setResponseFetch ] = useState('');

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

  const handleFetchCreate = (data) => {
    fetch("https://dev.adalab.es/api/projectCard", 
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then(response => response.json())
      .then(dataResponse => {
        console.log("Llegó el Fetch!");

        console.log(data);
        setResponseFetch(dataResponse);
      
      });
  };

  return (
    <div>
      <div className="container">
        <Header />
        <Create
          data={data}
          changeData={changeData}
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSumbit={handleFetchCreate}
          responseFetch={responseFetch}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;

// name: "",
//     slogan: "",
//     technologies: "",
//     demo: "",
//     repo: "",
//     desc: "",
//     autor: "",
//     job: "",
//     image: "https://genweb.upc.edu/ca/documentacio/cursos/creacio-i-personalitzacio-de-plantilles/img/user.jpg",
//     photo: "https://www.itmplatform.com/wp-content/uploads/33664005_m.jpg",
// Prueba de chat gpt
// import React, { useState } from 'react';

// function App() {
//   const [data, setData] = useState({
//     name: "",
//     slogan: "",
//     technologies: "",
//     demo: "",
//     repo: "",
//     desc: "",
//     autor: "",
//     job: "",
//     image: "",
//     photo: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setData({
//       ...data,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     const { name } = event.target;
//     setData({
//       ...data,
//       [name]: file,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes enviar el formulario con los datos y las imágenes al servidor
//     console.log('Datos del formulario:', data);
//     // También puedes enviar las imágenes por separado si es necesario
//     console.log('Imagen del proyecto:', data.image);
//     console.log('Foto de la autora:', data.photo);
//   };

//   return (
//     <div>
//       {/* Tu código JSX anterior */}

//       <form className="addForm" onSubmit={handleSubmit}>
//         {/* Resto de tu formulario */}

//         <fieldset className="addForm__group--upload">
//           <label htmlFor="image" className="button">
//             Subir foto del proyecto
//           </label>
//           <input
//             className="addForm__hidden"
//             type="file"
//             name="image"
//             id="image"
//             onChange={handleFileChange}
//           />
//           <label htmlFor="photo" className="button">
//             Subir foto de la autora
//           </label>
//           <input
//             className="addForm__hidden"
//             type="file"
//             name="photo"
//             id="photo"
//             onChange={handleFileChange}
//           />
//           <button className="button--large">Guardar proyecto</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;
