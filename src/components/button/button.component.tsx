import * as React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, StyledComponentProps } from "@material-ui/core/styles";


const styles = theme => ({
  root: {
    backgroundColor: "red",
  },
  label: {
    fontSize: "2rem",
  }
});

type ClassKey = "root" | "label";

interface CustomButtonProps extends StyledComponentProps<ClassKey> {
  label: string;
};

class InnerCustomButton extends React.Component<CustomButtonProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;

    return (
      <Button variant="raised" 
        classes={{
          root: classes.root,
          label: classes.label,
        }}
      >
        {this.props.label}
      </Button>
    );
  }
};

export const CustomButton: React.ComponentType<CustomButtonProps> = withStyles(styles)(InnerCustomButton);