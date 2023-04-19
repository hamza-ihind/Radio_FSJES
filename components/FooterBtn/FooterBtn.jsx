import { Image, TouchableOpacity, Text } from "react-native";

import styles from "./Footer.style";

const FooterBtn = ({ iconUrl, dimension, handlePress, text }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default FooterBtn;
