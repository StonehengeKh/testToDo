import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import './style.css';
import {connect} from "react-redux";
import {getPosts} from "../../redux/actions/posts";
import {getComments} from "../../redux/actions/comments";


function Post({ posts, getPosts, comments, getComments}) {

    const { id } = useParams();

    const post = posts.find((el) => el.id === +id)

    // console.log('posts', posts)

    useEffect(() => {
        if (posts.length === 0) getPosts();
        getComments(id);
    }, []);



  return (
    <div>
        <Link to={'/'}>Back</Link>
        <div className='postWrapper'>
            <span>post id: {post && post.id}</span>
            <h5>{post && post.title}</h5>
            <span>{post && post.body}</span>
        </div>
        {comments && comments.map(
            ({ id, name, body, email}) => (
                <div className='commentBlock' key={id}>
                    <h5>{name}</h5>
                    <span>{body}</span>
                    <h6>{email}</h6>
                </div>
            ))
        }
    </div>
  );
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
    comments: state.commentsReducer.comments,
})

const mapDispatchToProps = {
    getPosts,
    getComments,
};

export default connect(mapStateToProps, mapDispatchToProps) (Post)
