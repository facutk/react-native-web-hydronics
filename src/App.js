import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-eva-icons';
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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
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
            console.log(size);

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