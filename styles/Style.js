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
      flexDirection: 'row',
    },
    radioButtonText:{
      color: '#8b3636ed',
      marginTop: 10,
      fontFamily: 'sans-serif-thin',
      fontSize: 20,
    },
    radioButtonView:{
      alignItems: 'center',
      padding: 20,
    },
    calculateView:{
      alignItems: 'center',
    },
    baclevel:{
      fontSize: 30,
      fontFamily: 'sans-serif-thin',
      fontWeight: 'bold',
      backgroundColor: '#df7272ff',
    },
    calcButton:{
      padding: 5,
      backgroundColor: '#8b3636ed',
      marginTop: 15,
      height: 40,
      width: 100,
      alignItems: 'center'
    },
    calcButtonText:{
      color: '#ed9d9de5',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 3,
    }
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
    },
    radioButtonText:{
      color: '#ed9d9de5',
      marginTop: 10,
      fontFamily: 'sans-serif-thin',
      fontSize: 20,
    },
    radioButtonView:{
      alignItems: 'center',
      padding: 20,
    },
    calculateView:{
      alignItems: 'center',
    },
    baclevel:{
      fontSize: 30,
      fontFamily: 'sans-serif-thin',
      fontWeight: 'bold',
      backgroundColor: '#df7272ff',
    },
    calcButton:{
      padding: 5,
      backgroundColor: '#ed9d9de5',
      marginTop: 15,
      height: 40,
      width: 100,
      alignItems: 'center'
    },
    calcButtonText:{
      color: '#853636c1',
      fontWeight: 'bold',
      fontSize: 20,
      paddingTop: 3,
    }
  });

  export {lightTheme, darkTheme};

