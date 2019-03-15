import * as React from 'react';
import { Route } from 'react-router-dom';
import Overview from './Guidelines/Overview';
import Colors from './Guidelines/Colors';
import Style from './Guidelines/Style';
import UsingPeople from './Guidelines/UsingPeople';
import SizeAndPlacement from './Guidelines/SizeAndPlacement';
import WorldReadiness from './Guidelines/WorldReadiness';

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
