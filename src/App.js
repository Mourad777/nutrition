import { NavLink, BrowserRouter, useHistory, Route, Switch, Redirect } from 'react-router-dom';
import { links } from './links'
import Blog from './Pages/Blog';
import Consultation from './Pages/Consultation';
import Contact from './Pages/Contact';
function App({ }) {
  console.log('links: ', links)
  const history = useHistory()
  return (
    <BrowserRouter history={history}>
      <div className="App">

        <ul style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          textDecoration: 'none',
          listStyleType: 'none'
        }}>
          {
            links().map(route => <NavLink exact to={route.path} >
              {route.name}
            </NavLink>)
          }

        </ul>
      </div>
      <Switch>
        <Route exact path="/consultation" component={Consultation} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
