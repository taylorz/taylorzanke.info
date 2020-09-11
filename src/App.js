import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import './styles/styles.scss';
import Home from './pages/Homepage/Homepage';
import './App.css';

const routes = [
  { path: '/', name: 'Home', Component: Home },
]

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
          <Route render={({location}) => {
            const { key } = location
            return (
              <>
                <TransitionGroup component={null}>
                  <CSSTransition
                    key={key}
                    appear={true}
                    classNames="my-node"
                    timeout={{enter: 1000, exit: 500}}
                  >
                    <Switch location={location}>
                      {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                          {({ match }) => (
                            <div className="my-node">
                              <Component />
                            </div>
                          )}
                        </Route>
                      ))}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </>
            )
          }}/>
        </Router>
      </div>
    );
  }
}

export default App;
