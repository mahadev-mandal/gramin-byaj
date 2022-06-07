import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Pressable, View, FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 5,
    marginTop: StatusBar.currentHeight || 0,
    height: 300,
    width: 150,
    padding: 0,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  item: {
    padding: 5,
    marginVertical: 1,
    marginHorizontal: 1,
    borderRadius: 5
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center"
  }
});


const DATA = [];
for (var year = 2050; year <= 2100; year++) {
  DATA.push({ id: year, title: year })
}
const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
export const DateList = ({ hideModal }) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = "#f9c2ff";
    const color = 'black';
    const onDatePressed = () => {
      setSelectedId(item.id)
      hideModal(item.id)
    }
    return (
      <Item
        item={item}
        onPress={onDatePressed}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 34, marginBottom: -15, marginTop: -10 }} >&uarr;</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        initialScrollIndex={25}
      />
      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 34, marginBottom: 0, marginTop: -20, zIndex: -1 }} >&darr;</Text>
    </SafeAreaView>
  );
};



const Dropdown = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputFill, setInputFill] = useState('Modal')
  function hideModal(itemId) {
    setModalVisible(false);
    setInputFill(itemId)
  }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <DateList hideModal={hideModal} />
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{inputFill}</Text>
      </Pressable>
    </View>
  );
};


export default Dropdown;