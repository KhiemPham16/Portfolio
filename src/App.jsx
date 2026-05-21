//Component
import Footer from './components/Footer';
import Header from './components/Header';
// Link Page
import About from './components/About';
import Projects from './components/Projects';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
