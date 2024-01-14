import { StyleSheet } from "react-native";
import { useAppTheme } from "../../src/modules/shared/infrastructure/theme";

export function useStyles() {
  const { colors } = useAppTheme();

  return {
    colors,
    styles: StyleSheet.create({}),
    rxStyles: {},
  };
}
