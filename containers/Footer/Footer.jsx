import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

// Components
import FooterBtn from "../../components/FooterBtn/FooterBtn";

// Styles
import styles from "./Footer.style";
import { SIZES, images, icons } from "../../constants";

const Footer = ({ iconUrl, dimension, handlePress }) => {
  return (
    <SafeAreaView style={styles.container}>
      <FooterBtn iconUrl={icons.menu} dimension="70%" text="home" />
      <FooterBtn iconUrl={icons.menu} dimension="70%" text="browse" />
      <FooterBtn iconUrl={icons.menu} dimension="70%" text="podcasts" />
      <FooterBtn iconUrl={icons.menu} dimension="70%" text="account" />
    </SafeAreaView>
  );
};

export default Footer;
