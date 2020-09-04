import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-eva-icons';
import Slider from '@react-native-community/slider';
import HelloWorldScreen from './HelloWorldScreen';

function LightsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lights!</Text>
    </View>
  );
}

function AuxScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Auxiliar!</Text>
    </View>
  );
}

function HelpScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lights!</Text>
    </View>
  );
}

function SettingsScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings! {red}</Text>
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor={`#${(red).toString(16).padStart(2, 0)}0000`}
        // minimumTrackTintColor={'#00FF00'}
        // maximumTrackTintColor={'red'}
        // thumbTintColor={'#2296f3'}
        thumbTintColor={'#2296f3'}
        value={red}
        onSlidingComplete={setRed}
      />
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor={`#00${(green).toString(16).padStart(2, 0)}00`}
        // minimumTrackTintColor={'#00FF00'}
        // maximumTrackTintColor={'red'}
        // thumbTintColor={'#2296f3'}
        thumbTintColor={'#2296f3'}
        value={green}
        onSlidingComplete={setGreen}
      />
      <Slider
        style={{width: 320, height: 40}}
        minimumValue={0}
        maximumValue={255}
        step={1}
        minimumTrackTintColor={`#0000${(blue).toString(16).padStart(2, 0)}`}
        // minimumTrackTintColor={'#00FF00'}
        // maximumTrackTintColor={'red'}
        // thumbTintColor={'#2296f3'}
        thumbTintColor={'#2296f3'}
        value={blue}
        onSlidingComplete={setBlue}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'star';

            if (route.name === 'Inicio') {
              iconName = 'home-outline';
          //     iconName = focused
          //       ? 'ios-information-circle'
          //       : 'ios-information-circle-outline';
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Luces') {
              iconName = 'bulb-outline';
            } else if (route.name === 'Auxiliar') {
              iconName = 'flash-outline';
            } else if (route.name === 'Ayuda') {
              iconName = 'question-mark-circle-outline';
            } else if (route.name === 'Ajustes') {
              iconName = 'settings-2-outline';
            }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
            return <Icon name={iconName} width={size} height={size} fill={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightblue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Inicio" component={HelloWorldScreen} />
        <Tab.Screen name="Luces" component={LightsScreen} />
        <Tab.Screen name="Auxiliar" component={AuxScreen} />
        <Tab.Screen name="Ayuda" component={HelpScreen} />
        <Tab.Screen name="Ajustes" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}