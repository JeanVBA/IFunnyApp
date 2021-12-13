import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   background: { 
      flex: 1,
      backgroundColor: '#000'
    },
    back2:{
      backgroundColor: '#000'
    },
    destaque:{
      borderColor: '#808080',
      width: 130,
      margin: 1,
      padding: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TextDestaque: {
      color: '#808080',
      fontSize: 20,
      fontWeight: 'bold'
    },
    ImgDestaque:{
       marginTop: 6,
       marginLeft: 5,
       width: 10,
       right: 10,
       resizeMode: 'stretch'
    },
    ImageUsuario:{
      flex: 1,
      marginLeft:10,
      marginTop: 50,
      width: 25,
      height: 25,
      resizeMode: 'stretch',
   },
   TextUsuario:{
      color: '#808080',
      marginTop: -20,
      marginLeft: 40,
      fontWeight: 'bold'
   },
   BotaoAderir:{
      marginTop: -19,
      marginLeft:280,
      marginRight: 30,
      width: 50,
     borderColor: '#808080',
     borderRadius: 20,
     borderWidth: 2,
     alignItems:'center'
   },
   TextAderir:{
      fontWeight: 'bold',
     color: '#808080',
     fontSize: 12,
   },
   ImgMeme:{
      flex: 1,
      marginLeft:10,
      marginTop: 45,
      width: 340,
      height: 400,
      resizeMode: 'stretch',
   },
   LocationSmile: {
     marginLeft:40,
     marginTop:40,
   },
   ImgSmile:{ 
      flex: 1,
      marginLeft:-40,
      marginTop: -25,
      width: 45,
      height: 45,
      resizeMode: 'stretch',

   },
   LikeSmile: {
      marginLeft: 15,
      marginTop: -28,
      fontWeight: 'bold',
      color: '#808080',
   },
   LocationComents: {
     marginLeft:280,
     marginTop: -15,
     
   },
   Coments:{
      flex: 1,
      marginLeft:-60,
      marginTop: -22,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
   },
   NumComents:{
      marginTop: -32,
      fontWeight: 'bold',
      color: '#808080',
      fontSise: 30,
   },
   Compartilhar: {
      flex: 1,
      marginLeft:20,
      marginTop: -35,
      width: 45,
      height: 45,
      resizeMode: 'stretch',
   },
});

export default styles;