import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  const params= useLocalSearchParams();
  const { id, name, age } = params
  
  return (
    <View style={styles.container}>
      <Text>Id: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
