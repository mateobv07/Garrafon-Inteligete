import loader from '../../assets/loading.gif'
import useStyles from './styles';

const Loader = ({ title }) => {
  const styles = useStyles();
  return (
      <div className={styles.container} >
        <h1 className='font-bold text-2xt text-white mt-2'>{title || "Loading..."}</h1>
        <img src={loader} alt="loader" className={styles.image}/>
      </div>
    );
}

export default Loader;