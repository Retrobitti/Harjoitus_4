import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Pressable, Search, executeSearch} from 'react-native';
import Row from './Row';
import {DATA} from "./Data";


export default function App() {
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null); 
  const select = (id) => {
    setSelectedId(id);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}></Search>
      <FlatList
      data={DATA}
      //keyExtractor={(item) => item.id}
      //extraData={selectedId}
      renderItem={renderItem}>
      </FlatList>
    </SafeAreaView>
  )
}

function renderItem({item}){
  return(<Text>{item.lastname}</Text>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
