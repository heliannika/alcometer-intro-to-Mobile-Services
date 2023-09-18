import { StatusBar } from 'expo-status-bar';
import { ScrollView, Switch, Text, TextInput, View } from 'react-native';
import Styles, { lightTheme, darkTheme } from './styles/Style';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';

export default function App() {

  const [theme, setTheme] = useState(false);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);

  const currentTheme = theme ? lightTheme : darkTheme;

  console.log(bottles);

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
        <TextInput 
          style={currentTheme.textInput}
          keyboardType='number-pad'
          value={weight}
          onChangeText={setWeight}
        />
      </View>
      <View>
        <Text style={currentTheme.subheader}>Bottles</Text>
        <NumericInput
          minValue={0}
          value={bottles}
          onChange={setBottles}
        />
      </View>
    </ScrollView>
  );
}
