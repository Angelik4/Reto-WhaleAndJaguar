import {createMuiTheme} from '@material-ui/core/styles';
import { deepPurple}  from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: deepPurple[400]
        }
    }
}); 

export default theme; 