import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';

export default function App() {
  // Hooks de estado
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Hook para buscar os dados sempre que o ID mudar

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecalho}>
        {/* Certifique-se que o caminho da imagem está correto no seu projeto */}
        <Image
          style={styles.logo}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg' }} 
          // Usei uma URL de exemplo caso seu arquivo local não carregue
        />
      </View>

      <View style={styles.areaCard}>
        {loading ? (
          <ActivityIndicator size="large" color="#f00" />
        ) : (
          <>
            <View style={styles.imgContainer}>
              <Image 
                source={{ uri: pokemon?.sprites.front_default }} 
                style={styles.imgPokemon} 
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{pokemon?.name.toUpperCase()}</Text>
              <Text style={styles.tipo}>Type: {pokemon?.types[0].type.name}</Text>
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
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,
  },
  areaCabecalho: {
    height: 100,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 90,
    resizeMode: 'contain',
  },
  areaCard: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 30,
  },
  imgContainer: {
    backgroundColor: '#e0e0e0',
    borderRadius: 100,
    padding: 10,
  },
  imgPokemon: {
    width: 180,
    height: 180,
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  tipo: {
    fontSize: 18,
    color: '#666',
    fontStyle: 'italic',
  },
  areaBotoes: {
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    width: 120,
    height: 45,
    backgroundColor: '#ef5350',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
