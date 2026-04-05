import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Audio from './pages/Audio'
import Video from './pages/Video'
import Contact from './pages/Contact'
import AppLayout from './appLayout/AppLayout'
import Trainer from './pages/Trainer'
import Classes from './pages/Classes'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/about',
          children: [
            { path: '/about', element: <About /> },
            { path: '/about/trainer', element: <Trainer /> },
          ]
        },
        {
          path: '/media',
          children: [
            { path: '/media', element: <Classes/> },
            { path: '/media/audio', element: <Audio /> },
            { path: '/media/video', element: <Video /> },
          ]
        },
        { path: '/blog', element: <Blog /> },
        { path: '/contact', element: <Contact /> },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
