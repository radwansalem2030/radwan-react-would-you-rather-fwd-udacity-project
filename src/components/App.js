import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/*There is a references inside ReadMe file for using this element from semantic css*/
import { Grid } from 'semantic-ui-react';
import { handleInitialData } from '../actions/shared';
import { connect } from 'react-redux';
import LoginComp from './LoginComp';
import NavBar from './NavBar';
import HomePage from './HomePage';
import UserDataCard from './UserDataCard';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import ErrorPage from './ErrorPage';


class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <LoginComp />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <NavBar />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/questions/bad_id" component={ErrorPage} />
                  <Route path="/questions/:question_id" component={UserDataCard} />
                  <Route path="/add" component={NewPoll} />
                  <Route path="/leaderboard" component={Leaderboard} />
                  <Route component={ErrorPage} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authUser }) {
  return {
    authUser
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
