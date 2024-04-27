import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function CurrentWeather() {
  const sol = "265";
  const date = "August 25";
  const high = "-15";
  const low = "-175"

  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.sol}>Sol {sol}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.tmp}>High: {high}°F</Text>
          <Text style={styles.tmp}>Low: {low}°F</Text>
          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'start',
    alignItems: 'center',
  },
  sol: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  date: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600',
    },
  tmp: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '400',
    },
});