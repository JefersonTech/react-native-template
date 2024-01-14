import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";

import { useCommonAppbarOptions } from "../../../../shared/infrastructure/hooks";
import { __templateNameToPascalCase__ScreenNames } from "../../enums";
import { __templateNameToPascalCase__ } from "../../screens";

import { __templateNameToPascalCase__ParamList } from "./props";

const __templateNameToPascalCase__ =
  createStackNavigator<__templateNameToPascalCase__ParamList>();

export function __templateNameToPascalCase__Stack() {
  const commonAppbarOptions = useCommonAppbarOptions();

  const commonAppOptions: StackNavigationOptions = {
    ...commonAppbarOptions,
  };

  const specificAppOptions: Record<string, StackNavigationOptions> = {};

  const mergedOptions = (
    screenName: keyof typeof __templateNameToPascalCase__ScreenNames,
  ) => ({
    ...commonAppOptions,
    ...(specificAppOptions[screenName] ?? {}),
  });

  return (
    <__templateNameToPascalCase__.Navigator screenOptions={commonAppOptions}>
      <__templateNameToPascalCase__.Screen
        name={__templateNameToPascalCase__ScreenNames.__templateName__}
        component={__templateNameToPascalCase__}
        key={__templateNameToPascalCase__ScreenNames.__templateName__}
        options={({ route }) => mergedOptions(route.name)}
      />
    </__templateNameToPascalCase__.Navigator>
  );
}
