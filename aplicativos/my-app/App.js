import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar", // Iniciei com 'Iniciar' em vez de null
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
    this.setState({
      numero: 0,
      botao: "Iniciar",
    });
  }

  // O render deve estar DENTRO da classe App
  render() {
    return (
      <View style={styles.container}>


          <Image style={styles.img} source={require("./assets/cronometro.png")} />

        <View style={styles.glassContainer}>

          <Text style={styles.textoCronometro}>
            {this.state.numero.toFixed(1)}s
          </Text>

        </View>


        <View style={styles.btnArea}>
          {/* Adicionei o onPress para os botões funcionarem */}
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
} // Fechamento da classe App aqui

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a6a99",
  },
  // Implementação do efeito Glassmorphism
  glassContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Transparência branca
    height: 120,
    width: 250,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)", // Borda sutil para brilho
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5, // Sombra no Android
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 40,
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
    marginTop: 50,
    height: 50,
    width: 500,
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
});

export default App;
