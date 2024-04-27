import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

const DATA = [
  {sol: "266", date: "August 26", high: "-17", low: "-185"},
  {sol: "267", date: "August 27", high: "-10", low: "-190"},
  {sol: "268", date: "August 28", high: "-16", low: "-185"}
];

const Item = ({sol, date, high, low}) => (
  <View>
    <Text style={styles.sol}>Sol {sol}</Text>
    <Text style={styles.date}>{date}</Text>
    <Text style={styles.tmp}>High: {high}°F</Text>
    <Text style={styles.tmp}>Low: {low}°F</Text>
  </View>
);

export default function UpcomingWeather() {
  const renderItem = ({item}) => (
    <Item
      sol={item.sol}
      date={item.date}
      high={item.high}
      low={item.low}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.txt}>Upcoming Weather</Text>
      <FlatList
        horizontal
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.sol}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  txt: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '600'
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
