import { View, Text } from "react-native";

import styles from "./HomeText.style";
import { SIZES } from "../../constants";
import { FONT } from "../../constants/theme";

const HomeText = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: SIZES.xxLarge,
          fontFamily: FONT.bold,
          color: "white",
        }}
      >
        MY PODCASTS
      </Text>
      <Text
        style={{
          fontSize: SIZES.medium,
          fontFamily: FONT.book,
          color: "white",
        }}
      >
        Discover, listen and enjoy - all in Radio_FSJES
      </Text>
    </View>
  );
};

export default HomeText;
