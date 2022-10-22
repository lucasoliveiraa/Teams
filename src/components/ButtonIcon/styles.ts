import styled, { css } from "styled-components/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type ButtonTypeStylesProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStylesProps;
};

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
}))``;
