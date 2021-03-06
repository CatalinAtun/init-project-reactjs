import { Container, Row, Col, Button, FormControl } from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavbarTop } from '../../components';
import './style.scss';
import { signUpRequest } from '../../actions/auth';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'ncofre@nnodes.com',
      password: '123123123',
      passwordConfirmation: '123123123'
    };
  }

  handleCreateAccount = () => {
    const { email, password, passwordConfirmation } = this.state;
    if (email === '' || password === '' || passwordConfirmation === '') {
      alert('Faltan datos');
    } else {
      this.signUpAsync();
    }
  };

  signUpAsync = async () => {
    const { dispatch } = this.props;
    const { email, password, passwordConfirmation } = this.state;
    dispatch(
      signUpRequest({
        user: { email, password, password_confirmation: passwordConfirmation }
      })
    );
  };

  render() {
    const { email, password, passwordConfirmation } = this.state;
    return (
      <Container fluid>
        <Row>
          <Col>
            <NavbarTop />
          </Col>
        </Row>
        <Row className="justify-content-center login">
          <Col md={4} className="form-login">
            <h4>CREAR CUENTA</h4>
            <FormControl
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
            <FormControl
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <FormControl
              type="password"
              placeholder="Confirmar Contraseña"
              value={passwordConfirmation}
              onChange={e =>
                this.setState({ passwordConfirmation: e.target.value })
              }
            />
            <Button onClick={this.handleCreateAccount}>Crear Cuenta</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { ongoingRequest, signedIn } = state.auth;
  return {
    ongoingRequest,
    signedIn
  };
};

export default withRouter(connect(mapStateToProps)(Register));
