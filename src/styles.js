import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    pagesContainer: {
        marginTop: '15px',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            marginLeft: '240px',
            marginTop: '30px',
          },
    },
    authContainer: {
        marginTop: '15px',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: '30px',
          },
    }

}));