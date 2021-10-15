import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ThemeProvider from '../utils/theme';

import {
  Intro,
  SignIn,
  SignUp,
  Name,
  DueDate,
  WorkoutTimes,
  Notification
} from '../screens'

export type MainStackParamList = {
  Intro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Name: undefined;
  DueDate: undefined;
  WorkoutTimes: undefined;
  Notification: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

export default function App() {

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      // let userToken: any;

      // try {
      //   userToken = await AsyncStorage.getItem('token');
      //   userToken && dispatch(persist());
      // } catch (e) { }
    };
    bootstrapAsync();
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <MainStack.Navigator
          initialRouteName="Intro"
          screenOptions={{
            headerShown: false,
            headerStyle: { elevation: 0 },
            cardStyle: { backgroundColor: 'white' },
          }}>
          <MainStack.Screen name="Intro" component={Intro} />
          <MainStack.Screen name="SignIn" component={SignIn} />
          <MainStack.Screen name="SignUp" component={SignUp} />
          <MainStack.Screen name="Name" component={Name} />
          <MainStack.Screen name="DueDate" component={DueDate} />
          <MainStack.Screen name="WorkoutTimes" component={WorkoutTimes} />
          <MainStack.Screen name="Notification" component={Notification} />
        </MainStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
