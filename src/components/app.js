import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DatePicker from 'material-ui/DatePicker';

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

export default class App extends Component {
  render() {
    return (
      	<MuiThemeProvider>
    		<DatePicker hintText="Landscape Dialog" mode="landscape" />
  		</MuiThemeProvider>
    );
  }
}
