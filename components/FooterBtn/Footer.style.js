import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  btnContainer: {
    height: 40,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
  },
  textBtn: {
    fontSize: 11,
    color: "white",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    // borderRadius: SIZES.small / 1.25,
  }),
});

export default styles;
