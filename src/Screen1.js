import React, { Component ,useContext,useState} from 'react';
import {ScrollView,KeyboardAvoidingView,StyleSheet, Text, View, Alert, TextInput, Button, Image, TouchableOpacity,Dimensions } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import { TextButton } from './Textbutton'
import database from '@react-native-firebase/database'
import { Picker } from '@react-native-picker/picker';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

function Screen1(props) {
  const [fullname, SetFullname] = useState("");
  const [mobile, SetMobile] = useState("");
  const [group, SetGroup] = useState("");
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [country, SetCountry] = useState("");
  const [Disease, SetDisease] = useState("");

  const save_data = () => {

    let user =
    {
      fullname, mobile, group, age, gender, country,Disease
    }
    let nameformat = /^[a-zA-Z]+$/;
    let number_regex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    let nameValid = nameformat.test(fullname);
    let no = number_regex.test(mobile);
    if (fullname == "" ||  mobile == "" || group == "" || age == "" || gender == "" || country == "" || Disease == "") {
      Alert.alert('Error', 'All fields needed to be filled  correctly', [{ text: 'Close', onPress: () => console.log('alert closed') }])
    }
    else if (!nameValid) {
      Alert.alert('Error', 'name must be alphabetic', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])
    }
    else if (!no) {
      Alert.alert('Error', 'number must type correctly like 0301-xxxxxxx', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }
  
    else {


      database().ref('/').child('Donor').push(user);
    
      SetFullname("");
      SetMobile("");
      SetGroup("");
      SetAge("");
      SetGender("");
      SetCountry("");
      SetDisease("");
      Alert.alert('Congratulation', 'Donor Added Successfully', [{ text: 'Close', }
      ])

    }
  }
    
    
   
 return (
            
    <View>
      

<View style={{flexDirection:'row',backgroundColor:"#540502"}}>
    <Icon name="menu"  style={[{fontSize:28,color:'#fff',marginVertical:1.8*vh,paddingLeft:5*vw,flex:1}]}
    onPress={() =>props.navigation.openDrawer()}/>
       
           <Text style={{flex:1,paddingTop:2,fontSize:28,color:'#fff',paddingBottom:3}}>Donor</Text>
           <Text style={{flex:1}}></Text>
           
            </View>

<KeyboardAvoidingView behavior={'height'} style={{flexGrow:1}}>    

<ScrollView contentContainerStyle={{flexGrow:1,height:600}}>



    <View style={styles.containe}>

      <View style={styles.top}>
      </View>

      <View style={styles.box1}>
        <View style={styles.inner}>
        <Text style={{fontSize:35}}>Register a Donor</Text>

        </View>
      </View>



      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Full Name"
              value={fullname}
              placeholderTextColor="black"
              onChangeText={(e) => SetFullname(e)} />
          </View>
        </View>
      </View>



      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              value={mobile}
              maxLength={11}
              keyboardType="numeric"
              placeholder="Mobile Number 03xx-xxxxxxx"
              placeholderTextColor="black"
              onChangeText={(e) => SetMobile(e)} />
          </View>
        </View>
      </View>







      <View style={styles.box}>
        <View style={styles.inner}>

        <View style={styles.inputView} >
              <Picker
                onValueChange={(e) => SetGroup(e)}
                selectedValue={group}
              >
                <Picker.Item label="Blood group" value="Group" ></Picker.Item>
                <Picker.Item label="B+" value="B+" ></Picker.Item>
                <Picker.Item label="B-" value="B-"></Picker.Item>
                <Picker.Item label="o+" value="o+"></Picker.Item>
                <Picker.Item label="o-" value="o-"></Picker.Item>
                <Picker.Item label="A+" value="A+"></Picker.Item>
                <Picker.Item label="A-" value="A-" ></Picker.Item>
                <Picker.Item label="AB+" value="AB+" ></Picker.Item>
                <Picker.Item label="AB-" value="AB-" ></Picker.Item>
              </Picker>
            </View>

        </View>
      </View>






      <View style={styles.box}>
        <View style={styles.inner}>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="Age"
                maxLength={3}
                keyboardType="numeric"
                value={age}
                placeholderTextColor="black"
                onChangeText={(e) => SetAge(e)} />
            </View>
        </View>
      </View>


      <View style={styles.box}>
        <View style={styles.inner}>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="Any Disease like Diabetes etc."
                value={Disease}
                placeholderTextColor="black"
                onChangeText={(e) => SetDisease(e)} />
            </View>
        </View>
      </View>



      <View style={styles.box}>
        <View style={styles.inner}>
            <View style={styles.inputView} >
              <Picker
                onValueChange={(e) => SetGender(e)}
                selectedValue={gender}
              >
                <Picker.Item label="Gender" value="Gender" ></Picker.Item>
                <Picker.Item label="Male" value="Male"></Picker.Item>
                <Picker.Item label="Female" value="Female"></Picker.Item>
                <Picker.Item label="Other" value="other"></Picker.Item>
              </Picker>
            </View>
            </View>
      </View>



      <View style={styles.box}>
        <View style={styles.inner}>
            
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="Country..."
                value={country}
                placeholderTextColor="black"
                onChangeText={(e) => SetCountry(e)} />
            </View>
        </View>
      </View>





      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={save_data}>Register a Donor</Text>
          </TouchableOpacity>
        </View>
      </View>





      <View style={styles.bottom}>
      </View>


    </View>



    </ScrollView>

    </KeyboardAvoidingView>




</View>
    
    
    
    
    
    )
    
    }
    
    const styles =StyleSheet.create({
      containe: {
        width: '100%',
        height: '100%',
        padding: 6,
        flexDirection: 'column',
    
      },
    
      box: {
        width: '100%',
        height: '7%',
        padding: 0.5,
      }
    
      , top: {
        width: '100%',
        height: '6%',
      },
    
      bottom: {
        width: '100%',
        height: '2%',
      }
      ,
    
      inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    
      }
      ,
    
      box1: {
        width: '100%',
        height: '7%',
       }
      ,
    
      box2: {
        width: '100%',
        height: '11%',
        marginTop: 10,
        marginBottom:13,
      }
    
      , inputView: {
        width: "80%",
        backgroundColor: "#AFB396",
        borderRadius: 25,
        height: 30,
        justifyContent: "center",
        padding: 18
      },
       inputView2: {
        width: "80%",
        backgroundColor: "#AFB396",
        borderRadius: 25,
        height: 30,
        justifyContent: "center",
        padding: 18,
        flexDirection:'row'
      },
    
      inputView1: {
        width: "40%",
        backgroundColor: "#AFB396",
        borderRadius: 25,
        height: 30,
        marginBottom: 10,
        justifyContent: "center",
        padding: 15,
        marginLeft: 5
      },
    
      inputView2: {
        flexDirection: "row",
      },
    
      inputText: {
        height: 40,
        color: "black"
      },
    
      forgot: {
        color: "black",
        fontSize: 16
      },
    
      loginBtn: {
        width: "80%",
        backgroundColor: "#540502",
        borderRadius: 25,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
      },
    
      loginText: {
        color: "white"
      }, 
    
      check: { 
        flexDirection: 'row',
         paddingTop: 10 
        },
    
        test: { 
        fontSize: 14,
         paddingTop: 5,
         }

    })

    
    
    
    
    
    
    
    export default Screen1;
    