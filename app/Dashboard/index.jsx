import React from 'react';
import { View, Text, Image,StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import mobileAppImg from '../../assets/mobileappdev.png';
import computationalImg from '../../assets/modelling.png';
import mathsImg from '../../assets/maths.png';
import { Link } from 'expo-router';

function Dashboard() {
  const navigation = useNavigation();
  const courses = [
    { name: 'Mobile App Development', image: mobileAppImg, link:'../MobileAppDev' },
    { name: 'Computational Modelling', image: computationalImg, link:'../Computational' },
    { name: 'Advanced Mathematical Structures', image: mathsImg, link:'../AdvancedMaths' },
  ]; 

  return (
    <ScrollView>
    <View>
      <Text style={{ fontSize: 30, padding:10, textAlign: 'center', marginBottom: 0 , fontWeight:'bold' }}  >Dashboard</Text>
      <View style={{ margin:10 , padding:10 , marginBottom:10 }}>
      {courses.map((course, index) => (
          <Card key={index} style={{ marginBottom:15, backgroundColor: 'black' }}>
            <Card.Cover style={{padding:10}} source={course.image} />
            <Link href={course.link}>
            <Card.Title title={course.name} titleStyle={styles.title} />
            </Link>
          </Card>    
      ))}
      </View>
    </View>
    </ScrollView>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
    title:{
        color: 'white',
        fontWeight: 'bold',
       
    }

});