import React, { Component ,useContext} from 'react';
import { View, Text,Dimensions,Button,StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

import { useNavigation } from '@react-navigation/native';

function Home(props) {
    
    const logoff=()=>{
        auth()
     .signOut()
     .then(() => console.log('User signed out!'));
     props.navigation.navigate('Login');
   }
   
 return (
            
    <View>
      

<View style={{flexDirection:'row',backgroundColor:"#540502"}}>
    <Icon name="menu"  style={[{fontSize:28,color:'#fff',marginVertical:1.8*vh,paddingLeft:5*vw,flex:1}]}
    onPress={() =>props.navigation.openDrawer()}/>
       
           <Text style={{flex:1,paddingTop:2,fontSize:28,paddingBottom:3,color:'#fff'}}>Home</Text>
           <Text style={{flex:1}}></Text>
           
            </View>

     
<ScrollView styles={styles.container1}>
       
       <View style={styles.container} >
       <Text style={{fontWeight:'bold',fontSize:25,justifyContent:'center'}}>Welcome to Blood App</Text>
      
       <Text styles={styles.text1}>
       </Text>
      
      <Text styles={styles.text1}>
      Blood banking is the process that takes place in the lab to make sure that donated blood,
       or blood products, are safe before they are used in blood transfusions and other medical procedures.
        Blood banking includes typing the blood for transfusion and testing for infectious diseases.
      </Text>
      <Text styles={styles.text1}>
       </Text>
      

      <Text styles={styles.text1}>
      Blood banking is the process that takes place in the lab to make sure that donated blood,
       or blood products, are safe before they are used in blood transfusions and other medical procedures.
        Blood banking includes typing the blood for transfusion and testing for infectious diseases.
      </Text>
     
      <Text styles={styles.text1}>
       </Text>
     
      <Text styles={styles.text1}>
      Blood banking is the process that takes place in the lab to make sure that donated blood,
       or blood products, are safe before they are used in blood transfusions and other medical procedures.
        Blood banking includes typing the blood for transfusion and testing for infectious diseases.
      </Text>
      
      <Text styles={styles.text1}>
       </Text>
      
       <Text styles={styles.text1}>
      Blood banking is the process that takes place in the lab to make sure that donated blood,
       or blood products, are safe before they are used in blood transfusions and other medical procedures.
        Blood banking includes typing the blood for transfusion and testing for infectious diseases.
      </Text>
      
      <Text styles={styles.text1}>
       </Text>
      
       <Text styles={styles.text1}>
       </Text>
       <Text styles={styles.text1}>
       </Text>
       <Text styles={styles.text1}>
       </Text>
      
      
       </View>

     

       </ScrollView>
     
               


</View>
            
)

}


    const styles =StyleSheet.create({
        loginBtn:{
            width:"80%",
            backgroundColor:"#540502",
            borderRadius:25,
            height:40,
            alignItems:"center",
            justifyContent:"center",
            
          },
          loginText:{
            color:"white"
          }
          ,content:{
            flex:1,
            paddingTop:20,
            textAlign:'center',
            justifyContent:'center',

          },
        container:{
          flex:1,justifyContent:'center',alignItems:'center',padding:20,
        },
         container1:{
          flex:1,
          justifyContent:'center'
          ,alignItems:'center'
          ,padding:20,
          height:'100%',
          

        }
        ,text1:{
          paddingTop:10,
          justifyContent:'center',
          alignItems:'center',
          fontSize:25,
        }

    })

export default Home;