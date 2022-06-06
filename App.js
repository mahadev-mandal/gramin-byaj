import React, { useState } from 'react'
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
    padding: 5,
    paddingLeft: 15,
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  timeInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
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
  const n = 12;
  const [principal, setPrincipal] = useState(null);
  const [rate, setRate] = useState(null);
  const [startYear, setStartYear] = useState(null);
  const [startMonth, setStartMonth] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [endYear, setendYear] = useState(null);
  const [endMonth, setendMonth] = useState(null);
  const [endDay, setendDay] = useState(null);
  const [calAmount, setCalAmount] = useState(null);
  const [interest, setInterest] = useState(null);
  const [calYear, setCalYear] = useState(null);
  const [calMonth, setCalMonth] = useState(null);
  const [calDay, setCalDay] = useState(null);

  const handleBtnClick = () => {
    const t1 = endYear * 360 + endMonth * 30 + endDay;
    const t2 = startYear * 360 + startMonth * 30 + startDay;
    const y = (t1 - t2) / 360;
    setCalYear(Math.floor(y));
    const m = (y - Math.floor(y)) * 12;
    setCalMonth(Math.floor(m))
    const d = (m - Math.floor(m)) * 30;
    setCalDay(Math.floor(d));
    const t = y - Math.floor(y);
    const A = Math.pow((1 + rate * n / 100), Math.floor(y) ) * principal * (1 + t * n * rate / 100);
    setCalAmount(A.toFixed(2));
    setInterest((A - principal).toFixed(2));
  }

  return (
    <ScrollView style={{}} >
      <View style={styles.headingView}>
        <Text
          style={styles.headingText}>ग्रामीण ब्याज कैलकुलेटर ( मासिक )</Text>
      </View>
      <View style={{ padding: 15, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '65%', }}>
            <Text style={styles.inputLabel}>धनराशी:</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              defaultValue={null}
              onChangeText={(newText) => { setPrincipal(Number(newText)) }}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Text style={styles.inputLabel}>ब्याज दर:</Text>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              defaultValue={null}
              onChangeText={(newText) => { setRate(Number(newText)) }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputLabel}>ऋण लिएको मिती:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='बर्ष'
              defaultValue={null}
              onChangeText={(newText) => { setStartYear(Number(newText)) }}
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='महिना'
              defaultValue={null}
              onChangeText={(newText) => { setStartMonth(Number(newText)) }}
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='दिन'
              defaultValue={null}
              onChangeText={(newText) => { setStartDay(Number(newText)) }}
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
              defaultValue={null}
              onChangeText={(newText) => { setendYear(Number(newText)) }}
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='महिना'
              defaultValue={null}
              onChangeText={(newText) => { setendMonth(Number(newText)) }}
            />
            <TextInput
              style={styles.timeInput}
              keyboardType='numeric'
              placeholder='दिन'
              defaultValue={null}
              onChangeText={(newText) => { setendDay(Number(newText)) }}
            />
          </View>
        </View>
        <Pressable
          style={{ backgroundColor: 'blue', padding: 10, borderRadius: 10, marginTop: 15, marginBottom: 15 }}
          onPress={handleBtnClick}
        >
          <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff', letterSpacing: 3 }}>CALCULATE</Text>
        </Pressable>
        <View style={{ ...styles.calculatedView, }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <View style={{ width: '55%' }}>
              <Text style={styles.inputLabel}>जम्मा धनराशी:</Text>
              <Text style={{ fontSize: 16, borderWidth: 1, padding: 8, borderRadius: 5, fontWeight: 'bold' }}>
                {calAmount}
              </Text>
            </View>
            <View style={{ width: '40%' }}>
              <Text style={styles.inputLabel}>ब्याज मात्र:</Text>
              <Text style={{ fontSize: 16, borderWidth: 1, padding: 8, borderRadius: 5, fontWeight: 'bold' }}>
                {interest}
              </Text>
            </View>
          </View>
          <Text style={styles.inputLabel}>समय:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.timeResult} >
              <Text style={styles.timeText1}>{calYear}</Text>
              <Text style={styles.timeText2}>बर्ष</Text>
            </View>
            <View style={styles.timeResult}>
              <Text style={styles.timeText1}>{calMonth}</Text>
              <Text style={styles.timeText2}>महिना</Text>
            </View>
            <View style={styles.timeResult}>
              <Text style={styles.timeText1}>{calDay}</Text>
              <Text style={styles.timeText2}>दिन</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default App
