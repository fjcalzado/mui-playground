import * as React from "react";
import { CustomButton } from "../button";

const style = require("./style.scss");


interface DialogProps {
  
}

export class Dialog extends React.Component<DialogProps, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={style.container}>
        <div className={style.body}>
          <p>I am a dialog</p>
        </div>
        <div className={style.control}>
          <CustomButton label="OK" classes={{root: style.button}}/>
          <CustomButton label="Cancel" />
        </div>
      </div>
    );
  }
};
