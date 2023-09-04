import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=8')
      .then(response => response.json())
      .then(responseJson => setUsers(responseJson.results))
      .catch(err => console.warn(err))
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customers</Text>
      <ScrollView>
        {
          users.map(user => {
            const name = user.name
            const location = user.location
            return (
              <View style={styles.box} key={user.login.uuid}>
                <Image
                  style={styles.img}
                  source={{ uri: user.picture.medium }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{`${name.title} ${name.first} ${name.last}`}</Text>
                  <Text>{`${location.street.number} ${location.street.name}, ${location.city}, ${location.state}`}</Text>
                  <Text style={{ color: '#00f', marginTop: 5 }}>{user.email}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: 'rgb(32 33 36)',
  },
  box: {
    flex: 2,
    flexDirection: 'row',
    marginVertical: 6,
    backgroundColor: '#eee',
    borderRadius: 7,
    padding: 10,
  },
  img: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    color: '#ddd',
    marginBottom: 12,
  }
})