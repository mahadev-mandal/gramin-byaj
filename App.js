import React from 'react'
import { View, ScrollView, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
const styles = StyleSheet.create({
  headingView: {
    margin: 'auto',
    padding: 10,
    backgroundColor: 'green',

  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding:5,
    paddingLeft: 15,
    fontSize: 15,
    letterSpacing:2,
    fontWeight: 'bold',
  },
  timeInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding:5,
    paddingLeft: 15,
    fontSize: 15,
    width: '30%',
    letterSpacing: 1,
    fontWeight: 'bold',
  },
  button: {

  },
  calculatedView: {
    borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 25,
    borderRadius: 10,
    borderColor: 'green'
  },
  timeResult: {
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  },
  timeText1: {
    fontSize: 15,
    padding: 8,
    paddingLeft: 10,
  },
  timeText2: {
    fontSize: 15,
    backgroundColor: 'gray',
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
  }

})

function App() {
  return (
    <ScrollView style={{}} >
      <View style={styles.headingView}>
        <Text
          style={styles.headingText}>ग्रामीण ब्याज कैलकुलेटर ( मासिक )fgdsg</Text>
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
        <Pressable style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginTop: 15, marginBottom: 15 }}>
          <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff', letterSpacing: 3 }}>CALCULATE</Text>
        </Pressable>
        <View style={{ ...styles.calculatedView, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ width: '55%' }}>
              <Text style={styles.inputLabel}>जम्मा धनराशी:</Text>
              <Text style={{ fontSize: 16, borderWidth: 1, padding: 8, borderRadius: 5, fontWeight:'bold' }}>56766</Text>
            </View>
            <View style={{ width: '40%' }}>
              <Text style={styles.inputLabel}>ब्याज मात्र:</Text>
              <Text style={{ fontSize: 16, borderWidth: 1, padding: 8, borderRadius: 5, fontWeight:'bold' }}>788383</Text>
            </View>
          </View>
          <Text style={styles.inputLabel}>समय:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.timeResult} >
              <Text style={styles.timeText1}>5</Text>
              <Text style={styles.timeText2}>बर्ष</Text>
            </View>
            <View style={styles.timeResult}>
              <Text style={styles.timeText1}>5</Text>
              <Text style={styles.timeText2}>महिना</Text>
            </View>
            <View style={styles.timeResult}>
              <Text style={styles.timeText1}>23</Text>
              <Text style={styles.timeText2}>दिन</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default App
