import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingSection from './components/LandingSection/LandingSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import ContactMeSection from './components/ContactMeSection/ContactMeSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <ProjectSection />
      <ContactMeSection />
      <Footer />
    </div>
  )
}

export default App
