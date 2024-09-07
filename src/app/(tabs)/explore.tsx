
import { Image } from "@components";
import { config } from "@config";
import { styles } from "@themes";
import { View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View
      style={[styles.flex, styles.items_center, styles.justify_center]}
    >
      <Image source={config.PHOTO_URL} square={160} borderRadius={12} placeholderContentFit="contain" />
    </View>
  );
}
