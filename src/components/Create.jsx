import PropTypes from 'prop-types';

import Form from './Form';
import Hero from './Hero';
import Preview from './Preview';

function Create({ changeData, data }) {
  return (
    <main className="main">
      <Hero />
      <Preview data={data} />
      <Form changeData={changeData} data={data} />
    </main>
  );
}

Create.propTypes = {
  data: PropTypes.array.isRequired,
  changeData: PropTypes.func.isRequired,
};

export default Create;
