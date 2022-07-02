import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const LandingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is a Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
        <Text>Move to Signup Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LandingPage;
