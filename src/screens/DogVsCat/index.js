import React, {useEffect} from 'react'
import {connect} from "react-redux";

import HeaderOfScreens from "../../components/HeaderOfScreens";
import {selectDog} from "../../redux/selectors/dog";
import {getDog} from "../../redux/actions/dog";
import {Button} from "@material-ui/core";
import './style.css'
import {selectCat} from "../../redux/selectors/cat";
import {getCat} from '../../redux/actions/cat'

function Dog ({dog, getDog, cat, getCat}) {

    useEffect(() => {
            getDog();
            getCat();
    }, [])                                                                                                         // eslint-disable-line react-hooks/exhaustive-deps
    const dogImage = dog.message
    const catImage = cat && cat[0] && cat[0].url

    // console.log('render')

    return(
        <>
            <HeaderOfScreens title={'Dogs VS Cats'}/>
            <div className='buttonContainer'>
                <Button onClick={getDog}>New Dog</Button>
                <Button onClick={getCat}>New Cat</Button>
            </div>
            <div className='imagesContainer'>
                <img className='animalImage' src={dogImage} alt='dog'/>
                <span>VS</span>
                <img className='animalImage' src={catImage} alt='cat'/>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    dog: selectDog(state),
    cat: selectCat(state)
})

const mapDispatchToProps = {
    getDog,
    getCat,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dog)