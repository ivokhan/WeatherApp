# Weather App

A simple mobile weather app built with React Native and Expo that allows users to check the current weather for any city.

## Features

- Search for weather by city name
- Get weather data based on your current location
- Display current temperature in Celsius
- Show weather conditions (Clear, Rain, Snow, etc.)
- Display weather icon
- Error handling for city not found and network errors

## Screenshots

(Screenshots will appear when you run the app)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Expo CLI

### Installation

1. Clone this repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd WeatherApp
```

3. Install dependencies:
```
npm install
```

4. Get your API key:
   - Sign up at [OpenWeatherMap](https://openweathermap.org/)
   - Go to your account -> API Keys
   - Copy your API key

5. Add your API key:
   - Open `app/index.js`
   - Replace `YOUR_API_KEY_HERE` with your actual API key

### Running the App

Start the development server:
```
npm start
```

- Press `a` to run on Android emulator
- Press `i` to run on iOS simulator
- Scan the QR code with the Expo Go app on your physical device

### Location Permissions

When you first run the app, it will request permission to access your location. This is used to show you the weather for your current location. If you deny this permission, you can still search for weather by city name.

## Technologies Used

- React Native
- Expo
- OpenWeatherMap API
- Expo Location API
- React Hooks
- Fetch API

## License

This project is licensed under the MIT License.
