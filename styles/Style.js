import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const lightTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ed9d9de5',
      alignItems: 'center',
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
      fontFamily: 'sans-serif-thin'
    },
    text:{
      fontFamily: 'sans-serif-thin'
    }
  });

const darkTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8b3636ed',
      alignItems: 'center',
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
      fontFamily: 'sans-serif-thin'
    },
    text:{
      fontFamily: 'sans-serif-thin'
    }
  });

  export {lightTheme, darkTheme};

