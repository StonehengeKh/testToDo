import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {connect} from "react-redux";

import './style.css';
import {getPosts} from "../../redux/actions/posts";
import {getComments} from "../../redux/actions/comments";
import {selectPosts} from "../../redux/selectors/posts";
import {selectComments} from "../../redux/selectors/comments";

function Post({ posts, getPosts, comments, getComments}) {

    const { id } = useParams();
    const post = posts.find((el) => el.id === +id)

    useEffect(() => {
        if (posts.length === 0) {
            getPosts();
        }
        getComments(id);
    }, []);                                                                                                         // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
        <Link to={'/'}>Back</Link>
        <div className='postWrapper'>
            <span>post id: {post && post.id}</span>
            <h5>{post && post.title}</h5>
            <span>{post && post.body}</span>
        </div>
        {comments.map(
            ({ id, name, body, email}) => (
                <div className='commentWrapper' key={id}>
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
    posts: selectPosts(state),
    comments: selectComments(state),
})

const mapDispatchToProps = {
    getPosts,
    getComments,
};

export default connect(mapStateToProps, mapDispatchToProps) (Post)
