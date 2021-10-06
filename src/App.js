import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Footer from './components/footer';
import Home from './components/home';
import Navbar from './components/navbar';
function App() {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Switch>
      <Route path="/" component={Home}></Route>
    </Switch>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
