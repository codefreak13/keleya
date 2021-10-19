import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { Name } from '../src/screens';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}));

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

it('Name snapshot', () => {
    let props: any = createTestProps({});
    const snap = renderer.create(
        <Name {...props} />
    ).toJSON();
    expect(snap).toMatchSnapshot()
})