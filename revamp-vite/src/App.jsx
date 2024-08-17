import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import BlogPage from './pages/Blogs2/BlogPage2';
import FroSharePage from './pages/FroShare/FroSharePage';
import Footer from './components/Footer';
import AboutUs from './pages/About/About';
import MetaPixel from './tracking/MetaPixel';
import BlogPageSlug from './pages/Blogs2/BlogPageSlug';
import LearnMore from './pages/LearnMore/LearnMore';




function App() {
  return (
    <div className="min-h-screen min-w-full bg-black overflow-x-hidden">
      <Navbar />
      <MetaPixel />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogPageSlug />} />
        <Route path="/froshare" element={<FroSharePage />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



