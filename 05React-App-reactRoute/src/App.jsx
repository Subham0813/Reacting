
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      {/*navbar will appear always in our page */}
      <Navbar />

      {/* Outlet is a bunch of componet which will render inside our App component. 
     For here, all that routes which we will tends to go by clicking navbar elements or other elements in our page , which is Child component of our App component*/}
      <Outlet />
    </>
  );
}

export default App
