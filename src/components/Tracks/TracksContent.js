import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
// import TrackFormContainer from 'containers/TrackFormContainer';
import TracksList from 'components/Tracks/TracksList'

const TracksContent = ({ tracks, classes }) => (
  <section id='tracks' className={`grid-row justify-end padding-top-micro padding-bottom-micro`}>
    <Switch>
      <Route exact path='/admin/tracks' render={() => <TracksList tracks={tracks} />} />
      {/* <Route exact path='/admin/tracks/add' component={TrackFormContainer} /> */}
    </Switch>
  </section>
);

export default TracksContent;
