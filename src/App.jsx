import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <div className='flex flex-col text-center'>
            <p className='text-off-grey font-sfmono text-[14px] pb-5'>V3 rebuilt with 3D Animations.</p>
          </div>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
