import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { useCommonAppbarOptions } from "../../../../shared/infrastructure/hooks";
import { __templateNameToPascalCase__ScreenNames } from "../../enums";
import { __templateNameToPascalCase__ } from "../../screens";

import { __templateNameToPascalCase__ParamList } from "./props";

const Stack = createStackNavigator<__templateNameToPascalCase__ParamList>();

export function __templateNameToPascalCase__Stack() {
  const commonAppbarOptions = useCommonAppbarOptions();

  const commonAppOptions: StackNavigationOptions = {
    ...commonAppbarOptions,
  };

  const specificAppOptions: Record<string, StackNavigationOptions> = {};

  const mergedOptions = (
    screenName: __templateNameToPascalCase__ScreenNames,
  ) => ({
    ...commonAppOptions,
    ...(specificAppOptions[screenName] ?? {}),
  });

  return (
    <Stack.Navigator screenOptions={commonAppOptions}>
      <Stack.Screen
        name={
          __templateNameToPascalCase__ScreenNames.__templateNameToConstantCase__
        }
        component={__templateNameToPascalCase__}
        key={
          __templateNameToPascalCase__ScreenNames.__templateNameToConstantCase__
        }
        options={({ route }) => mergedOptions(route.name)}
      />
    </Stack.Navigator>
  );
}
