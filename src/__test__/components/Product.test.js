import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
    test('Producto render component ', () => {
        const product  = shallow(
            <ProviderMock>
                <Product>

                </Product>
            </ProviderMock>
        );
        expect(product.length).toEqual(1);
    });
    test('Test Buy Button ', () => {
        const handleAddToCart = jest.fn();
        const wrapper = mount(
            <ProviderMock>
                <Product product={ProductMock} 
                handleAddToCart={handleAddToCart}>

                </Product>
            </ProviderMock>
        );
        wrapper.find('button').simulate('click');
        expect(handleAddToCart).toHaveBeenCalledTimes(1);
    });
});

