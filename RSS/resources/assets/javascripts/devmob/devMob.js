/**
 * Created by batur on 4/4/2016.
 */
var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Home = require('./pages/homePage'),
    Header = require('./components/header');

$ = jQuery = require('jquery');

var DevMob = React.createClass({
    render: function () {
        return (
            <div className="main">
                <Header title="Dev Mob RSS Reader" />
                <div className="main-content">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = DevMob;