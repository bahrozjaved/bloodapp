import React, { useState } from 'react';
import { ScrollView,KeyboardAvoidingView,StyleSheet, Text, View, Alert, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import CheckBox from '@react-native-community/checkbox';
import { TextButton } from './Textbutton'
import database from '@react-native-firebase/database'
import { Picker } from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// function Signup(props){


//   const[fullname,SetFullname]=useState("");
// const[email,SetEmail]=useState("");
// const[mobile,SetMobile]=useState("");
// const[group,SetGroup]=useState("");
// const[age,SetAge]=useState("");
// const[gender,SetGender]=useState("");
// const[country,SetCountry]=useState("");
// const[password,SetPassword]=useState("");
// const[confirmpassword,SetConfirmpassword]=useState("");
// const [toggleCheckBox, setToggleCheckBox] = useState(false);


// const save_data=()=>{

//   let user =
//   {
//     fullname,email,mobile,group,age,gender,country
//   }
//     let nameformat = /^[a-zA-Z]+$/;
//     let  mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     let number_regex=/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
//     let nameValid = nameformat.test(fullname);
//     let emailValid = mailformat.test(email);
//     let no = number_regex.test(mobile);
//     let passwordformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//     let pformat = passwordformat.test(password);
// if(fullname==""|| email==""||mobile==""||group==""||age==""||gender==""||country==""||password=="")
// {
//   Alert.alert('Error','All fields needed to be filled  correctly',[{text:'Close',onPress:()=>console.log('alert closed')}    ])  
// }
// else if(!nameValid)
// {
//   Alert.alert('Error','name must be alphabetic',[{text:'Close',onPress:()=>console.log('alert closed')}
//     ])
// }
// else if(!emailValid)
// {
//       Alert.alert('Error','Email must type correctly',[{text:'Close',onPress:()=>console.log('alert closed')}
//     ])   

// }
// else if (!no){
//   Alert.alert('Error','number must type correctly like 0301-xxxxxxx',[{text:'Close',onPress:()=>console.log('alert closed')}
// ])

// }
// else if(!toggleCheckBox)
// {
//   Alert.alert('Error','Accept Terms and Conditions',[{text:'Close',onPress:()=>console.log('alert closed')}
//     ])

// }
// else if(!pformat){
//   Alert.alert('Error',' a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character',[{text:'Close',onPress:()=>console.log('alert closed')}
//     ])

// }

// else if(password != confirmpassword){
//   Alert.alert('Error','Password and confirm password not match',[{text:'Close',onPress:()=>console.log('alert closed')}
//     ])

// }

// else{


// auth()
//   .createUserWithEmailAndPassword(email, password)
//   .then(() => {
//     console.log('User account created & signed in to continue !');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
//   auth()
//   .signOut()
//   .then(() => console.log('User signed out!'));

//   database().ref('/').child('users').push(user);

//     SetFullname("");
//     SetEmail("");
//     SetMobile("");
//     SetGroup("");
//     SetAge("");
//     SetGender("");
//     SetCountry("");
//      SetPassword("");
//     SetConfirmpassword("");
//     props.navigation.navigate('Login');

// }






//   }



//   return (
//     <View style={styles.container}>    
//         <Image
//       style={styles.logo1}
//       source={require('../assets/logo.png')}
//     />

// <Image
//       style={styles.logo}
//       source={require('../assets/Signup.png')}
//     />
// <View style={styles.inputView} >
//         <TextInput  
//           style={styles.inputText}
//           placeholder="Full Name"
//           value={fullname} 
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetFullname(e)}/>
//       </View>

//       <View style={styles.inputView} >
//         <TextInput  
//           style={styles.inputText}
//           placeholder="Email..." 
//           value={email}
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetEmail(e)}/>
//       </View>

//       <View style={styles.inputView} >
//         <TextInput  
//           style={styles.inputText}
//           value={mobile}
//           maxLength={11}
//           keyboardType="numeric"
//           placeholder="Mobile Number 03xx-xxxxxxx" 
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetMobile(e)}/>
//       </View>

//       <View style={styles.inputView2}>
//       <View style={styles.inputView1} >

