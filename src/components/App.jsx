import "../scss/App.scss";
import { useState } from "react";

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
  


  const handleProyectName = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setData({ ...data, [inputName]: inputValue });
    //pendiente de explicación
  };

  return (
    <div>
      <div className="container">
        <header className="header">
          <a
            className="header__brand"
            href="./"
            title="Haz click para volver a la página inicial"
          >
            <img
              className="header__companyLogo"
              src="./images/laptop-code-solid.svg"
              alt="Logo proyectos molones"
            />
            <h1 className="header__title">Proyectos molones</h1>
          </a>
          <img
            className="logoSponsor"
            src="./images/adalab.png"
            alt="Logo Adalab"
          />
        </header>

        <main className="main">
          <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">
              Escaparate en línea para recoger ideas a través de la tecnología
            </p>
            <a className="button--link" href="./">
              Ver proyectos
            </a>
          </section>

          <section className="preview">
            <div className="projectImage"></div>
            <article className="card">
              <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">
                  Personal project card
                </span>
              </h2>

              <div className="card__author">
                <div className="card__authorPhoto"></div>
                <p className="card__job"> {data.job === "" ? "Full stack Developer" : data.job}</p>
                <h3 className="card__name">
                  {data.autor === "" ? "Emmelie Björklund" : data.autor}
                </h3>
              </div>

              <div className="card__project">
                <h3 className="card__name"> {data.name === "" ? "Elegant Workspace" : data.name}</h3>
                <p className="card__slogan">{data.slogan ==="" ? "Diseños exclusivos" : data.slogan}</p>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">
                  {data.desc ==="" ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione." : data.desc}
                  
                </p>

                <div className="card__technicalInfo">
                  <p className="card__technologies">{data.technologies === "" ? "React JS - HTML - CSS" : data.technologies}</p>

                  <a
                    className="icon icon__www"
                    href="#"
                    title="Haz click para ver el proyecto online"
                  >
                    Web link
                  </a>
                  <a
                    className="icon icon__github"
                    href="#"
                    title="Haz click para ver el código del proyecto"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </article>
          </section>
          <form className="addForm">
            <h2 className="title">Información</h2>
            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre el proyecto
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="name"
                id="name"
                value={data.name}
                placeholder="Nombre del proyecto"
                onChange={handleProyectName}
              />
              <input
                className="addForm__input"
                type="text"
                name="slogan"
                id="slogan"
                value={data.slogan}
                placeholder="Slogan"
                onChange={handleProyectName}
              />
              <div className="addForm__2col">
                <input
                  className="addForm__input"
                  type="url"
                  name="repo"
                  id="repo"
                  value={data.repo}
                  placeholder="Repositorio"
                  onChange={handleProyectName}
                />
                <input
                  className="addForm__input"
                  type="url"
                  name="demo"
                  id="demo"
                  value={data.demo}
                  placeholder="Demo"
                  onChange={handleProyectName}
                />
              </div>
              <input
                className="addForm__input"
                type="text"
                name="technologies"
                id="technologies"
                value={data.technologies}
                placeholder="Tecnologías"
                onChange={handleProyectName}
              />
              <textarea
                className="addForm__input"
                type="text"
                name="desc"
                id="desc"
                value={data.desc}
                placeholder="Descripción"
                rows="5"
                onChange={handleProyectName}
              ></textarea>
            </fieldset>

            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre la autora
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="autor"
                id="autor"
                value={data.autor}
                placeholder="Nombre"
                onChange={handleProyectName}
              />
              <input
                className="addForm__input"
                type="text"
                name="job"
                id="job"
                value={data.job}
                placeholder="Trabajo"
                onChange={handleProyectName}
              />
            </fieldset>

            <fieldset className="addForm__group--upload">
              <label htmlFor="image" className="button">
                Subir foto del proyecto
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="image"
                id="image"
                value={data.image}
                onChange={handleProyectName}
              />
              <label htmlFor="photo" className="button">
                Subir foto de la autora
              </label>
              <input
                className="addForm__hidden"
                type="file"
                name="photo"
                id="photo"
                value={data.photo}
                onChange={handleProyectName}
              />
              <button className="button--large">Guardar proyecto</button>
            </fieldset>
          </form>
        </main>

        <footer className="footer">
          <img
            className="logoSponsor"
            src="./images/adalab.png"
            alt="Logo Adalab"
          />
        </footer>
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