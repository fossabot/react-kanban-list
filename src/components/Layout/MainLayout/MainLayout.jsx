import React from 'react';
import PropTypes from 'prop-types';

import { Navigation } from '../index';

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Navigation />
      <main>
        { children }
      </main>
    </div>
  );
};

MainLayout.propTypes = { children: PropTypes.object.isRequired };

export default MainLayout;