//       <Picker 
//       onValueChange = {(e)=>SetGroup(e)}
//       selectedValue={group}
//      >
//         <Picker.Item label="Blood group" value="Group" ></Picker.Item>
//         <Picker.Item label="B+"value="B+" ></Picker.Item>
//         <Picker.Item label="B-"value="B-"></Picker.Item>
//         <Picker.Item label="o+"value="o+"></Picker.Item>
//         <Picker.Item label="o-"value="o-"></Picker.Item>
//         <Picker.Item label="A+"value="A+"></Picker.Item>
//         <Picker.Item label="A-"value="A-" ></Picker.Item>
//         <Picker.Item label="AB+"value="AB+" ></Picker.Item>
//         <Picker.Item label="AB-"value="AB-" ></Picker.Item>
//       </Picker>
//       </View>
//       <View style={styles.inputView1} >
//         <TextInput  
//           style={styles.inputText}
//           placeholder="Age" 
//           maxLength={3}
//           keyboardType="numeric"
//           value={age}
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetAge(e)}/>
//       </View>

//       </View>
//       <View style={styles.inputView2}>

//       <View style={styles.inputView1} >
//       <Picker 
//       onValueChange = {(e)=>SetGender(e)}
//       selectedValue={gender}
//      >
//         <Picker.Item label="Gender" value="Gender" ></Picker.Item>
//         <Picker.Item label="Male" value="Male"></Picker.Item>
//         <Picker.Item label="Female" value="Female"></Picker.Item>
//         <Picker.Item label="Other" value="other"></Picker.Item>

//       </Picker>

//       </View>

//       <View style={styles.inputView1} >
//         <TextInput  
//           style={styles.inputText}
//           placeholder="Country..." 
//           value={country}
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetCountry(e)}/>
//       </View>
//       </View>

//       <View style={styles.inputView} >
//         <TextInput  
//           secureTextEntry
//           style={styles.inputText}
//           placeholder="Password..." 
//           value={password}
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetPassword(e) }/>
//       </View>
//       <View style={styles.inputView} >
//         <TextInput  
//           secureTextEntry
//           style={styles.inputText}
//           value={confirmpassword}
//           placeholder="Confirm Password..." 
//           placeholderTextColor="black"
//           onChangeText={(e)=>SetConfirmpassword(e)}/>
//       </View>
//       <View style={styles.check} >
//       <CheckBox
//         disabled={false}
//         value={toggleCheckBox}
//         onValueChange={(newValue) => setToggleCheckBox(newValue)}    
//       />
//   <Text style={styles.test}>
//   I Accept the terms and Conditions
//   </Text>
//       </View>

//           <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}onPress = {save_data}>SignUp</Text>
//       </TouchableOpacity>

//       <TextButton
//       title={'Already have an Account '}
//       onPress={() => {
//         props.navigation.navigate('Login');
//       }}
//     />

//     </View>

//   );



// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',

// },check:{flexDirection:'row',paddingTop:10},
//  test:{fontSize:14,paddingTop:5,}, logo1: {
//     width: 150,
//     height: 80,
//     marginBottom:30

// }, logo: {
//     width: 120,
//     height: 40,
//     marginBottom:20

// },
//   inputView:{
//     width:"80%",
//     backgroundColor:"#AFB396",
//     borderRadius:25,
//     height:40,
//     marginBottom:10,
//     justifyContent:"center",
//     padding:15
//   },
//    inputView1:{
//     width:"40%",
//     backgroundColor:"#AFB396",
//     borderRadius:25,
//     height:40,
//     marginBottom:10,
//     justifyContent:"center",
//     padding:15,
//     marginLeft:5
//   },
//   inputView2:{
//   flexDirection:"row", 
//   },
//   inputText:{
//     height:50,
//     color:"black"
//   },
//   forgot:{
//     color:"black",
//     fontSize:16
//   },
//   loginBtn:{
//     width:"80%",
//     backgroundColor:"#540502",
//     borderRadius:25,
//     height:50,
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:20,
//   },
//   loginText:{
//     color:"white"
//   }
// });

// export default Signup;
















