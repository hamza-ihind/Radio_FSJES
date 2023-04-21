import { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons, images } from "../../constants";
import styles from "./PopularPodsCard.style";

const PopularPodsCard = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={images.profile} style={styles.logoImage} />
        <TouchableOpacity style={styles.logoIcon} onPress={handleClick}>
          {liked ? (
            <Image source={icons.heartfilled} style={styles.icon} />
          ) : (
            <Image source={icons.heart} style={styles.icon} />
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.podcastName}>
        Human and nature
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoItem}>By FSJES</Text>
        <Text style={styles.infoItem}>09:45</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularPodsCard;
