import './App.css'
import BasicForm from './components/BasicForm/BasicForm'
import TheTop from './components/the top section/TheTop'


function App() {
  

  return (
    <>

    <TheTop/> 
    <div className='position'>
      <div>
        <div className='app'>
          <BasicForm/>
        </div>
      </div>
      <img className='img' src="/src/assets/image.jpg" alt="" />
    </div>
    

    <p className='bottom'>ChronoX @2025</p>
    </>

  
  )
}

export default App
