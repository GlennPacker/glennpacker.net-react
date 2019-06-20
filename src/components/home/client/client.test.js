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
        wrapper = shallow(<Client client={clientProp} />);
    })

    it('should render', () => {
        expect(wrapper).not.toBeNull();
    })

    it('should not render anything when there is no client', () => {
        wrapper = shallow(<Client />);
        expect(wrapper.find(Style).length).toBe(0);
    })

    it('should have styles from radium', () => {
        expect(wrapper.find(Style).length).toBe(1);
    })

    it('should display not display the expansion by default (state test)', () => {
        expect(wrapper.state('expanded')).toBe(false)
    })

    it('should display not display the expansion by default (html test)', () => {
        expect(wrapper.containsMatchingElement(<dt>Technolgies</dt>)).toBe(false)
    })

    it('should display expansion button', () => {
        expect(wrapper.find('.fa-caret-down').length).toBe(1)
    })

    it('should show the expansion on click', () => {
        wrapper.find('.fa-caret-down').simulate('click')
        expect(wrapper.containsMatchingElement(<dt>Technolgies</dt>)).toBe(true)
    })

    it('should hide the expansion on two clicks', () => {
        wrapper.find('.fa-caret-down').simulate('click')
        wrapper.find('.fa-caret-up').simulate('click')
        expect(wrapper.containsMatchingElement(<dt>Technolgies</dt>)).toBe(false)
    })

    describe('with client expanded', () => {
        beforeEach(() => {
            wrapper = shallow(<Client client={clientProp} />);
            wrapper.setState({ expanded: true })
        })

        it('should display expansion', () => {
            expect(wrapper.containsMatchingElement(<dt>Technolgies</dt>)).toBe(true)
        })

        it('should display the tech items', () => {
            expect(wrapper.containsMatchingElement(<span>JSON</span>)).toBe(true)
        })

        it('renders correctly', () => {
            expect(wrapper).toMatchSnapshot();
        })
    })
})