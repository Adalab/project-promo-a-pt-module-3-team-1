import { useEffect, useState } from 'react';
import '../scss/App.scss';
import Header from './Header';
import Create from './Create';
import Footer from './Footer';
import ls from '../components/services/localStorage';
// import { Routes } from 'react-router-dom';
function App() {
  const [data, setData] = useState(
    ls.get('project', {
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    })
  );
  const [responseFetch, setResponseFetch] = useState('');

  useEffect(() => {
    ls.set('project', data);
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
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        console.log('Llegó el Fetch!');

        console.log(dataResponse);
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
          onSubmit={handleFetchCreate}
          responseFetch={responseFetch}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;

