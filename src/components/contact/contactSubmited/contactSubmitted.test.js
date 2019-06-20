import React from 'react';
import { shallow } from 'enzyme';

import ContactSubmited from './index';

describe('Contact Submitted', () => {
    let wrapper;

    beforeAll(() => {
        wrapper = shallow(
            <ContactSubmited />
        );
    })

    it('should render matching snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})