import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    sideBar: {
        position: 'fixed',
        height: '100vh',
        width: '240px',
        backgroundColor: '#4459e8',
        top: '0',
        left: '0',
    },
    titleContainer: {
    display: 'flex',
    marginTop: '24px',
    marginLeft: '10px',
    flexDirection: 'row',
    justifyContent: 'start',
    cursor: 'pointer',
  },
  logo: {
    height: '45px',
    width: '45px'
  },

}));