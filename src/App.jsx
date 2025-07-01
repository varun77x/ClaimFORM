import { useState } from 'react'
import Second from './components/Second';
import First from './components/First';
import ClaimForm from './components/ClaimForm';


function App() {
  const arr = [<First />,<Second />];
  const [index,setIndex] = useState(0);

  return (
    <>
     <div class=" h-screen w-screen bg-pink-900">
     <ClaimForm />
     </div>
    </>
  )
}

export default App
