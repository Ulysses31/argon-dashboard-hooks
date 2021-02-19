import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
// reactstrap components
import { Container } from 'reactstrap';
// core components
import argonReact from '../assets/img/brand/argon-react.png';
import AdminFooter from '../components/Footers/adminFooter';
import AdminNavbar from '../components/Navbars/adminNavbar';
import Sidebar from '../components/Sidebar/sidebar';
import routes from '../routes.js';

export default function Admin(props) {
  const { location } = props;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, []);

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === '/admin') {
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

  const getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return 'Brand';
  };

  return (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: '/admin/index',
          imgSrc: argonReact,
          imgAlt: '...'
        }}
      />
      <div className='main-content'>
        <AdminNavbar
          {...props}
          brandText={getBrandText(location.pathname)}
        />
        <Switch>{getRoutes(routes)}</Switch>
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

Admin.propTypes = {
  location: PropTypes.object
};
