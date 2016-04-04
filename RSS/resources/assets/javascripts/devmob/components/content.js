/**
 * Created by batur on 4/4/2016.
 */
'use strict'

var React = require('react');

var Content = React.createClass({
    render: function () {
        return (
            <header className="main-header">
                <h1 className="main-title-text">{this.prop.title}</h1>
            </header>
        );
    }
});

module.exports = Content;
