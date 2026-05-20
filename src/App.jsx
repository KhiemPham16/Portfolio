import { Routes, Route } from 'react-router-dom';
//Component
import Footer from './components/Footer';
import Header from './components/Header';
// Link Page
import About from './Pages/About';
import Contact from './Pages/Contact';
import CV from './Pages/CV';
import Projects from './Pages/Projects';

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}
