import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './../components/Header';
import Home from './../components/Home';
import Footer from './../components/Footer';


const AppRouter = () => (
    <BrowserRouter>
    <div className="container-fluid p-0 app">
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            
            { 
                /*
                <Header />
                <Route path="/projects" component={Projects}/>
		        <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
                */
            }
        </Switch>
        <Footer />
    </div>
    
    </BrowserRouter>
)

export default AppRouter;