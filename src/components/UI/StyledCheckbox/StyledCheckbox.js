import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

export const StyledCheckbox = withStyles({
  root: {
    "&$checked": {
      "& .MuiIconButton-label": {
        position: "relative",
        color: "#fff",
        backgroundColor: "#e7e7e7",
        zIndex: 0,
      },
      "& .MuiIconButton-label:after": {
        content: '""',
        left: 4,
        top: 4,
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "#de6262",
        zIndex: -1,
      },
    },
  },
  checked: {},
})(Checkbox);
