import React from 'react';
import { Route } from 'react-router-dom';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { Header } from './components';
import { Nav } from './components';
import { Home } from './components';
import { Store } from './components';
import { About } from './components';
import { Contacts } from './components';
import { Cart } from './components';
import { Footer } from './components';

const App = () => {
    const theme = useSelector((state) => state.lighters.theme);

    return (
        <div className={classNames('application', {
            'application--light': theme,
            'application--dark': !theme
        })}>
            <Header/>
            <Nav/>
            <div className='content'>
                <Route path='/home' component={Home} exact/>
                <Route path='/store' component={Store} exact/>
                <Route path='/about' component={About} exact/>
                <Route path='/contacts' component={Contacts} exact/>
                <Route path='/cart' component={Cart} exact/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
