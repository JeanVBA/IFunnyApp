import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

 export function Login(){
     const navigation = useNavigation();
    return(
      <KeyboardAvoidingView style={styles.background}>
        <View >
            <Image style={styles.logo} source={require('../../assets/logo.png')}/>
        </View>
        <View style={styles.Text}>
            <Text style={{color: '#fff', fontStyle: 'italic', fontSize: 20, margin: 20}}>Já usou o Ifunny? </Text>
          <TouchableOpacity style={styles.botao} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text>sim, já usei o iFunny</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.botao} onPress={() => navigation.navigate("Entrar")}>
              <Text>não,essa é a minha primeira vez</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

