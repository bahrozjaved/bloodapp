import React,{useState,Component} from 'react';
import { SocialIcon } from 'react-native-elements'
import {KeyboardAvoidingView, StyleSheet, Text, View,Button,Alert, TextInput, Image, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from './Home'
import Signup from './Signup'
import Forget from './forget'
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextButton} from './Textbutton'
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';





// function Login(props){
//   const[email,SetEmail]=useState("");
//   const[password,SetPassword]=useState("");


//   const login=()=>{
//     auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('User account signed in!');
//       SetEmail("");
//       SetPassword("");

//       props.navigation.navigate('Home');

//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }
  
//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
  
//       console.error(error);
//     });

//   }

//   async function onFacebookButtonPress() {
//     try{
//        // Attempt login with permissions
//     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
//     if (result.isCancelled) {
//       throw 'User cancelled the login process';
//     }
  
//     // Once signed in, get the users AccesToken
//     const data = await AccessToken.getCurrentAccessToken();
  
//     if (!data) {
//       throw 'Something went wrong obtaining access token';
//     }
  
//     // Create a Firebase credential with the AccessToken
//     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
//     // Sign-in the user with the credential
//     await auth().signInWithCredential(facebookCredential);
//     props.navigation.navigate('Home');
  
//     }
//     catch(e){
// console.log(e);
//     }
    
//    }


//    async function onGoogleButtonPress() {
//                 try{
//        // Get the users ID token 
//        const { idToken } = await GoogleSignin.signIn();
//        // Create a Google credential with the token
//        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
     
//        // Sign-in the user with the credential
//        await auth().signInWithCredential(googleCredential);
//        props.navigation.navigate('Home');
//                   }
//     catch(e){
//       console.log(e);
//           }
          
//   }




//     return (
//       <View style={styles.container}>    
//           <Image
//         style={styles.logo1}
//         source={require('../assets/logo.png')}
//       />

// <Image
//         style={styles.logo}
//         source={require('../assets/Heading.png')}
//       />

//         <View style={styles.inputView} >
//           <TextInput  
//             style={styles.inputText}
//             placeholder="Email..." 
//             placeholderTextColor="white"
//             value={email}
//             onChangeText={(e)=>SetEmail(e)}/>
            
//         </View>
//         <View style={styles.inputView} >
//           <TextInput  
//             secureTextEntry
//             style={styles.inputText}
//             placeholder="Password..." 
//             value={password}
//             placeholderTextColor="white"
//             onChangeText={(e)=>SetPassword(e) }/>

//             </View>

//         <TextButton
//         title={'Forget Password'}
//         onPress={() => {
//          props.navigation.navigate('Forget');
//         }}
//       />


//         <TouchableOpacity style={styles.loginBtn}>
//           <Text style={styles.loginText}
//           onPress = {login}
//          >LOGIN</Text>
//         </TouchableOpacity>
//       <TextButton
//         title={'Have u an account? Create one'}
//         onPress={() => {
//          props.navigation.navigate('Signup');

//         }}
//       />
// <SocialIcon
// style={{width:"80%",height:50, flexDirection: 'column'}}
//   title='Sign In With Facebook'
//   button
//   type='facebook'
//   onPress={
//     () => onFacebookButtonPress().then(() =>console.log('Signed in with Google!'))

// }

// />
// <SocialIcon style={{width:"80%",height:50, flexDirection: 'column'}}
//               title="Sign In Google Plus"
//               button
//               type="google-plus-official"
//               onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
//      />
//       </View>
      
//     );
//   }






// const Main = createStackNavigator();

// export default class App extends Component{
//   render(){
//     return(
//     <Main.Navigator>
// <Main.Screen name = "Login" component = {Login} options={{ headerShown: false }}/>
// <Main.Screen name = "Signup" component = {Signup} options={{ headerShown: false }}/>
// <Main.Screen name = "Home" component = {Home} options={{ headerShown: false }}/>
// <Main.Screen name = "Forget" component = {Forget} options={{ headerShown: false }}/>

//     </Main.Navigator>

//     )
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height:'100%',

    
// },
//   logo1: {
//     width: 200,
//     height: 100,
//     marginBottom:30
    
// }, logo: {
//     width: 150,
//     height: 60,
//     marginBottom:20
    
// },
//   inputView:{
//     width:"80%",
//     backgroundColor:"#AFB396",
//     borderRadius:25,
//     height:50,
//     marginBottom:10,
//     justifyContent:"center",
//     padding:20
//   },
//   inputText:{
//     height:50,
//     color:"white"
//   },
  
