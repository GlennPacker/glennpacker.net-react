import React from 'react';
import { shallow } from 'enzyme';

import ContactForm from './index';

describe('Contact Form', () => {
    let wrapper;
    const mockSubmit = jest.fn();
    const mockFieldChange = jest.fn();

    beforeAll(() => {
        const contactDetails = {
            name: 'john',
            email: "email",
            message: "message"
        }



        wrapper = shallow(
            <ContactForm
                contactDetails={contactDetails}
                submitForm={mockSubmit}
                onFieldChange={mockFieldChange}
                sending={false}
            />
        );
    })

    it('should render matching snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})