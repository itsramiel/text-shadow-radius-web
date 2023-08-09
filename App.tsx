import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const radius = useSharedValue(0);

  useEffect(() => {
    radius.value = withRepeat(
      withSequence(
        withTiming(10, { duration: 500 }),
        withTiming(0, { duration: 500 })
      ),
      -1,
      true
    );
  }, []);

  const rStyles = useAnimatedStyle(() => {
    return {
      textShadowColor: "rgba(255, 0, 0, 0.7)",
      textShadowRadius: radius.value,
      textShadowOffset: { height: 0, width: 0 },
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text style={rStyles}>
        Open up App.tsx to start working on your app!
      </Animated.Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
