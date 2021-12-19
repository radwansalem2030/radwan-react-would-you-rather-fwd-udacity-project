import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

export class ErrorPage extends Component {
  render() {
    return (
      <Container textAlign="center">
        <Header as="h3">No Data Match 404 Error</Header>
        <p>Nothing to see here. Please use the menu to try again.</p>
      </Container>
    );
  }
}

export default ErrorPage;
