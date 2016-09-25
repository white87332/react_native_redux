import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, ListView } from 'react-native';
import { bindActionCreators } from 'redux';
import * as postsActions from '../../actions/postsActions';
import { connect } from 'react-redux';

function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        actions : bindActionCreators(postsActions, dispatch)
    };
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
        textAlign: 'center'
    },
    thumbnail: {
        width: 72,
        height: 72,
    },
    listView: {
        paddingTop: 30,
        backgroundColor: '#F5FCFF'
    }
});

class Posts extends Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {};
    }

    componentDidMount()
    {
        const { postsList } = this.props.actions;
        postsList();
    }

    shouldcomponentupdate(nextProps, nextState)
    {

    }

    rendorRow(rowData)
    {
        return <View style={styles.container}>
                    <Image style={styles.thumbnail} source={{uri: rowData.thumbnail}} />
                    <Text style={styles.rightContainer}>{rowData.title}</Text>
                </View>;
    }

    render()
    {
        const { posts } = this.props;
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        return (
            <View>
                <ListView
                    style={styles.listView}
                    dataSource={ds.cloneWithRows(posts.list)}
                    renderRow={this.rendorRow} />
            </View>
        );
    }
}

Posts.PropTypes = {
    posts: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
