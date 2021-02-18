import { createMuiTheme } from '@material-ui/core/styles';
import { PRIMARY, SECONDARY } from './tokens';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: PRIMARY,
    secondary: SECONDARY,
    background: {
      default: '#fff',
    },
  },
});

export default theme;
