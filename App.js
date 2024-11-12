import React, {useState} from 'react' ;
import {ScrollView, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, View,Image,StyleSheet} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const styles = StyleSheet.create ({
    Title: {
        padding:10,
        marginTop: 5,
        borderWidth:5,
        borderStyle: 'dashed',
        borderCurve: 'circular',
        textAlignVertical: 'center',
        borderColor: 'yellow',
        marginBottom: 15,
    },
    Parent:{
        borderWidth: 15,
        borderColor: 'purple',
    },
    Child:{
        marginTop: 10,
        borderWidth: 5,
        borderColor: 'turquoise',
        borderStyle: 'dotted',
        textAlign: 'center',
        textAlignVertical: 'center',


    }
});

const InputBox = ({label, onChangeText}) => {
  return (
      <ScrollView>
        <Text>{label}</Text>
        <TextInput style={{borderWidth: 1}}  onChangeText={onChangeText}/>
      </ScrollView>
  )
}

const MyApp = () => {
  // let username :string = " ";
  // let pw :string = " ";
  const [username, setName] = useState('');
  const [id, setID] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const calculateScore = () => {
    let score = 0;
    // let message = '';
    if (answer1 === '18') score += 1;
    if (answer2 === 'Linguini and Remy') score += 1;
    if (answer3 === 'Elementals') score += 1;

    // if (score === '0' || score === '1') message = " Try again!"
    // if (score === '2') message = " Good!"
    // if (score === '3') message = "Well done!"


    Alert.alert(
        'Quiz Result',
        `Hi ${username},\nYour SCORE: ${score}`);

  };


  return (
      <ScrollView contentContainerStyle={{ padding: 20 ,paddingBottom: 20 , paddingEnd: 20, paddingTop:30}}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='popcorn' size={30} color="#B23B23" />
          <Text style={[styles.Title,{ fontWeight: 'bold', fontSize: 24, color: 'black', }]}>
            MOVIE QUIZ
          </Text>
          <Icon name='popcorn' size={30} color="#B23B23" />
        </View>



        <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
        <InputBox label="User ID:" onChangeText={(text) => setID(text)}/>


        <Text style={{ fontSize : 26}}>
          Question 1
        </Text>
        <Image source={require('./img/Tangledjpg.jpg')} style={[ styles.Parent,{ width: 350, height: 200 }]} />
        <Text style={[ styles.Child,{ fontSize: 20 , color:"#800080"}]}>  How many years was rapunzel stuck in her tower? </Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswer1(value)} value={answer1}
            items={[
              { label: '15', value: '15'},
              { label: '18', value: '18'},
              { label: '20', value: '20'},

            ]}
        />
        <Text>{'\n'}</Text>
        <Text style={{ fontSize : 26}}>
          Question 2
        </Text>
        <Image source={require('./img/ratatouille_tall.jpg')} style={[styles.Parent,{ width: 350, height: 550 }]} />
        <Text style={[styles.Child,{ fontSize: 20 , color:"#00008B"}]}> Guess the character names:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswer2(value)} value={answer2}
            items={[
              { label: 'Andro and Remy', value: 'Andro and Remy'},
              { label: 'Gusteau and Emile', value: 'Gusteau and Emile'},
              { label: 'Linguini and Remy', value: 'Linguini and Remy'},

            ]}
        />
        <Text>{'\n'}</Text>

        <Text style={{ fontSize : 26}}>
          Question 3
        </Text>
        <Image source={require('./img/Elementals.jpg')} style={[styles.Parent,{ width: 350, height: 300 }]} />
        <Text style={[styles.Child,{ fontSize: 20, color:"#FFA500s"}]}> Guess the Movie:</Text>
        <RNPickerSelect
            onValueChange={(value) => setAnswer3(value)} value={answer3}
            items={[
              { label: 'Elementals', value: 'Elementals'},
              { label: 'Cinderella', value: 'Cinderella'},
              { label: 'The Good Dinosaur', value: 'The Good Dinosaur'},

            ]}
        />

        <Button title="GET SCORE" onPress={calculateScore} />
      </ScrollView>
  );
};

export default MyApp;
