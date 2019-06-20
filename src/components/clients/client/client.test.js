import React from 'react';
import { shallow } from 'enzyme';

import Client from './index';
import { Style } from 'radium'

const clientProp = {
    "name": "Branthill Computing",
    "jobTitle": "Front End Developer",
    "when": "Apr 2018 - Present",
    "summary": "Green field application development for inventory Management, forecasting, demand planning and inventory control",
    "projectStyle": "Agile",
    "testTech": ["Jest"],
    "technologies": [
        {
            "isBackEnd": false,
            "text": "Vue Js",
            "link": "//vuejs.glennpacker.net/"
        }, {
            "isBackEnd": false,
            "text": "JSON"
        }, {
            "isBackEnd": true,
            "text": "SQL"
        }
    ]
}

describe('client', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Client client={clientProp} index={0} />);
    })

    it('should render', () => {
        expect(wrapper).not.toBeNull()
        expect(wrapper.find('.col-4').length).toBe(1)
    })

    it('should not render when there is no client', () => {
        wrapper = shallow(<Client />);
        expect(wrapper.find('.col-4').length).toBe(0)
    })

    it('should have styles from radium', () => {
        expect(wrapper.find(Style)).not.toBeNull();
    })

    it('should use a colour of success when index is 0', () => {
        expect(wrapper.find('.bg-success').length).toBe(1)
    })

    it('should use a colour of danger when index is 1', () => {
        wrapper = shallow(<Client client={clientProp} index={1} />);
        expect(wrapper.find('.bg-danger').length).toBe(1)
    })

    it('should use a colour of primary when index is 2', () => {
        wrapper = shallow(<Client client={clientProp} index={2} />);
        expect(wrapper.find('.bg-primary').length).toBe(1)
    })

    it('should use a border colour of success when index is 0', () => {
        expect(wrapper.find('.border-success').length).toBe(1)
    })

    it('should use a border colour of danger when index is 1', () => {
        wrapper = shallow(<Client client={clientProp} index={1} />);
        expect(wrapper.find('.border-danger').length).toBe(1)
    })

    it('should use a border colour of primary when index is 2', () => {
        wrapper = shallow(<Client client={clientProp} index={2} />);
        expect(wrapper.find('.border-primary').length).toBe(1)
    })

    it('should display expansion button', () => {
        expect(wrapper.find('.fa-caret-down').length).toBe(1)
    })

    it('should show the expansion on click', () => {
        wrapper.find('.card').simulate('click')
        expect(wrapper.containsMatchingElement(<dt>Agile</dt>)).toBe(true)
    })

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})