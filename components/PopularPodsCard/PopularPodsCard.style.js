import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: 250,
    marginTop: SIZES.small,
    backgroundColor: "rgba(201, 167, 235, 0.6)",
    padding: SIZES.large,
    borderRadius: SIZES.medium,
  },
  logoContainer: {
    alignItems: "center",
    position: "relative",
  },
  logoImage: {
    width: 210,
    height: 210,
  },
  logoIcon: {
    position: "absolute",
    width: 25,
    height: 25,
    top: 10,
    right: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  podcastName: {
    paddingTop: SIZES.xSmall,
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoItem: {
    marginTop: SIZES.small,
    fontFamily: FONT.book,
    color: COLORS.secondary,
  },
});

export default styles;
