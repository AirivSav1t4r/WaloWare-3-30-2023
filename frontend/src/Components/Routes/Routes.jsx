import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Empleado } from '../../Pages/Empleado/Empleado';
import { Card } from '../Card/Card';


const Routes = () => {
  return (
    <Switch>
      
      <Route exact path="/card" component={Card} />
 
    </Switch>
  );
};

export default Routes;