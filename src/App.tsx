import Header from './components/Header';
import Hero from './components/Hero';
import TransformationPipelines from './components/TransformationPipelines';
import HowItWorks from './components/HowItWorks';
import ProjectTimeline from './components/ProjectTimeline';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Guarantees from './components/Guarantees';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TransformationPipelines />
        <HowItWorks />
        <ProjectTimeline />
        <Services />
        <TechStack />
        <Guarantees />
        <Appointment />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
