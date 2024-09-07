import React from "react";
import { Stack } from "expo-router";

export const AppStack = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="details" />
      <Stack.Screen name="add-cart/index" />
      <Stack.Screen
        name="settings/index"
        options={{
          headerTitle: "Settings",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
};