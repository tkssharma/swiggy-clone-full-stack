import { makeStyles } from '@material-ui/core/styles';

const useStylesBase = makeStyles(({ palette }) => ({
  root: (props) =>
    props.contrastText
      ? {
          color: palette.common.white,
          '&:hover': { color: palette.common.white },
        }
      : {},
}));

export default useStylesBase;
