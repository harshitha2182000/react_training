import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reactions } from './LikeComponent/Reactions';
import './index.css';
import App,{C1,C2} from './App';
import {Notebook, Pages} from './Notebook/Notebook.component'
import reportWebVitals from './reportWebVitals';
import { StickyNotes } from './StickyNotes/StickyNotes';
import '../src/StickyNotes/StickyNotes.css'
import { Logger } from './Loggincomponent/Loggingcomponent';
import { UseToogleHookComponent } from './Customehooks/UseToggleComponent';
import { UseDynamicToggle } from './Customehooks/UseToggleComponent';
import { RefL1 } from './RefsComponent/Refs.component';
import { SimpleList } from './ListOfComponents/listL1.component';
import { UseSpreadOperator } from './ListOfComponents/listL1.component';
import { Validators } from './FormValidationComponent/FormValidator.componet';
import { StickyNotesContainer } from './StickyNotes/StickyNotesContainer';
import { Promises } from './HttpOperations/Promises.component';
import { Main } from './Main/Main.component';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    <Main/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
