import './i18n';

import { Navbar } from './components/Navbar';
import { Hero } from './pages/Hero';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Products } from './pages/Products';
import { Services } from './pages/Services';

function App() {
  return (
    <div className="min-h-screen page-bg">
      {/* Animated background elements */}
      <Navbar />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
    </div>
  );
}

export default App;
