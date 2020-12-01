import React from 'react';
import Movieview from './Componets/MovieView';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UpComing from './Componets/UpComing';
import TopRated from './Componets/TopRated';





function App() {
  return (
    <div>
    
    <BrowserRouter>
      <Switch>
      
      <Route path='/' exact component={Movieview} />
      <Route path='/Upcoming' exact component={UpComing} />
      <Route path='/TopRated' exact component={TopRated} />
      
      
      </Switch>
    </BrowserRouter>
    
    </div>
  );
}

export default App;