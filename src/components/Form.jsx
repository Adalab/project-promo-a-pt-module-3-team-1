import { useState } from 'react';

function Form ({data} ) {

  // const [data, setData] = useState({
  //   name: '',
  //   slogan: '',
  //   technologies: '',
  //   demo: '',
  //   repo: '',
  //   desc: '',
  //   autor: '',
  //   job: '',
  //   image: '',
  //   photo: '',
  // })

  const handleProyectName = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setData({ ...data, [inputName]: inputValue });
  }
  return (
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
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
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
    
  );
}

export default Form ;