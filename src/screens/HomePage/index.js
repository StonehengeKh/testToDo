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


const debounce = (func, wait) => {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

function HomePage({searchPost, search, getPosts, posts, createPost, deletePost, editPost, uniqueId, updateUniqueId, sortForId}) {

    useEffect(() => {
        if (posts.length === 0)getPosts();
    }, []);

    const arrayUniqueUserID = []
    function itemCheck(item) {
        if (arrayUniqueUserID.indexOf(item.userId) === -1) {
            arrayUniqueUserID.push(item.userId);
        }
    }
    posts.forEach(itemCheck)

    const sendData = {}
    const updateData = {}

    const onChangeTitle = (event) => {
        // console.log('title====>', event.target.value.length > 0)
        sendData.title = (event.target.value)
    }
    const onChangeBody = (event) => {
        sendData.body = event.target.value
    }
    const onChangeNewTitle = (event) => {
        updateData.title = event.target.value
    }
    const onChangeNewBody = (event) => {
        updateData.body = event.target.value
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
        sendData.userId = Math.ceil(Math.random() * 10)
        if (sendData.hasOwnProperty('title') && sendData.title.length > 0 && sendData.hasOwnProperty('body') && sendData.body.length > 0) {
            createPost(sendData);
        } else {
            alert('Fill information')
        }
    }

    const updatePost = (id, userId) => {
        if (updateData.hasOwnProperty('title') && updateData.title.length > 0 && updateData.hasOwnProperty('body') && updateData.body.length > 0) {
            editPost({...updateData, id: id, userId: userId});
        } else {
            alert('Fill information')
        }
    }

    const filterPosts = posts.filter(el => uniqueId.includes(el.userId))
    const postsForView = (uniqueId.length > 0) ? filterPosts : posts
    const searchPostView = postsForView.filter(el => el.title.startsWith(search))
    const postForMap = (search !== '') ? searchPostView : postsForView

    const fromBig = () => sortForId('fromBig')
    const fromSmall = () => sortForId('fromSmall')
    const random = () => sortForId('random')

    return (
    <div>
        <div className='header'>
            {arrayUniqueUserID.sort((a, b) => a - b).map(
                (id) => (
                    <div key={id} className='headerFilterBar' onClick={() => updateUniqueId(id)}>
                        <Checkbox checked={uniqueId && uniqueId.includes(id)}/>
                        <span>User id: {id}</span>
                    </div>
                ))
            }
        </div>
        <div className='header'>
            <Button onClick={fromBig}>From big ID</Button>
            <Button onClick={fromSmall}>From small ID</Button>
            <Button onClick={random}>Random</Button>
            <input type='text' placeholder='search' name='search for id post' onChange={sendSearchData}/>
        </div>
        <h3>List Posts</h3>
        <div className='formAddMessage'>
            <input type='text' placeholder='title' name='title' onChange={onChangeTitle}/>
            <input type='text' placeholder='body' name='body' onChange={onChangeBody}/>
            <Button className='button' onClick={createNewPost}>New</Button>
        </div>
        {posts && postForMap.map(
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
                        <Link to={`/toDo${id}`}>Details</Link>
                    </div>
                </div>
            ))
        }
    </div>
  );
}

const mapStateToProps = (state) => ({
    posts: state.postsReducer.posts,
    uniqueId: state.postsReducer.selectedUserId,
    search: state.postsReducer.search,
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
