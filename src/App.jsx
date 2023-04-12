import { BrowserRouter } from 'react-router-dom';
import { Navbar, Hero, About, Experience, Works, Contact, StarsCanvas, SideIcons, SideEmail } from './components';

const App = () => {
  return (
    <div className='bg-primary'>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <div className='max-w-[1280px] my-0 mx-auto xs:px-0 sm:px-0 px-[80px]'>
          <Hero />
          <About />
          <Experience />
          <Works />
        </div>
        <div className='relative z-0'>
          <div className='max-w-[1280px] my-0 mx-auto xs:px-0 sm:px-0 px-[80px]'>
            <Contact />
          </div>
          <div className='flex flex-col text-center'>
            <p className='text-off-grey font-sfmono text-[12px] pb-5'>V3 rebuilt with 3D Animations.</p>
          </div>
          <StarsCanvas />
        </div>
      </BrowserRouter>
      <div className="xs:hidden sm:hidden flex fixed bottom-0 left-[5%] items-end">
        <SideIcons />
      </div>
      <div className="xs:hidden sm:hidden flex fixed bottom-0 right-[5%] items-end">
        <SideEmail />
      </div>
    </div>
  )
}

export default App;
