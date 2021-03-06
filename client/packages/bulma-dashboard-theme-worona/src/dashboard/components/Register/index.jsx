import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';

import * as deps from '../../deps';
import { validate } from './validate';

import Header from '../Header';
import Body from '../Body';
import Main from '../Main';
import Footer from '../Footer';
import FooterLinks from '../Footer/FooterLinks';
import Hero from '../../elements/Hero';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import Announcement from '../Announcement';

const submit = (values, dispatch) => {
  dispatch(deps.actions.createAccountRequested(values.name, values.email, values.password));
};

const Register = ({ t, handleSubmit, waiting, statusMessage, errorMessage }) => (
  <Body>
    <Header>
      <Hero
        title="Register"
        subtitle={
          <span>
            Welcome to Worona! Make your <strong>WordPress mobile-ready</strong> with a few clicks.
          </span>
        }
      />
    </Header>
    <Announcement />
    <Main>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <form onSubmit={handleSubmit(submit)}>
              <Field
                name="name"
                label="Name"
                component={Input}
                type="text"
                placeholder="Alan"
                icon="user"
                size="large"
              />

              <Field
                name="email"
                label="Email"
                component={Input}
                type="email"
                placeholder="alan@email.com"
                icon="envelope"
                size="large"
              />

              <Field
                name="password"
                label="Password"
                component={Input}
                type="password"
                placeholder="●●●●●●●●"
                icon="lock"
                size="large"
              />

              <br />

              <p>
                By creating an account you agree to our{' '}
                <a href="https://www.worona.org/terms" target="_blank" rel="noopener noreferrer">
                  Terms and Conditions.
                </a>
              </p>

              <br />
              <p className="control" />

              {statusMessage ? (
                <article className="message">
                  <div className="message-body has-text-centered">
                    <strong>{t(statusMessage)}</strong>
                  </div>
                </article>
              ) : null}

              {errorMessage ? (
                <article className="message is-danger">
                  <div className="message-body has-text-centered">
                    <strong>{t(errorMessage)}</strong>
                  </div>
                </article>
              ) : null}

              <div className="level">
                <div className="level-left">
                  <Button
                    color="primary"
                    size="large"
                    loading={waiting}
                    disabled={waiting}
                    type="submit"
                  >
                    Register
                  </Button>
                </div>

                <div className="level-right">
                  <Link to="/login">Already have an account? Login</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Main>

    <Footer>
      <FooterLinks />
    </Footer>
  </Body>
);

Register.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  waiting: React.PropTypes.bool,
  statusMessage: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
  errorMessage: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.bool]),
  t: React.PropTypes.func
};

const RegisterTranslated = translate('accounts')(Register);

const RegisterWithForm = reduxForm({
  form: 'register',
  validate,
  getFormState: state => state.theme.reduxForm
})(RegisterTranslated);

const mapStateToProps = state => ({
  waiting: deps.selectors.getIsCreatingAccount(state),
  statusMessage: deps.selectors.getCreateAccountStatus(state),
  errorMessage: deps.selectors.getCreateAccountError(state),
  initialValues: deps.selectors.getUrlQueries(state)
});

export default connect(mapStateToProps)(RegisterWithForm);
