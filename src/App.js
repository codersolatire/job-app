// import Header from './Component/Header';
import Home from './Component/Home/index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Assets/scss/style.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header/>}> */}
            <Route path="/" element={<Home/>} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
