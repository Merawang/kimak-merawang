import { Outlet } from 'react-router-dom';

// Components
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <div className="h-screen container mx-auto">
        <Navbar />
        <div className="main-section px-6 pt-32 pb-12">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
