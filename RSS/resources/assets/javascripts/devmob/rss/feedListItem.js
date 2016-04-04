/**
 * Created by batur on 4/4/2016.
 */
/**
 * Created by batur on 4/4/2016.
 */
'use strict';


var React = require('react'),
    Router = require('react-router');

var FeedListItem = React.createClass({

    render: function () {
        return (
            <li className="feed-item">
                <a className="feed-item-link" href={this.props.feed.link} target="_blank">
                    <span className="feed-item-title">{this.props.feed.title}</span>
                </a>
                <div className="feed-item-description" dangerouslySetInnerHTML={ {__html: this.props.feed.description} } />
            </li>
        );
    }
});

module.exports = FeedListItem;
