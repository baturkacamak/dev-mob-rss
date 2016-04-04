/**
 * Created by batur on 4/4/2016.
 */
'use strict';


// http://localhost:8000/api/rss/

/**
 * TODO:
 * get rid of jquery dependency
 * fix self scope in componentWillMount
 */

var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    jquery = require('jquery'),
    FeedListItem = require('./feedListItem');

var FeedList = React.createClass({

    getInitialState: function () {
        return {
            items: []
        };
    },

    componentDidMount: function () {
        this.serverRequest = $.get(
            'api/rss/' + this.props.id,
            function (data) {
                var dataJson = JSON.parse(data);
                this.setState({
                    title: dataJson.rss.channel.title,
                    items: dataJson.rss.channel.item
                });
            }.bind(this));
    },


    render: function () {
        return (
            <div className="feed-list-constrained">
                <h2>
                    <Link to={'rss'}>
                        {this.state.title}
                    </Link>
                </h2>
                <ul className="feed-list no-bullet-list">
                     {this.state.items.map(function (data, i) {
                         return <FeedListItem
                             key={i}
                             id={i}
                             feed={data}
                         />
                     })}
                </ul>
            </div>
        );
    }
});

module.exports = FeedList;
