import React from 'react';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from './components/NativeBaseIcon';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import AdminPage from './screens/AdminPage';
import LandingPage from './screens/LandingPage';

const Stack = createStackNavigator();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Admin"
            component={AdminPage}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Landing"
            component={LandingPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Center
//         _dark={{ bg: 'blueGray.900' }}
//         _light={{ bg: 'blueGray.50' }}
//         px={4}
//         flex={1}
//       >
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen
//               options={{ headerShown: false }}
//               name="Admin"
//               component={AdminPage}
//             />
//             <Stack.Screen
//               options={{ headerShown: false }}
//               name="Landing"
//               component={LandingPage}
//             />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </Center>
//     </NativeBaseProvider>
//   );
// }
