import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/UncontroledAccordion";
import {RatingValueType, UncontrolledRating} from "./components/Rating/UncontroledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    console.log('rendering')

    let [ratingValue, setratingValue] = useState<RatingValueType>(1)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    return (

        <div>

            Article 1
            <UncontrolledRating value={ratingValue} onClick ={setratingValue}/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                        />

            Article 2


            <OnOff />
            <OnOff />

          </div>
    );
}


export default App;
