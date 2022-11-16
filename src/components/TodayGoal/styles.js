import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper: {
        padding: '15px',
        textAlign: 'center',
        margin: '8px',
    },
    hundredEmpty: {
        height: '45px',
        borderTop: '0.25rem solid black',
        width: '100%',
        borderRadius: '10px',
        background: '#F9F6EE'
    },
    hundredFilled: {
        height: '45px',
        borderTop: '0.25rem solid black',
        width: '100%',
        background: '#74ccf4',
        borderRadius: '10px',
    },
    hundredEmptyGoal: {
        height: '45px',
        borderTop: '0.25rem solid #FFEA00',
        width: '100%',
        borderRadius: '10px',
        background: '#F9F6EE'
    },
    hundredFilledGoal: {
        height: '45px',
        borderTop: '0.25rem solid #FFEA00',
        width: '100%',
        background: '#74ccf4',
        borderRadius: '10px',
    }

}));