import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, Button, ScrollView, View, FlatList } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  let posts = []
  for (let i = 1; i <= 10; i++) {
    posts.push({
      title: `Title ${i}`,
      description: `Deskripsi untuk title ${i}`
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.less1, styles.spaceLess]}>
        <Image
          style={styles.img}
          source={{
            uri: 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
          }}
        />
        <Text>Hello World</Text>
        <Button
          title='Click Me'
          color='blue'
        />
      </View>
      <View style={[styles.less2, styles.spaceLess]}>
        <View style={styles.box1} />
        <View style={styles.box2} />
        <View style={styles.box3} />
      </View>
      <View style={styles.spaceLess}>
        <TextInput
          style={styles.textInput}
          placeholder='Masukkan teks disini'
          onChangeText={text => setInput(text)}
          defaultValue={input}
        />
        <Text style={{ padding: 10, fontSize: 25 }}>
          The text: {input}
        </Text>
      </View>
      <View style={[styles.scroll, styles.spaceLess]}>
        {
          posts.map((post, idx) => (
            <View style={styles.box} key={idx}>
              <Text style={styles.title}>{post.title}</Text>
              <Text>{post.description}</Text>
            </View>
          ))
        }
      </View>
      <StatusBar style="auto" />
    </ScrollView>
    // <FlatList
    //   data={posts}
    //   // renderItem={({ item }) => <Text style={{ padding: 10, fontSize: 20, height: 50 }}>{item.title}</Text>}
    //   renderItem={({ item }) => (
    //     <View style={styles.box} key={item}>
    //       <Text style={styles.title}>{item.title}</Text>
    //       <Text>{item.description}</Text>
    //     </View>
    //   )}
    // />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  less1: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  less2: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
  },
  spaceLess: {
    marginVertical: 10,
  },
  img: {
    height: 100,
    width: 100,
  },
  textInput: {
    height: 40,
  },
  box1: {
    flex: 1,
    backgroundColor: 'red',
  },
  box2: {
    flex: 2,
    backgroundColor: 'yellow',
  },
  box3: {
    flex: 3,
    backgroundColor: 'green',
  },
  scroll: {
    backgroundColor: '#C2B8A3',
    padding: 10,
    marginBottom: 40,
  },
  box: {
    backgroundColor: '#FEF7DC',
    marginBottom: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});