import { Animated, Text } from "react-native";
import { TooltipProps } from "./types";
import { styles } from "./styles";
import { useTooltip } from "./hooks/use-tooltip";

export function Tooltip({ message, duration = 3000 }: TooltipProps) {
  const { topOffset } = useTooltip({ duration });
  return (
    <Animated.View style={[styles.tooltip, { top: topOffset }]}>
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}
