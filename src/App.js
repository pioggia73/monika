import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './components/globals/GlobalStyles';
// components //
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// pages //
import About from './pages/About';
import Header from './pages/Header';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Default from './pages/Default';

const App = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  };
 
    return (
      <React.Fragment>
        <GlobalStyles/>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Switch>
         <Route exact path='/' >
            <Header />
         </Route>
         <Route path='/about'>
            <About />
         </Route>
         <Route path='/contact'>
            <Contact />
         </Route>
         <Route path='/projects'>
            <Projects />
         </Route>
         <Route path='/default'>
            <Default />
         </Route>
        </Switch>
      </React.Fragment>
    )
};

export default App;
