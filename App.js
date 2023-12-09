import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

function App(){
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  function entrar(){
    setNome(input);
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={(text)=> setInput(text)}
      />

      <Button
        title="Entrar"
        onPress={entrar}
      />

      <Text style={styles.texto}>
        {nome}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    height: 45,
    width: 250,
    borderWidth: .3,
    margin: 10, 
    padding: 10,
    fontSize:20
  },
  texto:{
    fontSize: 20
  }
});

export default App;

