/**
 * Created by batur on 4/4/2016.
 */
'use strict'

var React = require('react'),
    RssList = require('../rss/rssList');

var RssPage = React.createClass({



    render: function () {
        return (
            <div className="page-constrained rss-page-constrained">
                <p>Check the RSS List</p>
                <RssList />
            </div>
        );
    }
});

module.exports = RssPage;
