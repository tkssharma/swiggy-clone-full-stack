import { makeStyles } from '@material-ui/core/styles';

const useStylesBase = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
}));

export default useStylesBase;
