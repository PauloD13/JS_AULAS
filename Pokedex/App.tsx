import { StatusBar } from "expo-status-bar";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";



export default function App() {
  const [pokemonId, setPokemonId] = useState<number>(1); // Padrão: 25
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const srPokemon = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      if (!res.ok) throw new Error(); // Força o erro se a API falhar
      const data = await res.json();
      setPokemon(data);
    } catch (err) {
      console.error("Erro. Carregando dados padrão...");
      // VALOR PADRÃO: Se a API falhar, injetamos um objeto "fake" do Pikachu
      setPokemon({
        name: "pikachu",
        sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" },
        types: [{ type: { name: "electric" } }]
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    srPokemon();
  }, [pokemonId]);



  return (
    <View style={styles.container}>
      <View style={styles.areaCard}>
        {loading ? (
          <ActivityIndicator size="large" color="#ef5350" />
        ) : (
          <>
            <View style={styles.imgContainer}>
              <Image source={{ uri: pokemon?.sprites?.front_default }} style={styles.imgPokemon} />
            </View>

            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{pokemon?.name?.toUpperCase()}</Text>
              
              <View style={{ flexDirection: 'row', marginTop: 10, gap: 10 }}>
                {pokemon?.types?.map((item: any, index: number) => {
                  const typeName = item.type.name;
                  const config = colorType[typeName] || colorType.default;

                  return (
                    <View 
                      key={index} 
                      style={[styles.tipo, { backgroundColor: config.color, flexDirection: 'row', alignItems: 'center', gap: 5 }]}
                    >
                      <MaterialCommunityIcons name={config.icon} size={16} color="white" />
                      <Text style={{ color: 'white', fontWeight: 'bold' }}>
                        {typeName.toUpperCase()}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </>
        )}
      </View>
      <View style={styles.areaBotoes}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => pokemonId > 1 && setPokemonId(pokemonId - 1)}
        >
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setPokemonId(pokemonId + 1)}
        >
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>

      <View>

      </View>

      <StatusBar style="auto" />
    </View>
  );
}
const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#80acb4",
    alignItems: "center",
    paddingTop: 180,
  },
  areaCabecalho: {
    height: 100,
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 90,
    resizeMode: "contain",
  },
  areaCard: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 30,
  },
  imgContainer: {
    backgroundColor: "#e0e0e0",
    borderRadius: 200,
  },
  imgPokemon: {
    width: 300,
    height: 300,
    
  },
  infoContainer: {
    alignItems: "center",
    marginTop: 15,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  tipo: {
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#666", // Aqui você poderia mudar a cor por tipo futuramente
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    overflow: "hidden",
    fontWeight: "bold",
  },
  areaBotoes: {
    flexDirection: "row",
    backgroundColor: '#fff',
    borderWidth: 15,
    borderColor: '#fff',
    borderRadius: 20,
    gap: 20,
  },
  btn: {
    width: 120,
    height: 45,
    backgroundColor: "#ef5350",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

const colorType: any = {
  bug: { color: '#bad869', backColor:'#a2c04e', cardColor:'#c7e081c5', icon: 'bug'},
  dark: { color: '#272525', icon: 'dark' },
  dragon: { color: '#1b58a8', icon: 'dragon' },
  electric: { color: '#f3d23b', icon: 'flash' },
  fairy: { color: '#c779d1', icon: 'fairy' },
  fighting: { color: '#aa4141', icon: 'fighting' },
  fire: { color: '#ff9c54', icon: 'fire' },
  flying: { color: '#9dd0e4', icon: 'flying' },
  ghost: { color: '#5269ac', icon: 'ghost' },
  grass: { color: '#63bb5b', icon: 'leaf' },
  ground: { color: '#ce8352', icon: 'ground' },
  ice: { color: '#44d6db', icon: 'ice' },
  poison: { color: '#8349a5', icon: 'poison' },
  psychic: { color: '#d47e8a', icon: 'psychic' },
  rock: { color: '#c9b88c', icon: 'rock' },
  steel: { color: '#4c739e', icon: 'steel' },
  water: { color: '#4d90d5', icon: 'water' },

  default: { color: '#666', icon: 'help-circle' }
};
