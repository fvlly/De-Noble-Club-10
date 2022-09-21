import { BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Awareness from './components/Awareness'
import Contact from './components/Contact'
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