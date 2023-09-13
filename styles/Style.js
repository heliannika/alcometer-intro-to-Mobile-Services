import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const lightTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ed9d9de5',
      marginTop: Constants.statusBarHeight+10,
    },
    switchRow:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      alignSelf: "flex-end"
    },
    switch:{
      alignSelf:"flex-start",
    },
    header:{
      fontSize: 50,
      fontFamily: 'sans-serif-thin',
      color: '#8b3636ed',
      textAlign: 'center',
      padding: 10
    },
    text:{
      fontFamily: 'sans-serif-thin',
      color: '#8b3636ed',
    },
    subheader:{
      fontFamily: 'sans-serif-thin',
      color: '#8b3636ed',
      fontSize: 25,
      textAlign: 'left',
      padding: 10
    },
  });

const darkTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8b3636ed',
      marginTop: Constants.statusBarHeight+10,
    },
    switchRow:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 5,
      alignSelf: "flex-end"
    },
    switch:{
        alignSelf:"flex-start",
    },
    header:{
      fontSize: 50,
      fontFamily: 'sans-serif-thin',
      color: '#ed9d9de5',
      textAlign: 'center',
      padding: 10
    },
    text:{
      fontFamily: 'sans-serif-thin',
      color: '#ed9d9de5',
    },
    subheader:{
      fontFamily: 'sans-serif-thin',
      color: '#ed9d9de5',
      fontSize: 25,
      textAlign: 'left',
      padding: 10
    },
  });

  export {lightTheme, darkTheme};

