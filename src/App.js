import "./App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import InfoLayout from "./Layout/infoLayout";
import HomePage from "./Page/HomePage/HomePage";
import ContactPage from "./Page/ContactPage/ContactPage";
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout Component={HomePage} />} />
          <Route
            path='/info'
            element={<InfoLayout Component={ContactPage} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
