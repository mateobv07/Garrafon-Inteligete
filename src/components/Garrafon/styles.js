import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: '280px',
        objectFit: 'contain',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    editName: {
        width: '300px',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

    }

}));