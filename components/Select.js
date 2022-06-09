import React, { useState } from "react";
import { Alert, Modal,Button, TextInput, StyleSheet, Pressable, View, FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 0,
    borderRadius: 5,
    height: 300,
    width: 200,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 15,
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'black'

  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
    color: 'black'
  },
  modalText: {
    marginBottom: 0,
    textAlign: "center"
  },
  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    borderRadius: 5,
    height: 40,

    
  }
});



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);
export const DateList = ({ hideModal, data }) => {
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
      <Text style={{ textAlign: 'center', fontWeight: 'bold', }} >&Delta;</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <Text style={{ textAlign: 'center', fontWeight: 'bold', }} >&nabla;</Text>
    </SafeAreaView>
  );
};



const Select = ({ data, width, placeholder, onChange, borderColor }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputFill, setInputFill] = useState('')
  function hideModal(itemId) {
    setModalVisible(false);
    setInputFill(itemId)
    onChange(itemId.toString())

  }
  return (
    <View style={{ width: width }} >
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{backgroundColor:'white',}}>
            <Button title="close" onPress={()=>setModalVisible(false)} />
            <DateList hideModal={hideModal} data={data} />
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{ ...styles.pressable, borderColor: borderColor }}
      >
        <TextInput
          placeholder={placeholder}
          editable={false}
          value={inputFill.toString()}
          style={styles.textInput}
        />
        <Text style={{ fontSize: 15 }}>&nabla;</Text>
      </Pressable>
    </View>
  );
};


export default Select;