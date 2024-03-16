
import './App.css'
import Banner from './Banner'
import Navbar from './Navbar'
function App() {
  

  return (
    <div>
      <div className='container mx-auto mt-5 w-10/12'>
        <Navbar></Navbar>
      </div>
      <div className='container mx-auto mt-5 w-10/12'>
        <Banner></Banner>
      </div>
    </div>
  )
}

export default App
