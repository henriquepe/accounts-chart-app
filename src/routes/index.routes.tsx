import { AccountChartRegistrationScreen } from "@pages/AccountChartRegistration";
import { HomeScreen } from "@pages/Home";
import { Modal } from "@components/Modal";

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const Router = () => {
  const stackNavigationOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      screenOptions={stackNavigationOptions}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="AccountChartRegistration"
        component={AccountChartRegistrationScreen}
      />
    </Stack.Navigator>
  );
};
