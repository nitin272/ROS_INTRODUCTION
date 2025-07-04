import { Layout } from './components/layout';
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
// import BlogPage from './pages/blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
