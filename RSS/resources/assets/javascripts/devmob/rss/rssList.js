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
    jquery = require('jquery'),
    RssListItem = require('./rssListItem');

var RssList = React.createClass({

    getInitialState: function () {
        return {
            rss: []
        };
    },

    componentWillMount: function () {
        var self = this;
        var ajax = $.ajax({
                url: 'api/rss',
                type: 'get'
            }
        );
        $.when(ajax).done(function (data) {
            var dataJson = JSON.parse(data);
            self.setState({rss: dataJson});
        });
    },

    render: function () {
        return (
            <div className="rss-list-constrained">
                <ul className="rss-list">
                {this.state.rss.map(function (data, i) {
                    return <RssListItem
                        key={i}
                        id={i}
                        rss={data}
                    />
                })}
                </ul>
            </div>
        );
    }
});

module.exports = RssList;
