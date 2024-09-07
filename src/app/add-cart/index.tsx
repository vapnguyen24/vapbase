import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { styles } from '@themes';

const AddCartScreen = () => {
    const params= useLocalSearchParams();
    const { id, name, age } = params
    
    return (
      <View style={[styles.centerContainer, styles.flex]}>
        <Text>Add cart screen</Text>
        <Text>Id: {id}</Text>
        <Text>Name: {name}</Text>
        <Text>Age: {age}</Text>
      </View>
    )
}

export default AddCartScreen