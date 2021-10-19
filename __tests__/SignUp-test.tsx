import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { SignUp } from '../src/screens';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}));

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

it('SignUp snapshot', () => {
    let props: any = createTestProps({});
    const snap = renderer.create(
        <SignUp {...props} />
    ).toJSON();
    expect(snap).toMatchSnapshot()
})