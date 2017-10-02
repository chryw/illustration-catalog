import * as React from 'react';
import { Route } from 'react-router-dom';
import Overview from './Guidelines/Overview.jsx';
import Colors from './Guidelines/Colors.jsx';
import Style from './Guidelines/Style.jsx';
import UsingPeople from './Guidelines/UsingPeople.jsx';
import SizeAndPlacement from './Guidelines/SizeAndPlacement.jsx';
import WorldReadiness from './Guidelines/WorldReadiness.jsx';

const Guidelines = () => (
  <div className="guidelines">
    <Route path="/:id" component={Overview} />
    <Route path="/:id" component={Colors} />
    <Route path="/:id" component={Style} />
    <Route path="/:id" component={UsingPeople} />
    <Route path="/:id" component={SizeAndPlacement} />
    <Route path="/:id" component={WorldReadiness} />
  </div>
);

export default Guidelines;
