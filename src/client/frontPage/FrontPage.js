import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from './FrontPageActions';

class FrontPage extends Component { 
  componentWillMount() {
    this.props.getPosts();
  }
  render() {
    const postTitles = this.props.posts.map(post => <li key={post.id}>{post.title}</li>);
    return (
      <div>
        <h1>Posts</h1>
        <ul>{ postTitles }</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps, { getPosts })(FrontPage);