function Signup(props) {
  const [fullname, SetFullname] = useState("");
  const [email, SetEmail] = useState("");
  const [mobile, SetMobile] = useState("");
  const [group, SetGroup] = useState("");
  const [age, SetAge] = useState("");
  const [gender, SetGender] = useState("");
  const [country, SetCountry] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmpassword, SetConfirmpassword] = useState("");
  const [toggleCheckBox, setToggleCheckBox] = useState(false);


  const [show,setShow] = useState(false)
  const [visible,setVisible] = useState(true)


  const save_data = () => {

    let user =
    {
      fullname, email, mobile, group, age, gender, country
    }
    let nameformat = /^[a-zA-Z]+$/;
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let number_regex = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
    let nameValid = nameformat.test(fullname);
    let emailValid = mailformat.test(email);
    let no = number_regex.test(mobile);
    let passwordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    let pformat = passwordformat.test(password);
    if (fullname == "" || email == "" || mobile == "" || group == "" || age == "" || gender == "" || country == "" || password == "") {
      Alert.alert('Error', 'All fields needed to be filled  correctly', [{ text: 'Close', onPress: () => console.log('alert closed') }])
    }
    else if (!nameValid) {
      Alert.alert('Error', 'name must be alphabetic', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])
    }
    else if (!emailValid) {
      Alert.alert('Error', 'Email must type correctly', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }
    else if (!no) {
      Alert.alert('Error', 'number must type correctly like 0301-xxxxxxx', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }
    else if (!toggleCheckBox) {
      Alert.alert('Error', 'Accept Terms and Conditions', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }
    else if (!pformat) {
      Alert.alert('Error', ' a password between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }

    else if (password != confirmpassword) {
      Alert.alert('Error', 'Password and confirm password not match', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])

    }

    else {


      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in to continue !');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));

      database().ref('/').child('users').push(user);

      SetFullname("");
      SetEmail("");
      SetMobile("");
      SetGroup("");
      SetAge("");
      SetGender("");
      SetCountry("");
      SetPassword("");
      SetConfirmpassword("");
      props.navigation.navigate('Login');

    }
  }

  return (

<KeyboardAvoidingView behavior={'height'} style={{flexGrow:1}}>    

<ScrollView contentContainerStyle={{flexGrow:1,height:600}}>
    <View style={styles.containe}>

      <View style={styles.top}>
      </View>

      <View style={styles.box1}>
        <View style={styles.inner}>
          <Image source={require('../assets/logo.png')} />
        </View>
      </View>


      <View style={styles.box2}>
        <View style={styles.inner}>
          <Image source={require('../assets/Signup.png')} />
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
              placeholder="Email..."
              value={email}
              placeholderTextColor="black"
              onChangeText={(e) => SetEmail(e)} />
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
          <View style={styles.inputView2}>
            <View style={styles.inputView1} >
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
            <View style={styles.inputView1} >
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
      </View>


      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.inputView2}>
            <View style={styles.inputView1} >
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
            <View style={styles.inputView1} >
              <TextInput
                style={styles.inputText}
                placeholder="Country..."
                value={country}
                placeholderTextColor="black"
                onChangeText={(e) => SetCountry(e)} />
            </View>
          </View>
        </View>
      </View>


      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..."
              value={password}
              placeholderTextColor="black"
              onChangeText={(e) => SetPassword(e)} />

<TouchableOpacity>
<MaterialCommunityIcons name={'eye-outline'} 
size={30}
color='black'
/>
</TouchableOpacity>

          </View>
        </View>
      </View>


      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              value={confirmpassword}
              placeholder="Confirm Password..."
              placeholderTextColor="black"
              onChangeText={(e) => SetConfirmpassword(e)} />
          </View>
        </View>
      </View>




      <View style={styles.box}>
        <View style={styles.inner}>
          <View style={styles.check} >
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Text style={styles.test}>
              I Accept the terms and Conditions
            </Text>
          </View>
        </View>
      </View>


      <View style={styles.box}>
        <View style={styles.inner}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={save_data}>SignUp</Text>
          </TouchableOpacity>
        </View>
      </View>



      <View style={styles.box}>
        <View style={styles.inner}>
          <TextButton
            title={'Already have an Account '}
            onPress={() => {
              props.navigation.navigate('Login');
            }}
          />
        </View>
      </View>


      <View style={styles.bottom}>
      </View>


    </View>
    </ScrollView>

    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({

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

});


export default Signup;
