/**
 * Created by batur on 4/4/2016.
 */
/**
 * Created by batur on 4/4/2016.
 */
'use strict';


var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link;

var RssListItem = React.createClass({

    render: function () {

        return (
            <li>
                <Link to={'feed'} params={{id: this.props.id}}>
                    {this.props.rss['source-name']}
                </Link>
            </li>
        );
    }
});

module.exports = RssListItem;
