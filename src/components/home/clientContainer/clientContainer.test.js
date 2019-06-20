import React from 'react';
import ClientContainer from './index';
import { shallow } from 'enzyme';


describe('Client Container', () => {
    it('renders correctly', () => {
        const clients = ['client A', 'client B'];
        const actions = { loadClients: jest.fn() }

        const wrapper = shallow(
            <ClientContainer
                clients={clients}
                actions={actions}
            />
        )

        expect(wrapper).toMatchSnapshot();
    })
})