//   loginBtn:{
//     width:"80%",
//     backgroundColor:"#540502",
//     borderRadius:25,
//     height:50,
//     alignItems:"center",
//     justifyContent:"center",
//     marginTop:5,
//   },
//   loginText:{
//     color:"white"
//   }
// });






 function Login(props){

  const[email,SetEmail]=useState("");
  const[password,SetPassword]=useState("");
 //email login
 const [enableshift, SetEnableShift] = useState(false);








 const login=()=>{


if(email==""||password==""){

  Alert.alert('Error', 'Please check the Email and Password', [{ text: 'Close', onPress: () => console.log('alert closed') }
      ])
  console.log("Please fill the username and password");
}
else{
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account signed in!');
      SetEmail("");
      SetPassword("");

      props.navigation.navigate('Home');

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

}
  
  }

  //fb login

  async function onFacebookButtonPress() {
    try{
       // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    await auth().signInWithCredential(facebookCredential);
    props.navigation.navigate('Home');
  
    }
    catch(e){
console.log(e);
    }
    
   }

//google login

   async function onGoogleButtonPress() {
                try{
       // Get the users ID token 
       const { idToken } = await GoogleSignin.signIn();
       // Create a Google credential with the token
       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
     
       // Sign-in the user with the credential
       await auth().signInWithCredential(googleCredential);
       props.navigation.navigate('Home');
                  }
    catch(e){
      console.log(e);
          }
          
  }

  
      
        return (
          <KeyboardAvoidingView behavior={'height'}  contentContainerStyle={{flex:1}}    enabled>   
           <View style={styles.containe}>

<View style={styles.Top}>

<View style={styles.inner}>

</View>

</View>

                    <View style={styles.box1}>

                        <View style={styles.inner}>
                            <Image source={require('../assets/logo.png')}/>
                        </View>

                    </View>





                    <View style={styles.box2}>

<View style={styles.inner}>
<Image source={require('../assets/Heading.png')} />

</View>

</View>
<View style={styles.box}>

<View style={styles.inner}>

         <View style={styles.inputView} >
           <TextInput  
             style={styles.inputText}
             placeholder="Email..." 
             placeholderTextColor="white"
             value={email}
             onChangeText={(e)=>SetEmail(e)}/>
            
         </View>


</View>

</View>


<View style={styles.bottom}>

<View style={styles.inner}>
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
            placeholderTextColor="white"
            onChangeText={(e)=>SetPassword(e) }/>

            </View>

</View>

</View>

<View style={styles.box}>

<View style={styles.inner}>

         <TextButton
        title={'Forget Password'}
        onPress={() => {
         props.navigation.navigate('Forget');
        }}
      />

</View>

</View>
<View style={styles.box}>

<View style={styles.inner}>
         <TouchableOpacity style={styles.loginBtn}>
           <Text style={styles.loginText}
          onPress = {login}
         >LOGIN</Text>
        </TouchableOpacity>

</View>

</View>



<View style={styles.box}>

<View style={styles.inner}>

<TextButton
        title={'Have u an account? Create one'}
        onPress={() => {
         props.navigation.navigate('Signup');

        }}
      />




</View>

</View>


<View style={styles.box}>

<View style={styles.inner}>

<SocialIcon
style={{width:"80%",height:40, flexDirection: 'column'}}
  title='Sign In With Facebook'
  button
  type='facebook'
  onPress={
    () => onFacebookButtonPress().then(() =>console.log('Signed in with facebook!'))

}

/>









</View>

</View>





<View style={styles.box}>

<View style={styles.inner}>
<SocialIcon style={{width:"80%",height:40, flexDirection: 'column'}}
               title="Sign In Google Plus"
              button
              type="google-plus-official"
              onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
     />

</View>

</View>





<View style={styles.bottom}>

<View style={styles.inner}>
</View>
</View>
            </View>       
        
        </KeyboardAvoidingView>
        
        )


    }




const Main = createStackNavigator();

export default class App extends Component{
  render(){
    return(
    <Main.Navigator>
<Main.Screen name = "Login" component = {Login} options={{ headerShown: false }}/>
<Main.Screen name = "Signup" component = {Signup} options={{ headerShown: false }}/>
<Main.Screen name = "Home" component = {Home} options={{ headerShown: false }}/>
<Main.Screen name = "Forget" component = {Forget} options={{ headerShown: false }}/>

    </Main.Navigator>

    )
  }
}




const styles =StyleSheet.create({

containe:{
    width:'100%',
    height:'100%',
    padding: 5,
    flexDirection:'column',
 
},
box:{
    width:'100%',
    height:'8%',
    marginTop:12,
}
,Top:{
  width:'100%',
  height:'2%',
}
,bottom:{
  width:'100%',
  height:'2%',
}
,
inner:{
flex:1,
alignItems:'center',
justifyContent:'center'
}
,
box1:{
    width:'100%',
    height:'10%',
    paddingBottom:5,
}
,
box2:{
    width:'100%',
    height:'15%',
    paddingTop:8
}
,inputView:{
    width:"80%",
    backgroundColor:"#AFB396",
    borderRadius:25,
    height:40,
    marginBottom:5,
    justifyContent:"center",
    padding:20,
  
  },
  inputText:{
    height:40,
    color:"white"
  },
  
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

});











