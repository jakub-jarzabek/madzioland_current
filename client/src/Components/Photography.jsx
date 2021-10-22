import React, { useEffect, useState } from 'react'
import PhotographyHeader from './PhotographyHeader'
import '../Styles/Photography.scss'
import nature_1 from '../Images/Photography/Nature/nature_1.jpg'
import nature_2 from '../Images/Photography/Nature/nature_2.jpg'
import nature_3 from '../Images/Photography/Nature/nature_3.jpg'
import nature_4 from '../Images/Photography/Nature/nature_4.jpg'
import nature_5 from '../Images/Photography/Nature/nature_5.jpg'
import nature_6 from '../Images/Photography/Nature/nature_6.jpg'
import nature_7 from '../Images/Photography/Nature/nature_7.jpg'
import nature_8 from '../Images/Photography/Nature/nature_8.jpg'
import nature_9 from '../Images/Photography/Nature/nature_9.jpg'
import nature_10 from '../Images/Photography/Nature/nature_10.jpg'
import nature_12 from '../Images/Photography/Nature/nature_12.jpg'
import nature_13 from '../Images/Photography/Nature/nature_13.jpg'
import nature_14 from '../Images/Photography/Nature/nature_14.jpg'
import nature_11 from '../Images/Photography/Nature/nature_11.jpg'
import human_1 from '../Images/Photography/Human/human_1.jpg'
import human_2 from '../Images/Photography/Human/human_2.jpg'
import human_3 from '../Images/Photography/Human/human_3.jpg'
import human_4 from '../Images/Photography/Human/human_4.jpg'
import human_5 from '../Images/Photography/Human/human_5.jpg'
import abstract_1 from '../Images/Photography/Abstract/abstract_1.jpg'
import abstract_2 from '../Images/Photography/Abstract/abstract_2.jpg'
import abstract_3 from '../Images/Photography/Abstract/abstract_3.jpg'
import abstract_4 from '../Images/Photography/Abstract/abstract_4.jpg'
import abstract_5 from '../Images/Photography/Abstract/abstract_5.jpg'
import abstract_6 from '../Images/Photography/Abstract/abstract_6.jpg'
import architecture_1 from '../Images/Photography/Architecture/architecture_1.jpg'
import architecture_2 from '../Images/Photography/Architecture/architecture_2.jpg'
import architecture_3 from '../Images/Photography/Architecture/architecture_3.jpg'
import architecture_4 from '../Images/Photography/Architecture/architecture_4.jpg'
import architecture_5 from '../Images/Photography/Architecture/architecture_5.jpg'
import architecture_6 from '../Images/Photography/Architecture/architecture_6.jpg'
import architecture_7 from '../Images/Photography/Architecture/architecture_7.jpg'
import architecture_8 from '../Images/Photography/Architecture/architecture_8.jpg'
import architecture_9 from '../Images/Photography/Architecture/architecture_9.jpg'
import ArrowLeft from '../Images/ArrowLeft.png'
import ArrowRight from '../Images/ArrowRight.png'
import Triangle from '../Images/Tiangle.png'
import { Link } from 'react-scroll'
import { HomeHeader } from './HomeHeader'
const Photography = (props) => {
  const isBiggerThanFHD = () => {
    if (window.innerWidth === '1920') {
      return true
    } else {
      return false
    }
  }
  const handleOnClick = () => {
    const height = document.getElementById('GraphicDesignDiv').offsetHeight
    document
      .getElementById('PortfolioWrapper')
      .scrollBy({ top: height, behavior: 'smooth' })
  }
  const natureImagesObjectsArray = [
    {
      id: 0,
      src: nature_1,
      alt: 'śnieżynki na liściach',
    },
    {
      id: 1,
      src: nature_2,
      alt: 'śnieżynki',
    },
    {
      id: 2,
      src: nature_3,
      alt: 'tafla lodu',
    },
    {
      id: 3,
      src: nature_4,
      alt: 'potrójne kwiatki',
    },
    {
      id: 4,
      src: nature_5,
      alt: 'róża w kroplach wody',
    },
    {
      id: 5,
      src: nature_6,
      alt: 'jarzębina',
    },
    {
      id: 6,
      src: nature_7,
      alt: 'egzotyczny kwiat',
    },
    {
      id: 7,
      src: nature_8,
      alt: 'fioletowe różyczki',
    },
    {
      id: 8,
      src: nature_9,
      alt: 'fioletowe kwiatki',
    },
    {
      id: 9,
      src: nature_10,
      alt: 'kwiaty wiśni',
    },
    {
      id: 10,
      src: nature_11,
      alt: 'zboże',
    },
    {
      id: 11,
      src: nature_12,
      alt: 'włosy na listkach',
    },
    {
      id: 12,
      src: nature_13,
      alt: 'krople na igłach choinki',
    },
    {
      id: 13,
      src: nature_14,
      alt: 'mokry mech',
    },
  ]
  const humanImagesObjectsArray = [
    {
      id: 0,
      src: human_1,
      alt: 'duchy',
    },
    {
      id: 1,
      src: human_2,
      alt: 'panika',
    },
    {
      id: 2,
      src: human_3,
      alt: 'portret dwóch modelek',
    },
    {
      id: 3,
      src: human_4,
      alt: 'baletnica',
    },
    {
      id: 4,
      src: human_5,
      alt: 'głowa bez ciała',
    },
  ]
  const abstractImagesObjectsArray = [
    {
      id: 0,
      src: abstract_1,
      alt: 'różowy dym',
    },
    {
      id: 1,
      src: abstract_2,
      alt: 'fioletowa fala',
    },
    {
      id: 2,
      src: abstract_3,
      alt: 'kosmiczne kulki',
    },
    {
      id: 3,
      src: abstract_4,
      alt: 'planeta',
    },
    {
      id: 4,
      src: abstract_5,
      alt: 'czerwone krwinki',
    },
    {
      id: 5,
      src: abstract_6,
      alt: 'galaktyka',
    },
  ]
  const architectureImagesObjectsArray = [
    {
      id: 0,
      src: architecture_1,
      alt: 'wolskie rotundy',
    },
    {
      id: 1,
      src: architecture_2,
      alt: 'dach SGH',
    },
    {
      id: 2,
      src: architecture_3,
      alt: 'politechnika warszawska',
    },
    {
      id: 3,
      src: architecture_4,
      alt: 'Warszawa o zachodzie słońca',
    },
    {
      id: 4,
      src: architecture_5,
      alt: 'centrum Warszawy',
    },
    {
      id: 5,
      src: architecture_6,
      alt: 'odbicie bloku w wodzie',
    },
    {
      id: 6,
      src: architecture_7,
      alt: 'Pałac Kultury i Nauki',
    },
    {
      id: 7,
      src: architecture_8,
      alt: 'warszawska architektura',
    },
    {
      id: 8,
      src: architecture_9,
      alt: 'Warsaw Spire',
    },
  ]

  // State
  const [counter, setCounter] = useState(0)
  const [tab, setTab] = useState('nature')
  const [imageArray, setImageArray] = useState(natureImagesObjectsArray)
  const [currentImage, setCurrentImage] = useState(imageArray[0].src)
  const [width, setWidth] = useState('80%')
  // Functions
  const removeAllActiveClass = () => {
    for (let i = 0; i < imageArray.length - 1; i++) {
      document
        .querySelector(`[imagecounter="${i}"]`)
        .classList.remove('NatureImg-active')
    }
  }
  useEffect(() => {
    const nature = document.getElementById('NatureSpan')
    const abstract = document.getElementById('AbstractSpan')
    const architecture = document.getElementById('ArchitectureSpan')
    const human = document.getElementById('HumanSpan')
    nature.classList.remove('span-active')
    architecture.classList.remove('span-active')
    human.classList.remove('span-active')
    abstract.classList.remove('span-active')
    switch (tab) {
      case 'nature': {
        nature.classList.add('span-active')
        setImageArray(natureImagesObjectsArray)
        setCurrentImage(natureImagesObjectsArray[0].src)
        setCounter(0)
        if (window.innerWidth >= '1920') {
          setWidth('80%')
        }

        break
      }
      case 'human': {
        human.classList.add('span-active')
        setImageArray(humanImagesObjectsArray)
        setCurrentImage(humanImagesObjectsArray[0].src)
        setCounter(0)
        setWidth('auto')
        break
      }
      case 'architecture': {
        architecture.classList.add('span-active')
        setImageArray(architectureImagesObjectsArray)
        setCurrentImage(architectureImagesObjectsArray[0].src)
        setCounter(0)
        if (window.innerWidth >= '1920') {
          setWidth('62%')
        }
        break
      }
      case 'abstract': {
        abstract.classList.add('span-active')
        setImageArray(abstractImagesObjectsArray)
        setCurrentImage(abstractImagesObjectsArray[0].src)
        setCounter(0)
        if (window.innerWidth >= '1920') {
          setWidth('50%')
        }
        break
      }
      default: {
        throw 'array does not exist'
      }
    }
    document
      .querySelector(`[imagecounter="0"]`)
      .classList.add('NatureImg-active')
  }, [tab])
  const handleImageOnClick = (e) => {
    document
      .querySelector(`[imagecounter="${counter}"]`)
      .classList.remove('NatureImg-active')
    setCounter(parseInt(e.target.attributes.imagecounter.nodeValue, 10))
  }
  const incrementOnClick = () => {
    // document.querySelector(`[imagecounter="${counter}"]`).classList.remove('NatureImg-active')
    // if(counter<imageArray.length-1) {
    //     setCounter(counter + 1)
    // }
    // else if (counter===imageArray.length-1)
    // {
    //     setCounter(0)
    // }
    let scroll
    if (
      document.querySelector(`[imagecounter="${counter + 1}"]` !== 'undefined')
    ) {
      scroll = document.querySelector(
        `[imagecounter="${counter + 1}"]`
      ).offsetWidth
    } else {
      scroll = document.querySelector(`[imagecounter="${counter}"]`).offsetWidth
    }

    document
      .getElementById('ImagesContainer')
      .scrollBy({ left: scroll, behavior: 'smooth' })
    //.scrollLeft+=document.getElementById('ImagesContainer').scrollLeftMax/2;
  }
  const decrementOnClick = () => {
    let scroll
    if (
      document.querySelector(`[imagecounter="${counter - 1}"]` !== 'undefined')
    ) {
      scroll = document.querySelector(
        `[imagecounter="${counter - 1}"]`
      ).offsetWidth
    } else {
      scroll = document.querySelector(`[imagecounter="${counter}"]`).offsetWidth
    }
    document
      .getElementById('ImagesContainer')
      .scrollBy({ left: -scroll, behavior: 'smooth' })
    //.scrollLeft-=document.getElementById('ImagesContainer').scrollLeftMax/2;
    // document.querySelector(`[imagecounter="${counter}"]`).classList.remove('NatureImg-active')
    // if(counter>0) {
    //     setCounter(counter - 1)
    // }
    // else if (counter===0)
    // {
    //     setCounter(imageArray.length-1)
    // }
  }
  useEffect(() => {
    document.getElementById('BgImg').classList.add('PhotographyBgImg-Out')
    document.getElementById('MainImage').classList.add('PhotographyMainImg-Out')
    setTimeout(() => {
      document.getElementById('BgImg').classList.remove('PhotographyBgImg-Out')
      document
        .getElementById('MainImage')
        .classList.remove('PhotographyMainImg-Out')
      setCurrentImage(imageArray[counter].src)
      document
        .querySelector(`[imagecounter="${counter}"]`)
        .classList.add('NatureImg-active')
    }, 200)
  }, [counter])
  const handleNatureOnClick = () => {
    removeAllActiveClass()
    setTab('nature')
  }
  const handleHumanOnClick = () => {
    removeAllActiveClass()
    setTab('human')
  }
  const handleAbstractOnClick = () => {
    removeAllActiveClass()
    setTab('abstract')
  }
  const handleArchitectureOnClick = () => {
    removeAllActiveClass()
    setTab('architecture')
  }

  // Genereting DOM elements
  const natureImages = imageArray.map((image) => (
    <div className="__Wrapper">
      <img
        src={image.src}
        alt={image.alt}
        key={image.id}
        onClick={handleImageOnClick}
        imagecounter={image.id}
        className="NatureImg"
      />
    </div>
  ))
  return (
    <div className="PhotographyWrapper" id="PhotographyWrapper">
      <div
        className="PhotographyBgImg"
        style={{ backgroundImage: `url(${currentImage})` }}
        id="BgImg"
      />
      <div className="Photography" id="PhotographyDiv">
        <PhotographyHeader
          id="PhotographyHeader"
          natureOnClick={handleNatureOnClick}
          humanOnClick={handleHumanOnClick}
          abstractOnClick={handleAbstractOnClick}
          architectureOnClick={handleArchitectureOnClick}
          textContext={props.textContext}
          engOnClick={props.engOnClick}
          plOnClick={props.plOnClick}
        />

        <div className="ImageDisplay">
          <img src={currentImage} alt="" id="MainImage" />
        </div>
        <div
          className="ImagesContainerWrapper"
          style={{ width: isBiggerThanFHD() ? width : null }}
        >
          <button onClick={decrementOnClick} className="PrevImgBtn">
            <img src={ArrowLeft} alt="" />
          </button>
          <div className="ImagesContainer" id="ImagesContainer">
            {natureImages}
          </div>
          <button onClick={incrementOnClick} className="NextImgBtn">
            <img src={ArrowRight} alt="" />
          </button>
        </div>

        <div className="nextPageBtnPhoto" onClick={handleOnClick}>
          <span>{props.textContext.Photography.NextPageBtn}</span>
          <img src={Triangle} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Photography
