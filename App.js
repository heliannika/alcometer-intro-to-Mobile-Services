import { StatusBar } from 'expo-status-bar';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';
import Styles, { lightTheme, darkTheme } from './styles/Style';
import { useState } from 'react';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [theme, setTheme] = useState(false);

  const currentTheme = theme ? lightTheme : darkTheme;

  return (
    <ScrollView style={currentTheme.container}>
      <View style={currentTheme.switchRow}>
        <Text style={currentTheme.text}>Dark theme / light theme</Text>
        <Switch 
          value={theme}
          onValueChange={ newValue => setTheme(newValue)}
        />
      </View>
      <View>
        <Text style={currentTheme.header}>Alcometer</Text>
      </View>
      <View>
        <Text style={currentTheme.subheader}>Weight</Text>
        <TextInput></TextInput>
      </View>
    </ScrollView>
  );
}
