import { BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
        <Router>
          <Header />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/projects' component={Projects} /> */}
          {/* <Route path='/awareness' component={Awareness} /> */}
          <Footer />
        </Router>
    )
}

export default App