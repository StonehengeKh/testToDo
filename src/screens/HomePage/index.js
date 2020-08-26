import React, {useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Checkbox from "@material-ui/core/Checkbox";
import {connect} from "react-redux";

import './style.css';
import {
    getPosts,
    createPost,
    deletePost,
    editPost,
    updateUniqueId,
    sortForId,
    searchPost
} from "../../redux/actions/posts";
import {
    selectPosts,
    selectSearch,
    selectSelectedUserId,
    selectUniqueUserID
} from "../../redux/selectors/posts";
import HeaderMenu from "../../components/HeaderMenu";

export const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

function HomePage({
                      uniqueUserID,
                      searchPost,
                      search,
                      getPosts,
                      posts,
                      createPost,
                      deletePost,
                      editPost,
                      uniqueSelectedUserId,
                      updateUniqueId,
                      sortForId,
}) {

    useEffect(() => {
        if (posts.length === 0) {
            getPosts();
        }
    }, []);                                                                                                                 // eslint-disable-line react-hooks/exhaustive-deps

    const newPostForSend = {}
    const updatePostForSend = {}

    const onChangeTitle = (event) => {
        newPostForSend.title = (event.target.value)
    }
    const onChangeBody = (event) => {
        newPostForSend.body = event.target.value
    }
    const onChangeNewTitle = (event) => {
        updatePostForSend.title = event.target.value
    }
    const onChangeNewBody = (event) => {
        updatePostForSend.body = event.target.value
    }
    const onChangeSearch = (event) => {
        searchPost(event.target.value)
    }

    const debouncedSearch = useRef(debounce(onChangeSearch, 1000)).current;

    const sendSearchData = (event) => {
        event.persist();
        debouncedSearch(event);
    }

    const createNewPost = () => {
        newPostForSend.userId = Math.ceil(Math.random() * 10)
        if (newPostForSend.hasOwnProperty('title')
            && newPostForSend.title.length > 0
            && newPostForSend.hasOwnProperty('body')
            && newPostForSend.body.length > 0) {
            createPost(newPostForSend);
        } else {
            alert('Fill information')
        }
    }

    const updatePost = (id, userId) => {
        if (updatePostForSend.hasOwnProperty('title')
            && updatePostForSend.title.length > 0
            && updatePostForSend.hasOwnProperty('body')
            && updatePostForSend.body.length > 0) {
            editPost({...updatePostForSend, id: id, userId: userId});
        } else {
            alert('Fill information')
        }
    }

    const filterPosts = posts.filter(el => uniqueSelectedUserId.includes(el.userId))
    const postsFilterOrAllPosts = (uniqueSelectedUserId.length > 0) ? filterPosts : posts
    const searchPostForTitle = postsFilterOrAllPosts.filter(el => el.title.startsWith(search))
    const postsForView = (search !== '') ? searchPostForTitle : postsFilterOrAllPosts

    const sortFromBigToSmallId = () => sortForId('fromBig')
    const sortFromSmallToBigId = () => sortForId('fromSmall')
    const sortRandomId = () => sortForId('random')

    const createListUniqueIUserId = uniqueUserID.map((id) => (
        <div key={id} className='headerFilterBar' onClick={() => updateUniqueId(id)}>
            <Checkbox checked={uniqueSelectedUserId && uniqueSelectedUserId.includes(id)}/>
            <span>User: {id}</span>
        </div>
    ))

    const createListPosts = postsForView.map(
        ({ id, title, body, userId}) => (
            <div className='toDoBlock' key={id}>
                <span>user id: {userId}</span>
                <span>id post: {id}</span>
                <h5>{title}</h5>
                <div>{body}</div>
                <div className='toDoButtonBlock'>
                    <div>
                        <input type='text' placeholder='new title' name='newTitle' onChange={onChangeNewTitle}/>
                        <input type='text' placeholder='new body' name='newBody' onChange={onChangeNewBody}/>
                        <Button onClick={updatePost}>Edit</Button>
                    </div>
                    <Button onClick={() => deletePost(id)}>Delete</Button>
                    <Link to={`/toDo${id}`} className='detailsButton'>Details</Link>
                </div>
            </div>
        ))


    return (
        <>
            <HeaderMenu/>
            <div className='header'>{createListUniqueIUserId}</div>
            <div className='header'>
                <Button onClick={sortFromBigToSmallId}>From big ID</Button>
                <Button onClick={sortFromSmallToBigId}>From small ID</Button>
                <Button onClick={sortRandomId}>Random</Button>
                <input type='text' placeholder='search' name='search for id post' onChange={sendSearchData}/>
            </div>
            <h3>List Posts</h3>
            <div className='formAddMessage'>
                <input type='text' placeholder='title' name='title' onChange={onChangeTitle}/>
                <input type='text' placeholder='body' name='body' onChange={onChangeBody}/>
                <Button className='button' onClick={createNewPost}>New</Button>
            </div>
            {createListPosts}
        </>
    );
}

const mapStateToProps = (state) => ({
    posts: selectPosts(state),
    uniqueUserID: selectUniqueUserID(state),
    uniqueSelectedUserId: selectSelectedUserId(state),
    search: selectSearch(state),
})

const mapDispatchToProps = {
    getPosts,
    createPost,
    editPost,
    deletePost,
    updateUniqueId,
    sortForId,
    searchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
