import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import Explore from "./Pages/Explore";
import Matches from "./Pages/matches/Matches";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/matches" element={<Explore />} />
          <Route path="/matches/:match_id" element={<Matches />} />
          <Route path="*" element={<h1>No Page</h1>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App