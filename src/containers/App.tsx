import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import NoteListPage from "../components/Note/NoteListPage";
import About from "../components/About";
import Contacts from "../components/Contacts";
import AddNote from "../components/AddNote";
import "./App.css";
import NoteDetails from "../components/Note/NoteDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<NoteListPage />} />
            <Route path="home/:id" element={<NoteDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts/>} />
            <Route path="add" element={<AddNote />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
