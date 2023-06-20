import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { UseTooltipProps } from "./types";

export function useTooltip({ duration }: UseTooltipProps) {
  const topOffset = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(topOffset, {
        toValue: 90,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.delay(duration),
      Animated.timing(topOffset, {
        toValue: -100,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [duration, topOffset]);

  return { topOffset };
}
