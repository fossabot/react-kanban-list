import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import Navigation from '../Navigation';

describe('Navigation', () => {
  it('should mount', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    expect(wrapper).not.toBeNull();
  });
});
