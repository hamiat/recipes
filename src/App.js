import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {createUseStyles} from 'react-jss'
import Create from './create/Create'
import Home from './home/Home'
import Recipe from './recipe/Recipe'

const useStyles = createUseStyles({
 
})


function App() {
  const classes = useStyles()
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
      <Home />
      </Route>
      <Route exact path="/create">
      <Create/>
      </Route>
      <Route exact path="/search">
      <Create/>
      </Route>
      <Route exact path="/recipe">
      <Recipe/>
      </Route>
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App
