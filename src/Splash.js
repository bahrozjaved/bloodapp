  import React, { Component,useState, useEffect  } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '212693177132-uqccdbus35sl3k338ht4h87760n6s35l.apps.googleusercontent.com',
});



function Splash(props) {
  

    const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);


    const save_data=()=>{

  // Handle user state changes

  if (initializing) return null;

  if (!user) {
    props.navigation.replace('Login')
  }
  else {
        props.navigation.replace('Home')
  }

    }    


        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source={require('../assets/Splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
    onAnimationFinish={save_data}
                />
            </View>
        )
}

export default Splash;


// onAnimationFinish={() => {
//     this.props.navigation.replace('Login');
// }}