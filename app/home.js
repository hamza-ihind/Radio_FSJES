import useState from "react";
import { Stack, useRouter } from "expo-router";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { COLORS, icons, images, SIZES } from "../constants";

// Styles
import ScreenHeaderBtn from "../components/ScreenHeaderBtn/ScreenHeaderBtn";
import HomeText from "../components/HomeText/HomeText";
import Welcome from "../components/Welcome/Welcome";
import Footer from "../containers/Footer/Footer";

import { StatusBar } from "react-native";
import styles from "../components/Welcome/Welcome.style";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={images.bg}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#220767",
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="75%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={icons.bell} dimension="70%" />
            ),
            headerTitle: "",
          }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium,
            }}
          >
            <HomeText />
          </View>
        </ScrollView>
        <Footer />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
