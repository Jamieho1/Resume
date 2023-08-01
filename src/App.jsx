// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Projects from './projects_info/Projects';
import Equity_Investment_Analysis_Platform from './projects_info/Equity_Investment_Analysis_Platform';
import NLP_Translator_ML from './projects_info/NLP_Translator_ML';
import Optiver_Market_Making_Challenge from './projects_info/Optiver_Market_Making_Challenge';
import Cloud_Resume from './projects_info/Cloud_Resume';
import Auto_Image_Processing_and_Jig_System from './projects_info/Auto_Image_Processing_and_Jig_System';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/equity_investment_analysis_platform" element={<Equity_Investment_Analysis_Platform />} />
          <Route path="/nlp_translator_ml" element={<NLP_Translator_ML />} />
          <Route path="/optiver_market_making_challenge" element={<Optiver_Market_Making_Challenge />} />
          <Route path ='/Cloud_Resume' element={<Cloud_Resume />} />
          <Route path ='/Auto_Image_Processing_and_Jig_System' element={<Auto_Image_Processing_and_Jig_System />} />
          <Route path="/" element={<Works />} />
        </Routes>
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
