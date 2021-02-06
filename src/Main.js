import {createStackNavigator} from '@react-navigation/stack';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Splash from './Splash';
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Forget from './forget'
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import SideMenu from './SideMenu'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Main = createStackNavigator();
const Drawer = createDrawerNavigator();



function Routes() {
    return (
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Donor" component={Screen1} />
          <Drawer.Screen name="Procurer" component={Screen2} />

        </Drawer.Navigator>
    );
  }






const MainNavigator=()=>{
    return(
<NavigationContainer>
    <Main.Navigator>
<Main.Screen name = "Splash" component = {Splash} options={{ headerShown: false }}/>
<Main.Screen name = "Login" component = {Login} options={{ headerShown: false }}/>
<Main.Screen name = "Signup" component = {Signup} options={{ headerShown: false }}/>
<Main.Screen name = "Home" component = {Routes} options={{ headerShown: false }}/>
<Main.Screen name = "Forget" component = {Forget} options={{ headerShown: false }}/>

    </Main.Navigator>
</NavigationContainer>


    )
}





export default MainNavigator;