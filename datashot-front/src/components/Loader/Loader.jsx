import './Loader.scss';

const Loader = ({ message }) => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;