import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import {Home} from "./containers/home";

export const AppRouter = () => {
    return (
        <HashRouter>
            <Route exact path='/' component={Home}/>
            {/*<Route exact path='/table-list' component={TableListExamples}/>
            <Route exact path='/multiselect' component={MultiselectExamples}/>
            <Route exact path='/datepicker' component={DatepickerExamples}/>*/}
        </HashRouter>
    );
};
