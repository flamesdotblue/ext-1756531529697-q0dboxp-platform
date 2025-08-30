import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-teal-50 text-slate-900">
      <HeroSection />
      <FeaturesSection />
      <ScreenshotsSection />
      <Footer />
    </div>
  );
}

export default App;
