
import React from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

 export  function Entrar(){
  const navigation = useNavigation();
    return(
      <KeyboardAvoidingView style={styles.background}>
        <View >
          <Image style={styles.image}
            source={require('../../assets/IFunny.png')}
          />
        </View>
        <View style={styles.botons}>
          <View style={styles.escribe}>
            <Text  style={ styles.enter}>Enter to iFunny </Text>
            <Text  style={styles.coments} >comment on memes, subscribe to fellow accounts, upload content, check notifications and etc.</Text>
          </View>
          <TouchableOpacity style={styles.email} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text style={{color:'#fff'}}>Continue with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.google} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.apple} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.facebook} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text style={{color:'#fff'}}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.twitter} onPress={()=>navigation.navigate("Aplicativo")}>
              <Text style={{color:'#fff'}}>Continue with Twitter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <Text style={styles.xes} onPress={() => navigation.navigate("Login")} >X</Text>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    )
}

