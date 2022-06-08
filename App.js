import React, { useState } from 'react'
import { View, ScrollView, Text, StyleSheet, TextInput, Button, Pressable } from 'react-native'
import { useFormik } from 'formik';
import { validationSchema } from './utils/validationSchema';
import Select from './components/Select';
const styles = StyleSheet.create({
  headingView: {
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

const yearData = [];
for (var year = 2050; year <= 2100; year++) {
  yearData.push({ id: year, title: year })
}
const monthData = [];
for (var year = 1; year <= 12; year++) {
  monthData.push({ id: year, title: year })
}
const dayData = [];
for (var year = 1; year <= 32; year++) {
  dayData.push({ id: year, title: year })
}

function App() {
  const n = 12;
  const [calAmount, setCalAmount] = useState(null);
  const [interest, setInterest] = useState(null);
  const [calYear, setCalYear] = useState(null);
  const [calMonth, setCalMonth] = useState(null);
  const [calDay, setCalDay] = useState(null);

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      principle: '',
      rate: '',
      startYear: '',
      startMonth: '',
      startDay: '',
      endYear: '',
      endMonth: '',
      endDay: '',
    },
    validationSchema: validationSchema,
    onSubmit(values) {
      const t1 = Number(values.endYear) * 360 + Number(values.endMonth) * 30 + Number(values.endDay);
      const t2 = Number(values.startYear) * 360 + Number(values.startMonth) * 30 + Number(values.startDay);
      const y = (t1 - t2) / 360;
      setCalYear(Math.floor(y));
      const m = (y - Math.floor(y)) * 12;
      setCalMonth(Math.floor(m))
      const d = (m - Math.floor(m)) * 30;
      setCalDay(Math.floor(d));
      const t = y - Math.floor(y);
      const A = Math.pow((1 + Number(values.rate) * n / 100), Math.floor(y)) * Number(values.principle) * (1 + t * n * Number(values.rate) / 100);
      setCalAmount(A.toFixed(2));
      setInterest((A - Number(values.principle)).toFixed(2));
    }
  })

  return (
    <ScrollView>
      <View style={styles.headingView}>
        <Text
          style={styles.headingText}>ग्रामीण ब्याज कैलकुलेटर ( मासिक )</Text>
      </View>
      <View style={{ padding: 15, }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: '65%', }}>
            <Text style={styles.inputLabel}>धनराशी:</Text>
            <TextInput
              style={{ ...styles.textInput, borderColor: errors.principle && touched.principle ? 'red' : 'black' }}
              keyboardType='numeric'
              onBlur={handleBlur('principle')}
              value={values.principle}
              onChangeText={handleChange('principle')}
            />
          </View>
          <View style={{ width: '30%' }}>
            <Text style={styles.inputLabel}>ब्याज दर:</Text>
            <TextInput
              style={{ ...styles.textInput, borderColor: errors.rate && touched.rate ? 'red' : 'black' }}
              keyboardType='numeric'
              onBlur={handleBlur('rate')}
              value={values.rate}
              onChangeText={handleChange('rate')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.inputLabel}>ऋण लिएको मिती:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Select
              width="30%"
              placeholder="बर्ष"
              data={yearData}
              onChange={handleChange('startYear')}
              borderColor={errors.startYear && touched.startYear ? 'red' : 'black'}
            />
            <Select
              width="30%"
              placeholder="महिना"
              data={monthData}
              onChange={handleChange('startMonth')}
              borderColor={errors.startMonth && touched.startMonth ? 'red' : 'black'}
            />
            <Select
              width="30%"
              placeholder="दिन"
              data={dayData}
              onChange={handleChange('startDay')}
              borderColor={errors.startDay && touched.startDay ? 'red' : 'black'}
            />
          </View>
        </View>
        <View style={{ marginBottom: 15 }}>
          <Text style={styles.inputLabel}>ऋण बुझाउने मिती:</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Select
              width="30%"
              placeholder="बर्ष"
              data={yearData}
              onChange={handleChange('endYear')}
              borderColor={errors.endYear && touched.endYear ? 'red' : 'black'}
            />
            <Select
              width="30%"
              placeholder="महिना"
              data={monthData}
              onChange={handleChange('endMonth')}
              borderColor={errors.endMonth && touched.endMonth ? 'red' : 'black'}
            />
            <Select
              width="30%"
              placeholder="दिन"
              data={dayData}
              onChange={handleChange('endDay')}
              borderColor={errors.endDay && touched.endDay ? 'red' : 'black'}
            />
          </View>
        </View>
        <Button title='calculate' color='pink' onPress={handleSubmit} />
        <View style={{ ...styles.calculatedView, marginTop: 15 }}>
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
