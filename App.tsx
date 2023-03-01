import React, { Component } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default class App extends Component {

  render() {

    const user_details = {
      name: "S.G.",
      age: 24
    }

    const setData = () => {

      //AsyncStorage.setItem("name","R.G.");
      //AsyncStorage.setItem("age", JSON.stringify(26));

      AsyncStorage.setItem("user_details", JSON.stringify(user_details));
    }

    const showData = async () => {
      let user = await AsyncStorage.getItem("user_details");
      console.log(user);

      /* const name = await AsyncStorage.getItem("name");
       const age = await AsyncStorage.getItem("age");
       console.log(name + " " + age);*/

    }

    const clearData = () => {
      AsyncStorage.clear();
    }

    return (
      <View style={styles.container}>
        <View style={styles.btnStyle}>
          <Button title="Set Data" onPress={setData} />
        </View>
        <View style={styles.btnStyle}>
          <Button title="Show Data" onPress={showData} />
        </View>
        <View style={styles.btnStyle}>
          <Button title="Clear Data" onPress={clearData} />
        </View>
        {
          user_details.name ? (<Text>{user_details.name} {user_details.age}</Text>) : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  btnStyle: {
    margin: 10
  }
})
