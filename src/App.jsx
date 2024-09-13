import { useState, Suspense } from 'react';
import './App.css'
import PostsReact19 from './components/api-fetch-react-19'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<p>Loading...</p>}>
    <div>
      <h1>React 19 Tutorials</h1>
      <h2>use() API</h2>
      <PostsReact19 />
    </div>
  </Suspense>
  )
}

export default App
