/**
 * Created by batur on 4/4/2016.
 */
'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute,
    Route = Router.Route;

var routes = (
    <Route name="index" path="/" handler={require('./devmob/devMob')}>
        <DefaultRoute handler={require('./devmob/pages/homePage')} />
        <Route name="rss" handler={require('./devmob/pages/rssPage')} />
        <Route name="feed" path="rss/:id" handler={require('./devmob/pages/feedPage')} />
    </Route>
);

module.exports = routes;