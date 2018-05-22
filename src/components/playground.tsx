import * as React from 'react';
import { CustomButton } from './button';
import { Dialog } from './dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const style = require("./style.scss");


export const Playground: React.StatelessComponent<{}> = (props) => {
  return (
    <>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MUI Playground
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={style.container}>
        <CustomButton label="Custom Button"/>
        <Dialog />
      </div>
    </>
  );
}
