import React from 'react';
import { mount } from 'enzyme';

import InputEditable from '../InputEditable';

describe('InputEditable', () => {
  it('should mount', () => {
    const wrapper = mount(<InputEditable />);

    expect(wrapper).not.toBeNull();
  });
});
