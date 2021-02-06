import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;
const user = firebase.auth().currentUser;




const SideMenu = (props) => {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }


    const logoff=()=>{
        auth()
     .signOut()
     .then(() => console.log('User signed out!'));
     props.navigation.navigate('Login');
    }
    

    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                        <Avatar.Image 
                            source={require('../Pro/images/123.jpg')}
                            size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>{user.displayName}</Title>
                            <Caption style={styles.caption}>{user.email}</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>200</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>1K</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section>
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:4*vh,color:'grey'}} />  ) } 
                        label="Home"
                        onPress={ ()=>{props.navigation.navigate('Home')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Screen1"
                        onPress={ ()=>{props.navigation.navigate('Screen1')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="wallet-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Screen2"
                        onPress={ ()=>{props.navigation.navigate('Screen2')} }
                    />
                    
                </Drawer.Section>

              
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:2.8*vh,color:'grey'}} /> ) }
                    label="Sign Out"
                    onPress={() => {logoff()}}
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 4*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });