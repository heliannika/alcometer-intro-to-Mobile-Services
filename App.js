import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, Switch, Text, TextInput, View, Alert } from 'react-native';
import Styles, { lightTheme, darkTheme } from './styles/Style';
import { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';

export default function App() {

  const [theme, setTheme] = useState(false);
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [BAClevel, setBAClevel] = useState(0);
  // const [BAClevelMessage, setBAClevelMessage] = useState('');
  const [message, setMessage] = useState('');
  const [resultColor, setResultColor] = useState('');

  const genders = ['female', 'male'];

  const [gender, setGender] = useState(genders[0]);

  const currentTheme = theme ? lightTheme : darkTheme;

  // Function to calculate the alcohol level.

  const calculate = () => {

    /* Alerting if weight is not typed, it is not typed in numbers or it is empty. 
    If the weight input is done correctly, then it will do the calculation. */

    if (isNaN(weight) || weight == 0 || weight === '') {
      alert('Weight cannot be empty, a zero or not a number.');
    }
    else {
      let litres = bottles * 0.33;
      let grams = litres * 8 * 4.5;
      let burning = weight / 10;
      let gramsleft = grams - burning * hours;
      let result = 0;

      if (gender === 'female') {
        result = (gramsleft / (weight * 0.6));
      } else if ( gender === 'male') {
        result = (gramsleft / (weight * 0.7));
      }

      // Colors for the BAC level output.

      if (result < 0.2) {
        setResultColor('green');
      }
      else if (result < 0.5 && result > 0.2) {
        setResultColor('yellow');
      }
      else {
        setResultColor('red');
      }

      // Message given if the BAC level is below zero.

      if (result < 0) {
        setMessage('BAC level cannot be negative');
      }

      setBAClevel(result);
    }
  }

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
          onChangeText={setWeight}
        />
      </View>
      <View style={currentTheme.numInputView}>
        <View>
          <Text style={currentTheme.subheader}>Bottles</Text>
          <NumericInput
            rightButtonBackgroundColor= '#df7272ff'
            leftButtonBackgroundColor= '#df7272ff'
            borderColor= '#df7272ff'
            minValue={0}
            value={bottles}
            onChange={setBottles}
          />
        </View>
        <View>
          <Text style={currentTheme.subheader}>Hours</Text>
          <NumericInput
            rightButtonBackgroundColor= '#df7272ff'
            leftButtonBackgroundColor= '#df7272ff'
            borderColor= '#df7272ff'
            minValue={0}
            value={hours}
            onChange={setHours}
          />
        </View>
      </View>
      <View>
        <RadioButton.Group value={gender} onValueChange={g => setGender(g)}>
          {genders.map (g =>
            <View key={g} 
            style={currentTheme.radioButtons}>
              <RadioButton value={g} />
              <Text>{g}</Text>
            </View>
            )}
        </RadioButton.Group>
      </View>
      <Text>{message}</Text>
      <View>
        <Text>BAC level is: </Text>
        <Text style={[{color: resultColor}]}>{BAClevel.toFixed(2)}</Text>
      </View>
      <Pressable
        onPress={() => calculate()}>
        <Text>Calculate</Text>
      </Pressable>
    </ScrollView>
  );
}
