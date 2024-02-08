import PropTypes from 'prop-types';
import Card from "./Card";

function Preview({data} ) {
  return (
    <section className="preview">
    <Card data={data}/>
    </section>
  );
}
Preview.propTypes = {
  data: PropTypes.array.isRequired
}
export default Preview;

