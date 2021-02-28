import React from 'react';
import Navbar from './components/Header.jsx';
import Selectors from './components/Selectors'
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './components/themes'
import SelectButton from './components/SelectButton.jsx';
import SelectPerson from './components/SelectPerson.jsx'
import ReadApi from './components/ReadAPI.jsx';


function App() {
  return (
    <ThemeProvider theme= {theme}>
    <Navbar/>
    <SelectButton/>
    <Selectors/>
    <SelectPerson/>
    <ReadApi/>
    </ThemeProvider>
  );
}

export default App;
