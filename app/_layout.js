import { Stack } from 'expo-router/stack';
import { TouchableOpacity } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Stack>   
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitle: 'Dashboard',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('billPayment')}>
              <Foundation name="indent-more" size={24} color="purple" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="billPayment"
        options={{
          headerTitle: 'Bill Payment',
        }}
      />
    </Stack>
  );
}
