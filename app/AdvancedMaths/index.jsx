import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MobileAppDev() {
  const mobileMaterial = [
    {title : 'Probability Theory'},
    {title : 'Bayes Theorem'},
    {title : 'Graphs and Trees'},
    {title : 'Linear Algebra'},
    {title : 'Predicate Logic'},

  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Advanced Mathematical Structures</Text>
        <View style={styles.materialContainer}>
          {mobileMaterial.map((material, index) => (
            <View key={index} style={styles.book}>
              <Icon name="book" size={30} color="#000" />
              <Text style={styles.text}>{material.title}</Text>
              <Icon name="file-download" size={30} color="#000" />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default MobileAppDev;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    

  },
  title: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
    marginBottom: 0,
    fontWeight: 'bold',
  },
  materialContainer: {
    margin: 10, 
    padding: 10,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
  },
  book: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 50,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
});