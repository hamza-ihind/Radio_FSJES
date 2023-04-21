import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: "white",
  },
  headerBtn: {
    fontSize: SIZES.medium,
    fontFamily: FONT.book,
    color: COLORS.secondary,
  },
  cardsContainer: {
    marginTop: SIZES.xSmall,
  },
});

export default styles;
