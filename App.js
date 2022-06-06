import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
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
    marginBottom: 5,
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

  },
  calculatedView: {
    borderWidth:2, 
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom:25, 
    borderRadius:10, 
    borderColor:'green'
  },
  timeResult: {
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between'
  },
  timeText1: {
    fontSize: 25,
    padding: 10,
    paddingLeft: 20,
  },
  timeText2: {
    fontSize: 25,
    backgroundColor: 'gray',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
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
        <Pressable style={{backgroundColor:'blue', padding:10, borderRadius:10, marginTop:15, marginBottom:15}}>
          <Text style={{fontSize:30, textAlign:'center', color:'#fff',letterSpacing:5}}>CALCULATE</Text>
        </Pressable>
        <View style={{...styles.calculatedView, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ width: '55%' }}>
              <Text style={styles.inputLabel}>जम्मा धनराशी:</Text>
              <Text style={{fontSize:25, borderWidth:1, padding:10, borderRadius:10}}>56766</Text>
            </View>
            <View style={{ width: '40%' }}>
              <Text style={styles.inputLabel}>ब्याज मात्र:</Text>
              <Text style={{fontSize:25, borderWidth:1, padding:10, borderRadius:10}}>788383</Text>
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
    </View>
  )
}

export default App