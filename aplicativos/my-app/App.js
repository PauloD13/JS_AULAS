import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar",
      historico: [], // 1. Movemos o histórico para o estado!
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer != null) {
      // Aqui ele vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "Iniciar" });
    } else {
      // Aqui ele vai começar o timer
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ botao: "Parar" });
    }
  }

  limpar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let nhis = this.state.numero;

    // 2. Atualizamos o estado adicionando o tempo atual ao array de histórico
    // Só adicionamos ao histórico se o tempo for maior que 0
    if (nhis > 0) {
      this.setState({
        numero: 0,
        botao: "Iniciar",
        historico: [...this.state.historico, nhis] // O operador '...' copia o array antigo e adiciona o novo valor
      });
    } else {
      // Se já estava zerado, apenas garante que os botões voltem ao normal
      this.setState({ numero: 0, botao: "Iniciar" });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* Confirme se o caminho da sua imagem está correto no seu projeto */}
        <Image style={styles.img} source={require("./assets/cronometro.png")} />

        <View style={styles.glassContainer}>
          <Text style={styles.textoCronometro}>
            {this.state.numero.toFixed(1)}s
          </Text>
        </View>

        {/* 3. Renderizando o histórico usando ScrollView para podermos rolar a tela se houver muitos itens */}
        <ScrollView style={styles.areaHistorico}>
          {this.state.historico.map((tempo, index) => (
            <Text key={index} style={styles.textoHistorico}>
              Tempo {index + 1}: {tempo.toFixed(1)}s
            </Text>
          ))}
        </ScrollView>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Zerar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a6a99",
  },
  glassContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    height: 120,
    width: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 40,
    marginTop: 40, // Adicionado um pouco de margem no topo
  },
  textoCronometro: {
    color: "#FFFFFF",
    fontSize: 60,
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 20,
    height: 50,
    width: '100%', // Alterado para 100% para evitar que ultrapasse a tela
    paddingHorizontal: 20, // Dá um respiro nas laterais
    marginBottom: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 12,
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a6a99",
  },
  // Estilos novos para o histórico
  areaHistorico: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginTop: 20,
    maxHeight: 150, // Limita a altura para não empurrar os botões para fora da tela
    width: 200,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "rgba(11, 26, 54, 0.8)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  textoHistorico: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 2,
  }
});

export default App;