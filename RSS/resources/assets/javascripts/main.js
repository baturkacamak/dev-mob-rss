/**
 * Created by batur on 4/4/2016.
 */
"use strict";

var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');


Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('dev-mob-rss'));
});
