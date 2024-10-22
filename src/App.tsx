import { Routes, Route } from "react-router-dom";

import Main from "./layout/Main";
import PhotoList from "./pages/PhotoList";
import DetailPhoto from "./pages/DetailPhoto";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/photos">
            <Route index element={<PhotoList />} />
            <Route path="/photos/:id" element={<DetailPhoto />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
