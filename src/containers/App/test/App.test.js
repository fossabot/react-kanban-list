import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import App from '../App';

import { configureStore } from '../../../store/configureStore';

describe('App', () => {
  const store = configureStore({});

  it('should mount', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(wrapper).not.toBeNull();
  });
});
