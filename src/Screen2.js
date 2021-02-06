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

function Screen2(props) {
 
  const [group, SetGroup] = useState("");

  const save_data = () => {

    const data = database().ref('/').child('Donor').orderByChild('group').equalTo(group);
data.on("value",datasnap=>{console.log(datasnap.val())})
  // data.on('value').then((snapshot) => {
  //   let values = [];
  //   snapshot.forEach((child) => {
  //     values.push(child.val());
  //   });
  //   console.log(values);
  // });






  }
    
    
   
 return (
            
    <View>
      

<View style={{flexDirection:'row',backgroundColor:"#540502"}}>
    <Icon name="menu"  style={[{fontSize:28,color:'#fff',marginVertical:1.8*vh,paddingLeft:5*vw,flex:1}]}
    onPress={() =>props.navigation.openDrawer()}/>
       
           <Text style={{flex:1,paddingTop:2,fontSize:28,color:'#fff',paddingBottom:3}}>Procurer</Text>
           <Text style={{flex:1}}></Text>
           
            </View>

<KeyboardAvoidingView behavior={'height'} style={{flexGrow:1}}>    

<ScrollView contentContainerStyle={{flexGrow:1,height:600}}>



    <View style={styles.containe}>

      <View style={styles.top}>
      </View>

      <View style={styles.box1}>
        <View style={styles.inner}>
        <Text style={{fontSize:35}}>Search a Donor</Text>

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

    
    
    
    
        export default Screen2;
    