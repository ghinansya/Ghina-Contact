// App/screens/ContactDetailScreen.tsx

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ContactDetailScreen = ({ route }: { route: any }) => {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {contact.name}</Text>
      <Text style={styles.text}>Phone: {contact.phone}</Text>
      <Text style={styles.text}>Email: {contact.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ContactDetailScreen;
