/**
 * Created by batur on 4/4/2016.
 */
'use strict'

var React = require('react'),
    FeedList = require('../rss/feedList');

var FeedPage = React.createClass({
    render: function () {
        return (
            <div className="page-constrained rss-item-page">
                <FeedList
                    id={this.props.params.id}
                />
            </div>
        );
    }
});

module.exports = FeedPage;
