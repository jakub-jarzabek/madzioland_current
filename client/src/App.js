import './Styles/App.scss';

import {Switch, Route} from 'react-router-dom'
import {Home} from "./Components/Home.jsx"
import {Portfolio} from "./Components/Portfolio.jsx"
import {NoMatch} from './Components/NoMatch.jsx'
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useLocation} from "react-router";
import {useEffect, useState} from "react";
import polish from './LanguageFiles/Polish.json'
import english from './LanguageFiles/English.json'
function App() {
  const location = useLocation()
    // true == polish
    const [language, setLanguage] =useState(true)
    const [translation, setTranslation]= useState(polish)
    useEffect(()=>{
        if(language){
            setTranslation(polish)
        }
        else{
            setTranslation(english)
        }

    },[language])

    const handleEngOnClick= ()=>{
      setLanguage(false)
      }
    const handlePlOnClick= ()=>{
  setLanguage(true)
  }
  return (

    <div className="App">
      <TransitionGroup>
        <CSSTransition
            timeout={2000}
            classNames='fade-router'
            key={location.key}
        >
      <Switch location={location}>
        <Route exact path="/" >
          <Home engOnClick={handleEngOnClick} plOnClick={handlePlOnClick} textContext={translation}/>
        </Route>
        <Route path="/Portfolio">
          <Portfolio engOnClick={handleEngOnClick} plOnClick={handlePlOnClick} textContext={translation}/>
        </Route>
        <Route>
          <NoMatch/>
        </Route>
      </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>

  );
}

export default App;
