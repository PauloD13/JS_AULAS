import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [errors, setErrors] = useState({});
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [genero, setGenero] = useState("masc");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [dataSelecionada, setDataSelecionada] = useState(false);

  // Função para calcular a idade exata com base no dia, mês e ano
  const calcularIdade = (dataNasc) => {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    
    // Se o mês atual for menor que o mês de nascimento, ou se for o mesmo mês mas o dia atual for menor, diminui 1 ano
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    return idade;
  };

  const isMaiorDeIdade = dataSelecionada && calcularIdade(date) >= 18;

  const isFormValid =
    nome.trim() &&
    email.trim() &&
    /\S+@\S+\.\S+/.test(email) &&
    sliderValue > 0 &&
    isMaiorDeIdade;

  const validate = () => {
    let newErrors = {};

    if (!nome.trim()) {
      newErrors.nome = "Nome é obrigatório";
    }

    if (!email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email inválido";
    }

    if (sliderValue <= 0) {
      newErrors.slider = "Defina um limite maior que zero";
    }

    // Validação da idade
    if (!dataSelecionada) {
      newErrors.date = "Selecione uma data";
    } else if (calcularIdade(date) < 18) {
      newErrors.date = "É necessário ter mais de 18 anos";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    const generoFormatado = genero === "masc" ? "Masculino" : "Feminino";
    const dataFormatada = date.toLocaleDateString("pt-BR");

    const mensagem =
      `Nome: ${nome}\n` +
      `Email: ${email}\n` +
      `Gênero: ${generoFormatado}\n` +
      `Data de Nasc.: ${dataFormatada}\n` +
      `Limite: R$ ${sliderValue.toFixed(2)}`;

    Alert.alert("Dados informados com sucesso!", mensagem);
  };

  const onChangeDate = (event, selectedDate) => {
    setOpen(false);
    if (selectedDate) {
      setDate(selectedDate);
      setDataSelecionada(true);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <StatusBar style="light" backgroundColor="#2b2a2a" />

      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Entre na sua conta</Text>

          <TextInput
            style={[styles.input, errors.nome && styles.inputError]}
            placeholder="Nome Completo"
            value={nome}
            onChangeText={setNome}
          />
          {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          <View style={styles.rowContainer}>
            <View style={styles.pickerContainer}>
              <Picker 
                style={styles.picker}
                selectedValue={genero}
                onValueChange={(itemValue) => setGenero(itemValue)}
              >
                <Picker.Item label='Masculino' value='masc'/>
                <Picker.Item label='Feminino' value='feme'/>          
              </Picker>
            </View>

            <TouchableOpacity
              style={[styles.btnDate, errors.date && styles.inputError]}
              activeOpacity={0.75}
              onPress={() => setOpen(true)}
            >
              <Text style={styles.btnTextPicker}>
                {dataSelecionada
                  ? date.toLocaleDateString("pt-BR")
                  : "Data Nasc."}
              </Text>
            </TouchableOpacity>
          </View>
          
          {/* Exibe o erro de data abaixo da linha do botão */}
          {errors.date && (
            <Text style={[styles.errorText, { alignSelf: 'flex-end', marginRight: '5%' }]}>
              {errors.date}
            </Text>
          )}

          {open && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}

          <TouchableOpacity
            style={[styles.btnSubmit, !isFormValid && styles.btnDisabled]}
            activeOpacity={0.75}
            onPress={handleLogin}
            disabled={!isFormValid}
          >
            <Text style={styles.btnTextSubmit}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sliderContainer}>
          <Text style={styles.sliderTitle}>Limite desejado:</Text>
          <Slider
            style={{ width: 280, height: 40 }}
            minimumValue={0}
            maximumValue={100000}
            step={100}
            minimumTrackTintColor="#195faf"
            maximumTrackTintColor="#000000"
            onValueChange={(value) => setSliderValue(value)}
            value={sliderValue}
          />

          <Text style={styles.sliderValueText}>
            R$ {sliderValue.toFixed(2)}
          </Text>
          {errors.slider && (
            <Text style={[styles.errorText, { marginLeft: 0, marginTop: 5 }]}>
              {errors.slider}
            </Text>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2b2a2a",
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  infoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(161, 152, 152)",
    paddingVertical: 20,
    width: "85%",
    marginBottom: 20,
    borderRadius: 8,
    borderColor: "#575656",
    borderWidth: 2,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#333",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 7,
    color: "#333",
    fontSize: 16,
    paddingHorizontal: 15,
    fontWeight: "500",
    width: "90%",
    height: 50,
    borderRadius: 5,
  },
  rowContainer: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 8,
  },
  pickerContainer: {
    flex: 1,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    overflow: 'hidden', 
  },
  picker: {
    flex: 1,
    color: '#333',
    width: '100%',
  },
  btnDate: {
    backgroundColor: "#ffffff",
    height: 50, // Ajustei a altura para ficar igual ao Picker
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5, // Ajustei para 5 para casar com o Picker e os inputs
    marginLeft: 10,
  },
  btnTextPicker: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  btnSubmit: {
    backgroundColor: "green",
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#155812",
    marginTop: 20,
  },
  btnTextSubmit: {
    fontSize: 20,
    color: "#302e2e",
    fontWeight: "bold",
  },
  sliderContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(161, 152, 152)",
    paddingVertical: 15,
    width: "85%",
    borderRadius: 8,
    borderColor: "#575656",
    borderWidth: 2,
  },
  sliderTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  sliderValueText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#195faf",
    marginTop: 5,
  },
  inputError: {
    borderWidth: 2,
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: -5,
    marginBottom: 5,
  },
  btnDisabled: {
    backgroundColor: "#555151",
    borderColor: "#777",
  },
});