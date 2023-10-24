import { StyleSheet } from "react-native";
import Constants from "expo-constants";


const lightTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ed9d9de5',
      marginTop: Constants.statusBarHeight+10,
      padding: 20
    },
    switchRow:{
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-end'
    },
    switch:{
      alignSelf: 'flex-start',
    },
    header:{
      fontSize: 50,
      fontFamily: 'sans-serif-thin',
      color: '#8b3636ed',
      textAlign: 'center',
      padding: 5
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
      marginTop: 10,
      marginBottom: 10
    },
    textInput:{
      backgroundColor: '#8b3636ed',
      borderRadius: 5,
      borderColor: '#853636c1',
      borderWidth: 2,
      color: '#ed9d9de5',
      fontFamily: 'sans-serif-thin',
      marginBottom: 10,
      paddingLeft: 5
    },
    numInputView:{
      alignItems: 'center',
    },
    radioButtons:{
      justifyContent: 'space-around',
    },
  });

const darkTheme = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8b3636ed',
      marginTop: Constants.statusBarHeight+10,
      padding: 20
    },
    switchRow:{
      flexDirection: 'row',
      alignItems: 'center',
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
      padding: 5
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
      marginTop: 10,
      marginBottom: 10
    },
    textInput:{
      backgroundColor: '#ed9d9de5',
      borderRadius: 5,
      borderColor: '#853636c1',
      borderWidth: 2,
      color: '#8b3636ed',
      fontFamily: 'sans-serif-thin',
      marginBottom: 10,
      paddingLeft: 5
    },
    numInputView:{
      alignItems: 'center',
    },
    radioButtons:{
      flexDirection: 'row',
      alignItems: 'center',
      color: '#ed9d9de5'
    },
    result:{
      
    }
  });

  export {lightTheme, darkTheme};

