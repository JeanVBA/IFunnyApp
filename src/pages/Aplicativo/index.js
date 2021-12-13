import React,{useState} from 'react';
import {KeyboardAvoidingView, TouchableOpacity, Image, Text, View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import IFunny from '../../assets/IFunny.png';
import Meme from '../../assets/meme4.jpg';
import Smile from '../../assets/smile.png';
import Coments from '../../assets/coments.png';
let Compartilhar = require ('../../assets/compartilhar.png')

export function Aplicativo(){

const navigation= useNavigation();
const [nome, setNome] = useState([
     {id:1, name:'GuilherdaLampada', smile:14, coments:8, image:'../../assets/meme4.jpg'},
     {id:2, name: 'Xumbinho', smile:20, coments:12, image:'../../assets/meme2.jpg'},
     {id:3, name:'PauloBusanfa', smile:41, coments:22, image:'../../assets/meme1.jpg'}
])

return(
    <KeyboardAvoidingView  style={styles.background}>
           <TouchableOpacity style={styles.destaque}>
               <Text style={styles.TextDestaque}>destacado</Text>
               <Image style={styles.ImgDestaque} source={require('../../assets/seta.png')}/>
           </TouchableOpacity>
  <FlatList 
  pagingEnabled
  horizontal
  keyExtractor={item => item.id}
  data={nome}
  renderItem={({item})=>{ 
       return(
          <View style={styles.back2}>
     <View>
          <TouchableOpacity>
          <Image style={styles.ImageUsuario} source={IFunny}/>
          </TouchableOpacity>
            <Text style={styles.TextUsuario}>{item.name}</Text>

         <TouchableOpacity style={styles.BotaoAderir}>
              <Text style={styles.TextAderir}>Aderir</Text>
         </TouchableOpacity>
           <View>
            <Image style={styles.ImgMeme} source={Meme}/>
           </View>
       <View style={styles.LocationSmile}>
            <TouchableOpacity>
                <Image style={styles.ImgSmile} source={Smile}/>
           </TouchableOpacity>
           <Text style={styles.LikeSmile}>{item.smile}</Text>
       </View>

       <View style={styles.LocationComents}>
            <TouchableOpacity>
              <Image style={styles.Coments} source={Coments}/>
            </TouchableOpacity>
         <Text style={styles.NumComents}>{item.coments}</Text>
            <TouchableOpacity>
              <Image style={styles.Compartilhar} source={Compartilhar}/>
            </TouchableOpacity>
       </View> 
</View>

</View>     
       )
  }}
  
  />
     
   </KeyboardAvoidingView>
)
}