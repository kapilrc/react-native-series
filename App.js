import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [Items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' },
  ])

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['item1-1', 'item1-2', 'item1-3']
    }
  ])

  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    // const adding_index = Sections.length + 1;
    // setSections([...Sections,
    //   { 
    //     title: `Title ${adding_index}`,
    //     data: [
    //       `Item ${adding_index}-1`,
    //       `Item ${adding_index}-2`,
    //     ]
    //   }
    // ])
    const adding_index = Items.length + 1;
    setItems([...Items, { key: adding_index, name: `Item ${adding_index}` }])
    setRefreshing(false)
  }

  return (
    // <SectionList
    //   sections={Sections}
    //   keyExtractor={(item, index) => index.toString()}
    //   renderItem={({item}) => (
    //       <Text style={styles.text}>{item}</Text>
    //   )}
    //   renderSectionHeader={({section}) => (
    //     <View style={styles.header}>
    //       <Text style={styles.text}>{section.title}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }
    // />
    <FlatList 
      data={Items}
      renderItem={({item}) => {
        return (
            <View style={styles.item} key={item.id}>
              <Text style={styles.text}>{item.name}</Text>
            </View>
          )
        }
      }
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
        />
      }
    />
    // <ScrollView
    //   style={styles.body}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={Refreshing}
    //       onRefresh={onRefresh}
    //     />
    //   }
    // >

    //   {
    //     Items.map(item => {
    //       return (
    //         <View style={styles.item} key={item.id}>
    //           <Text style={styles.text}>{item.name}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    color: '#eeeeee'
  },
  item: {
    backgroundColor: '#4ae1fe',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderTopWidth: 1, 
    padding: 10
  },
  header: {
    backgroundColor: '#4ae1fe',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    marginTop: 20,
  },
  // header_text: {
  //   fontSize: 35,
  // },
  text: {
    fontSize: 35,
  }
});

export default App;
