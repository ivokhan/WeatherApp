import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) return null;

  const { name, main, weather } = weatherData;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{name}</Text>
      <Text style={styles.temperature}>{Math.round(main.temp)}°C</Text>
      <View style={styles.weatherConditionContainer}>
        <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
        <Text style={styles.weatherCondition}>{weather[0].main}</Text>
      </View>
      <Text style={styles.weatherDescription}>{weather[0].description}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsText}>Humidity: {main.humidity}%</Text>
        <Text style={styles.detailsText}>Feels like: {Math.round(main.feels_like)}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3D90D7',
    borderRadius: 20,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cityName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  weatherConditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherCondition: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  weatherDescription: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 16,
    textTransform: 'capitalize',
  },
  detailsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  detailsText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default WeatherInfo; 