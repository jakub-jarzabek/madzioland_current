import React, {useState, useEffect} from 'react';

import '../Styles/Animation.scss'
import TypoBg from '../Images/TypoBg.jpg'
import ComicsBg from '../Images/ComicsBg.jpg'
import TypoMain from '../Images/TypoMain.jpg'
import ComicsMain from '../Images/ComicsMain.jpg'
import TypoHeader from '../Images/TypoHeader.png'
import ComicsHeader from '../Images/ComicsHeader.png'
import TypoHeader_ENG from '../Images/TypoHeader_ENG.png'
import ComicsHeader_ENG from '../Images/ComicsHeader_ENG.png'
import NavigationLite from '../Components/NavigationLite'
const Animation = (props) => {
    const [navOpacity,setNavOpacity] = useState('1')
    const [comicsHeader,setComicsHeader] = useState(ComicsHeader);
    const [typoHeader,setTypoHeader] = useState(TypoHeader);
    useEffect(()=>{

        if(props.textContext.Animation.Header==="PL"){
            setComicsHeader(ComicsHeader);
            setTypoHeader(TypoHeader)
        }else{
            setComicsHeader(ComicsHeader_ENG);
            setTypoHeader(TypoHeader_ENG)
        }
    },[props.textContext.Animation.Header])
    const {BackBtn} = props.textContext.Animation
    //State
    const [typoMouseOverCheck,setTypoMouseOverCheck] = useState(false)
    const [comicsMouseOverCheck,setComicsMouseOverCheck] = useState(false)
    const [clipPath, setClipPath] = useState({
        comics:'polygon(100% 0, 40% 0, 60% 100%, 100% 100%)',
        typo:'polygon(0 0, 40% 0, 60% 100%, 0% 100%)',
        border:'polygon(39.5% 0, 40% 0, 60% 100%, 59.5% 100%)'
    });
    //Zindex State
    const [zIndex,setZIndex] = useState({
        comics:'0',
        typo:'0'
        })
    //opacity
    const [typoContentOpacity,setTypoContentOpacity] = useState({
        header:'1',
        movie:'0'
    })
    const [comicsContentOpacity,setComicsContentOpacity] = useState({
        header:'1',
        movie:'0'
    })
    const [bottomLeftDisplay,setBottomLeftDisplay] = useState('none')
    const [bottomLeftOpacity,setBottomLeftOpacity] = useState('0')
    const [topRightDisplay,setTopRightDisplay] = useState('none')
    const [topRightOpacity,setTopRightOpacity] = useState('0')
    const [comicsMovieDisplay, setComicsMovieDisplay] = useState('none')
    const [typoMovieDisplay, setTypoMovieDisplay] = useState('0')
    const [disableComics, setDisableComics] = useState(false)
    const [disableTypo, setDisableTypo] = useState(false)

    //Functions
    const handleTypoOnMouseOver = () =>{
        if(typoMouseOverCheck===false && disableTypo===false) {
            setComicsMouseOverCheck(false);
            setClipPath({
                comics:'polygon(100% 0, 45% 0, 65% 100%, 100% 100%)',
                typo:'polygon(0 0, 45% 0, 65% 100%, 0% 100%)',
                border:'polygon(45% 0, 45.5% 0, 65.5% 100%, 65% 100%)'
            })
            setTypoMouseOverCheck(true);
        }
    }

    const handleComicsOnMouseOver = ()=>{
        if(comicsMouseOverCheck===false && disableComics===false) {
            setTypoMouseOverCheck(false);
            setClipPath({
                comics:'polygon(100% 0, 35% 0, 55% 100%, 100% 100%)',
                typo:'polygon(0 0, 35% 0, 55% 100%, 0% 100%)',
                border:'polygon(34.5% 0, 35% 0, 55% 100%, 54.5% 100%)'
            })
            setComicsMouseOverCheck(true);
        }
    }

    const handleTypoOnClick= () =>{
        document.querySelector('#AnimationDiv .NavigationLite').style.opacity=0    
            setDisableComics(true)
            setZIndex({
                comics:'0',
                typo:'1'
            })
             setTypoMovieDisplay('block')
        setTimeout(()=>{
            setTypoContentOpacity({
                header:'0',
                movie:'1'
            })
        setTopRightDisplay('block')
            setClipPath({
                // comics:
                border:'polygon(90% 0, 90.5% 0, 120.5% 100%, 120% 100%)',
                typo:'polygon(0 0, 90% 0, 120% 100%, 0% 100%)',
            })
            setTimeout(()=>{
                setTopRightOpacity('1')
                setTimeout(()=>{
                    setDisableComics(false)
                },500)
            },1000)},500)
}

    const handleTopRightOnClick= ()=>{
        document.querySelector('#AnimationDiv .NavigationLite').style.opacity=1
        if(disableComics===false){
            setTypoContentOpacity({
                header:'1',
                movie:'0'
            })
        setTypoMouseOverCheck(false);
        setTopRightOpacity('0')
        setTopRightDisplay('none')
            setClipPath( {
                comics: 'polygon(100% 0, 40% 0, 60% 100%, 100% 100%)',
                border:'polygon(39.5% 0, 40% 0, 60% 100%, 59.5% 100%)',
                typo:'polygon(0 0, 40% 0, 60% 100%, 0% 100%)',
            })

        setTimeout(()=>{
            setZIndex({
                comics:'0',
                typo:'0'
            })
            setTypoMovieDisplay('none')
            },1500)}
}

    const handleComicsOnClick= () =>{
        document.querySelector('#AnimationDiv .NavigationLite').style.opacity=0
        setDisableTypo(true)
        setZIndex({
            comics:'1',
            typo:'0'
        })
        setComicsMovieDisplay('block')
        setTimeout(()=>{
            setComicsContentOpacity({
                header:'0',
                movie:'1'
            })
            setClipPath( {
                comics: 'polygon(100% 0, -20% 0, 10% 100%, 100% 100%)',
                border:'polygon(-20% 0, -19.5% 0, 10% 100%, 9.5% 100%)',
                typo:'polygon(0 0, 40% 0, 60% 100%, 0% 100%)',
            })
        setBottomLeftDisplay('block')
            setTimeout(()=>{
                setBottomLeftOpacity('1')
                setTimeout(()=>{
                    setDisableTypo(false)
                },500)

            },1000)},500)



    }

    const handleBottomLeftOnClick= ()=>{
        document.querySelector('#AnimationDiv .NavigationLite').style.opacity=1
        if (disableTypo===false){
            setComicsMouseOverCheck(false);
            setBottomLeftDisplay('none')
             setBottomLeftOpacity('0')
            setComicsContentOpacity({
                header:'1',
                movie:'0'
            })
            setClipPath( {
                comics: 'polygon(100% 0, 40% 0, 60% 100%, 100% 100%)',
                border:'polygon(39.5% 0, 40% 0, 60% 100%, 59.5% 100%)',
                typo:'polygon(0 0, 40% 0, 60% 100%, 0% 100%)',
            })

        setTimeout(()=>{
            setZIndex({
                comics:'0',
                typo:'0'
            })
            setComicsMovieDisplay('none')
        },1500)}
    }


    return (
        <div className='Animation' id='AnimationDiv'>
           <NavigationLite textContext={props.textContext} engOnClick={props.engOnClick} plOnClick={props.plOnClick} id='AnimationNav' style={{opacity:navOpacity}}/>
            <p className='Legal'>Copyright &copy; <a href="https://www.linkedin.com/in/magdalena-pierzchala/" className='NameLink'>Magdalena Pierzchała</a> | Website created By <a href="https://www.linkedin.com/in/jakub-jarzabek/" className='NameLink'>Jakub Jarząbek</a></p>
            <div className='OuterTypo' style={{transition:'1.5s',clipPath:clipPath.typo, zIndex:zIndex.typo} } id='OuterTypo' onClick={handleTypoOnClick} onMouseEnter={handleTypoOnMouseOver}>
                <img src={TypoBg} alt="" className='TypoBg'/>
                <img src={TypoMain} alt="" className='TypoMain' id='TypoMain'/>
                <img src={typoHeader} alt="" className='TypoHeader' id='TypoHeader' style={{opacity:typoContentOpacity.header}}/>
                <iframe src="https://www.youtube.com/embed/X0c4m5gfOfs?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className='TypoMovie'
                        style={{opacity:typoContentOpacity.movie,display:typoMovieDisplay}}
                />

            </div>

            <div className='OuterComics' style={{transition:'1.5s',clipPath:clipPath.comics,zIndex:zIndex.comics}} id='OuterComics' onClick={handleComicsOnClick} onMouseEnter={handleComicsOnMouseOver}>
                <img src={ComicsBg} alt="" className='ComicsBg'/>
                <img src={ComicsMain} alt="" className='ComicsMain' id='ComicsMain'/>
                <img src={comicsHeader} alt="" className='ComicsHeader' id='ComicsHeader' style={{opacity:comicsContentOpacity.header}}/>
                <iframe src="https://www.youtube.com/embed/F9GVPw0ueOY?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        className='ComicsMovie'
                        style={{opacity:comicsContentOpacity.movie,display:comicsMovieDisplay}}
                />
            </div>
             <div className='border' style={{clipPath:clipPath.border}} id='Border'/>
            <div className='TopRight' id='TopRight' onClick={handleTopRightOnClick} style={{opacity:topRightOpacity,display:topRightDisplay}}>
                <span>{BackBtn}</span>
            </div>
            <div className='BottomLeft' id='BottomLeft' onClick={handleBottomLeftOnClick} style={{opacity:bottomLeftOpacity,display:bottomLeftDisplay}}>
                <span>{BackBtn}</span>
            </div>
        </div>
    );
}

export default Animation;