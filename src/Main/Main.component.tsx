import { BrowserRouter,Navigate,Route,Routes } from "react-router-dom";
import { Validators } from "../FormValidationComponent/FormValidator.componet";
import { Promises } from "../HttpOperations/Promises.component";
import { StickyNotesContainer } from "../StickyNotes/StickyNotesContainer";
import { Reactions } from "../LikeComponent/Reactions";
import { SimpleList } from "../ListOfComponents/listL1.component";
import { Notebook } from "../Notebook/Notebook.component";
import { RefL1 } from "../RefsComponent/Refs.component";
import { Home } from "../Home/Home.component";
import { Passparams } from "../UsingRouteParams/Passparams";
//acts like middleware.Used to integrate between 2 frameworks.
export function Main(){
     return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/login'/>} />
                <Route path='/login' element={<Validators/>}/>
                <Route path='/http' element={
                    (localStorage.getItem('userValidity')==undefined)?<Navigate to='/login'/>:<Promises/>
                }/>
                <Route path='/params/:name/:place/:animal/:thing' element={<Passparams/>}/>
                <Route path='/likes' element={<Reactions/>}/>
                <Route path='/StickyNotes' element={
                    (localStorage.getItem('userValidity')==undefined)?<Navigate to='/login'/>:<StickyNotesContainer/>
                }/>
                <Route path='/list' element={<SimpleList/>}/>
                <Route path='/notebook' element={<Notebook/>}/>
                <Route path='/refl1' element={<RefL1/>}/>
                <Route path='*' element={<><h1>Something is broken!!</h1></>}/>
                <Route path='/home' element={<Home/>}/>
                
            </Routes>

        </BrowserRouter>
     );
}