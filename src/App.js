import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './page/Home';
import Category from './page/Category'
import Detail from './page/detail/Detail'

function App() {
  const navRoutes = [
    {path: '/', element: <Home/>},
    {path: '/:category', element: <Category/>},
    {path: '/:category/:id', element: <Detail/>},
    {path: '/:category/search/:keyword', element: <Category/>},
  ]

  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route>
            {navRoutes.map((item,index)=>(<Route key={index} path={item.path} element={item.element}></Route>))}
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
