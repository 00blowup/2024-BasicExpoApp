import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options = {{ title: 'Home' }}/>
      <Stack.Screen name="mul" options = {{ title: '구구단' }}/>
    </Stack>
  );
}
