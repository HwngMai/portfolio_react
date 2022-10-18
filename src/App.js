import "./App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from "./Page/HomePage/HomePage";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
