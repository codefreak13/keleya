import 'react-native'
import React from 'react';
import renderer from 'react-test-renderer';
import { Success } from '../src/screens';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: any) => key })
}));

it('Success snapshot', () => {
    const snap = renderer.create(
        <Success />
    ).toJSON();
    expect(snap).toMatchSnapshot()
})