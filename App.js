import React from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
const styles = StyleSheet.create({
  headingView: {
    margin: 'auto',
    padding: 20,
    backgroundColor: 'green',

  },
  headingText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  inputLabel: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom:5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
  },
  timeInput: {
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 25,
    width: '30%'
  },
  button: {

  }

})

function App() {
  return (
    <View style={{}} >
      <View style={styles.headingView}>
        <Text
          style={styles.headingText}>ग्रामीण ब्याज कैलकुलेटर ( मासिक )</Text>
      </View>
      <View style={{ padding: 15 }}>
        <View style={{}}>
          <Text style={styles.inputLabel}>धनराशी:</Text>
          <TextInput style={styles.textInput} keyboardType='numeric' />
          <Text style={styles.inputLabel}>ब्याज दर:</Text>
          <TextInput style={styles.textInput} keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.inputLabel}>ऋण लिएको मिती:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='बर्ष'
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='महिना'
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='दिन'
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputLabel}>ऋण बुझाउने मिती:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='बर्ष'
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='महिना'
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='दिन'
            />
          </View>
        </View>
        <Button title='Calculate' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '55%' }}>
            <Text style={styles.inputLabel}>जम्मा धनराशी:</Text>
            <TextInput style={styles.textInput} keyboardType='numeric' />
          </View>
          <View style={{ width: '40%' }}>
            <Text style={styles.inputLabel}>ब्याज मात्र:</Text>
            <TextInput style={styles.textInput} keyboardType='numeric' />
          </View>
        </View>
        <View>
        <Text style={styles.inputLabel}>समय:</Text>
          <View><Text>बर्ष</Text></View>
          <View><Text>महिना</Text></View>
          <View><Text>दिन</Text></View>
        </View>
      </View>
    </View>

  )
}

export default App