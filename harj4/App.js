import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Pressable} from 'react-native';
import Row from './Row';
import {DATA} from "./Data";
import Search from "./Search"


export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(DATA);
  }, [])

  const executeSearch= (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch}></Search>
      <FlatList
      data={items}
      renderItem={({item})=>(
        <Row person={item}></Row>
      )}>
      </FlatList>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
