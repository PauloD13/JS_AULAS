import React, { Component, useState} from 'react'
import Slider from '@react-native-community/slider'
import DatePicker from 'react-native-date-picker';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0.5);
  const [text, onChangeText] = useState("Placeholder Text");
  const [number, onChangeNumber] = useState(null);



  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Entre na sua conta</Text>
        <TextInput
        style={styles.inputContainer}
        placeholder='Nome Completo'
        />

        <TextInput
        style={styles.inputContainer}
        placeholder='Email'
        />

        <Picker style={styles.picker}>
          <Picker.Item label='Masculino' value='masc'/>
          <Picker.Item label='Feminino' value='feme'/>           
        </Picker>


        <TouchableOpacity style={styles.btndate} onPress={() => setOpen(true)}>
          <Text style={styles.btnTextPicker}>Data de Nasc.</Text>
        </TouchableOpacity>
        <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(d) => { setOpen(false); setDate(d); }}
        onCancel={() => setOpen(false)}
        />
        
        <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.75}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.sliderContainer}>
        <Text style={styles.sliderText}>Limite:</Text>
        <Slider
        style={{ width: 280, height: 40 }}
        minimumValue={0}
        maximumValue={100000}
        minimumTrackTintColor="#195faf"
        maximumTrackTintColor="#000000"
        onValueChange={(value) => setSliderValue(value)}
        value={sliderValue}
        />
        <Text style={styles.sliderText}>R${sliderValue.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(161, 152, 152)',
    paddingBottom: 5,
    width: 300,
    height: 280,
    margin: 20,
    borderRadius: 8,
    borderColor: '#575656',
    borderWidth: 2
  },
  inputContainer: {
    backgroundColor: 'white',
    margin: 7,
    color: 'rgba(1, 1, 1, 0.25)',
    fontSize: 17,
    padding: 10,
    fontWeight: 520,
    width: 270,
    height: 50,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'green',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#155812',
    marginTop: 10,
  },
  btnText: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold'
  },
  picker: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 20,
  },
  btndate: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -20,
    backgroundColor: '#ececec',
    height: 20,
    width: 100,
    borderRadius: 4,
  },
  btnTextPicker: {
    fontSize: 14,
    alignSelf: 'center'
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(161, 152, 152)',
    height: 110,
    width: 300,
    borderRadius: 8,
    borderColor: '#575656',
    borderWidth: 2
  },
  sliderText: {
    fontSize: 17,
    fontWeight: '510',
  }
});
