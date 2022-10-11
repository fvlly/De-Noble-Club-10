import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import ErrorFallback from "./components/ErrorBoundary";

const lazyAbout = lazy(() => import("./components/pages/About"));
const lazyProjects = lazy(() => import("./components/pages/Projects"));
const lazyAwareness = lazy(() => import("./components/pages/Awareness"));
const lazyContact = lazy(() => import("./components/pages/Contact"));

const App = () => {
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{
        window.location.reload()
      }} >
        <Header />
        <Suspense fallback="Loading...">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={lazyAbout} />
          <Route path="/projects" component={lazyProjects} />
          <Route path="/awareness" component={lazyAwareness} />
          <Route path="/contact" component={lazyContact} />
        </Suspense>
        <Footer />
      </ErrorBoundary>
    </Router>
  );
};

export default App;
