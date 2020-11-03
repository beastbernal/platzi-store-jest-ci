import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header'

describe('<Header />', () => {
    const headerShallow = shallow(
        <ProviderMock>
            <Header/>
        </ProviderMock>
    ); 
    const headerMount = mount(
        <ProviderMock>
            <Header/>
        </ProviderMock>
    ); 

    test('Header Component Render', () => {
        expect(headerShallow.length).toEqual(1);
    });

    test('Title Render', () => {
        expect(headerMount.find('.Header-title').text()).toEqual('Platzi Store');
    });

});

describe('Header Snapshot ', () => {
    test('Check Header Snapshot ', () => {
        const header = create(
            <ProviderMock>
                <Header/>
            </ProviderMock>
        );
        expect(header.toJSON()).toMatchSnapshot();
    });
});