import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/Entypo';


const DATA = [
  {
    id: 1,
    name: "TAHIL, ADRIAN JANE",
    place: "Finland, Helsinki"
},
{
    id: 2,
    name: "PAGUICAN, NICOLE JAMES",
    place: "North Korea, Pyongyang"
},
{
    id: 3,
    name: "TULFO, RAFFY",
    place: "Philippines"
},
{
    id: 3,
    name: "GARCIA, ROGEL",
    place: "Japan, Tokyo"
},
{
    id: 3,
    name: "OLAGUIR, JOANA",
    place: "China"
},
{
    id: 3,
    name: "ALE, FLORA MAE",
    place: "Iceland"
},
{
    id: 3,
    name: "CARBONILLA, MARLON",
    place: "Switzerland "
},
{
    id: 3,
    name: "SARABIA, EARL MIKE",
    place: "Taiwan"
},
{
    id: 3,
    name: "LIPARTO, MONALIZA",
    place: "Israel"
},
{
    id: 3,
    name: "FELISILDA, ARNOLD JAMES",
    place: "Rome, Italy"
},
{
    id: 3,
    name: "ALAWI, IVANA",
    place: "Philippines"
},
{
    id: 3,
    name: "CRUZ, RAVEN",
    place: "Europe"
},
{
    id: 3,
    name: "KELLY, CLARKSON",
    place: "United States of America"
},
{
    id: 3,
    name: "BEYONCE",
    place: "United States of America"
},
{
    id: 3,
    name: "CHA EUN WOO",
    place: "South Korea"
},
];

const getReciprocatedInitials = (name) => {
  const nameParts = name.split(' ');
  const initials = nameParts.map((part) => part.charAt(0)).join('');
  return initials.split('').reverse().join('').toUpperCase();
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <UserAvatar size={50} name={item.name} style={{ backgroundColor: '#6082B6' }}  />
    <Text style={[styles.title, {color: textColor}]}>{item.name}{'\n'}<Text style={{fontWeight:200}}>{item.place}</Text></Text>
    <Icon style={{ marginRight: 10, position: 'absolute', marginLeft: 350}} name="dots-three-horizontal" size={30} color="#000" />
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#00000' : '#fffff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 15
    
  },
  item: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'

  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20
   
  },
  place: {

  }
});

export default App;