import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

import MainLayout from '../MainLayout';

describe('MainLayout', () => {
  it('should mount', () => {
    const wrapper = mount(
      <MemoryRouter>
        <MainLayout />
      </MemoryRouter>,
    );

    expect(wrapper).not.toBeNull();
  });
});
