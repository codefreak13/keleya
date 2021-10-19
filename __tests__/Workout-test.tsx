import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { Workout } from '../src/screens';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}));

const createTestProps = (props: Object) => ({
    navigation: {
        navigate: jest.fn()
    },
    ...props
});

it('Workout snapshot', () => {
    let props: any = createTestProps({});
    const snap = renderer.create(
        <Workout {...props} />
    ).toJSON();
    expect(snap).toMatchSnapshot()
})