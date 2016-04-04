/**
 * Created by batur on 4/4/2016.
 */
'use strict';
var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <div className="main-header">
                <h1 className="header-title-text">
                    <Link to="index" className="header-title-link" >
                        {this.props.title}
                    </Link>
                </h1>
            </div>
        );
    }
});

module.exports = Header;