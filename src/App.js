// import Header from './Component/Header';
import Home from './Component/Home/index';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Assets/scss/style.scss';

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
