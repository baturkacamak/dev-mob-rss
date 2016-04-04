/**
 * Created by batur on 4/4/2016.
 */
'use strict';


var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <p>Welcome to Basic RSS Reader</p>
                <Link to="rss">Check the RSS List</Link>
            </div>
        );
    }
});

module.exports = Home;