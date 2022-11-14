import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '320px',
        objectFit: 'contain',
    },

}));