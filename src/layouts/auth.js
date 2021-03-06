import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';
// core components
import AuthFooter from '../components/Footers/authFooter.js';
import AuthNavbar from '../components/Navbars/authNavbar';
import routes from '../routes.js';

export default function Auth() {
  useEffect(() => {
    document.body.classList.add('bg-default');
  }, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/auth') {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className='main-content'>
        <AuthNavbar />
        <div className='header bg-gradient-info py-7 py-lg-8'>
          <Container>
            <div className='header-body text-center mb-7'>
              <Row className='justify-content-center'>
                <Col lg='5' md='6'>
                  <h1 className='text-white'>Welcome!</h1>
                  <p className='text-lead text-light'>
                    Use these awesome forms to login or
                    create new account in your project for
                    free.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className='separator separator-bottom separator-skew zindex-100'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='fill-default'
                points='2560 0 2560 100 0 100'
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className='mt--8 pb-5'>
          <Row className='justify-content-center'>
            <Switch>{getRoutes(routes)}</Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}
