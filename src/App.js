import TextList from "./components/TextList";
import TextDetail from "./components/TextDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="ui raised very padded text container segment">
        <Routes>
          <Route path="/" element={<TextList />} />
          <Route path="/posts/:id" element={<TextDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
