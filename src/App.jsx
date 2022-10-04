import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Awareness from './components/pages/Awareness'
import Contact from './components/pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
        <Router>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/awareness' component={Awareness} />
          <Route path='/contact' component={Contact} />
          <Footer />
        </Router>
    )
}

export default App