// import React from 'react';
// import './App.css';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Trending from './Pages/Trending/Trending';
// import Movies from './Pages/Movies/Movies';
// import Search from './Pages/Search/Search';
// import Series from './Pages/Series/Series';
// import Header from './components/Header/Header';
// import SimpleBottomNavigation from './components/MainNav';
// import { Container} from '@material-ui/core';

// function App() {
//   return (
//     <BrowserRouter>
//     <Header />
//     <div className="app">
//     <Container>
//       <Routes> 
//         <Route path='/' element={<Trending/>}/>
//         <Route path='/movies' element={<Movies/>}/>
//         <Route path='/series' element={<Series/>}/>
//         <Route path='/search' element={<Search/>}/>
//       </Routes>
//     </Container>
//     </div>
//     <SimpleBottomNavigation />
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;