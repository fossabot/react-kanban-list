import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import LayoutRouter from '../LayoutRouter';

import { MainLayout } from '../../index';
import HomePage from '../../../../containers/HomePage/HomePage';
import { configureStore } from '../../../../store/configureStore';

describe('LayoutRouter', () => {
  const store = configureStore({});

  it('should mount', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <LayoutRouter
            exact
            path="/"
            layout={MainLayout}
            component={HomePage}
          />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper).not.toBeNull();
  });
});
