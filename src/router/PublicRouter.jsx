import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Item, NotFound, Productos } from '../pages';
import { NavBar } from '../components';
export const PublicRouter = ()=>{
    
    return(
        <Router>
            <NavBar/>
                <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/productos' element={<Productos/>}/>
                <Route exact path='/item/:id' element={<Item/>}/>
                <Route exact path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}