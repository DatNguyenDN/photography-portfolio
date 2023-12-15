import Home from './components/pages/Home'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'

import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
const AppRoutes = () => {
  const location = useLocation();

    return(
       <AnimatePresence initial={true} mode=''wait>
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
       </AnimatePresence>
    )
}

export default AppRoutes;