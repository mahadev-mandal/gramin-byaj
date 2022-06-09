import * as React from 'react';
import { View, Text, Button, Pressable, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  pressable: {
    height: 80,
    width: '30%',
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'pink',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
})

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Gramin')}
          android_ripple={{ color: 'green', }}
        >
          <Text style={styles.text}>
            Village Interest {"\n"}
            ग्रामिण ब्याज
          </Text>

        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Simple')}
          android_ripple={{ color: 'green', }}
        >
          <Text style={styles.text}>Simple Interest</Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: 'row', marginVertical: 10 }}>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Compound')}
          android_ripple={{ color: 'green', }}
        >
          <Text style={styles.text}>Compound Interest</Text>
        </Pressable>
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('Loan')}
          android_ripple={{ color: 'green', }}
        >
          <Text style={styles.text}>Loan Calculator</Text>
        </Pressable>
      </View>
    </View>
  );
}