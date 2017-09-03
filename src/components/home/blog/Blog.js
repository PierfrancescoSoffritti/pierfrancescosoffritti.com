import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBlogPosts } from "../../../redux/actions/blogPosts";

import "../../_common/common.css"
import "./blog.css"

class Blog extends Component {

    componentWillMount = () => {
        this.props.fetchBlogPosts()
    }

    render () {
        const { blogPosts } = this.props;

        console.log(blogPosts);

        return (
            <div className="home-section blog-container">
                Latest blog posts
            </div>
        );
    }
}

const mapStateToProps = store => ({
    blogPosts: store.blogPosts
})

const mapDispatchToProps = dispatch => ({
    fetchBlogPosts: () => dispatch(fetchBlogPosts)
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);