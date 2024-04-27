import React from 'react';
import { StyleSheet, View, SafeAreaView, ImageBackground } from 'react-native';
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'


const image = require('./assets/red_planet.jpg');

export default function App() {

  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground}>
        <View>
            <CurrentWeather></CurrentWeather>
            <UpcomingWeather></UpcomingWeather>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'start',
    alignItems: 'center',
  },
});
