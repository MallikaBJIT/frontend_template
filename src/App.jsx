import Appointment from "./component/appointment";
import SearchPage from "./component/search";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VideoConference from "./page/videoCall";

function App() {
  return (
    <>
      <Appointment />
      <SearchPage />
      <Router>
        <Routes>
          <Route path="/call" element={<VideoConference />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
