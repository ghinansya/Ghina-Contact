// App/index.tsx

import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from "@react-navigation/native";


const contacts = [
  { id: 1, name: 'Raihan Akbar', phone: '123-456-7890', email: 'john.doe@example.com' },
  { id: 2, name: 'Pedro Pascallop', phone: '234-567-8901', email: 'jane.smith@example.com' },
  { id: 3, name: 'Dejan Soekri Stankovic', phone: '345-678-9012', email: 'michael.johnson@example.com' },
  { id: 4, name: 'Azizi Asadel', phone: '456-789-0123', email: 'emily.davis@example.com' },
  { id: 5, name: 'Aqua', phone: '567-890-1234', email: 'david.brown@example.com' },
];

const ContactListScreen = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: { id: number, name: string, phone: string, email: string } }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Button
        title="Detail"
        // onPress={() => navigation.navigate('ContactDetail', { contact: item })}
        onPress={() => navigation.navigate('ContactDetail')}
      />
    </View>
  );

  return (
    <FlatList
      style={{ width: '100%' }}
      data={contacts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ContactListScreen;
