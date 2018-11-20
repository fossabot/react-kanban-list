import React from 'react';
import PropTypes from 'prop-types';

import { Header, Navigation } from '../index';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      <Navigation />
      <main>
        { children }
      </main>
    </div>
  );
};

MainLayout.propTypes = { children: PropTypes.object.isRequired };

export default MainLayout;
