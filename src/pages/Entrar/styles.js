import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    image:{
      flex: 1,
       width: 90,
       height: 90,
       resizeMode: 'stretch'
    },
    background: { 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000'
    },
    escribe:{
        justifyContent: 'center',
       alignItems: 'center'
    },
    descriptions:{
      marginLeft:10,
      justifyContent: 'center',
      alignItems:'center',
    },
    enter:{
        color: '#fff', 
        fontStyle: 'italic', 
        fontSize: 20,
        margin: 20,
    },
    coments:{
        color: '#808080',
        fontSize: 10,
    },
    email:{
      backgroundColor: '#000',
      borderColor: '#fff',
      borderWidth: 2,
      marginBottom: 5,
      margin: 20,
      borderRadius: 20,
      padding: 10,
      width: 300,
      alignItems: 'center'
    },
    google:{
      backgroundColor: '#fff',
      marginBottom: 5,
      margin: 20,
      borderRadius: 20,
      padding: 10,
      width: 300,
      alignItems: 'center'
    },
    apple:{
      backgroundColor: '#fff',
      marginBottom: 5,
      margin: 20,
      borderRadius: 20,
      padding: 10,
      width: 300,
      alignItems: 'center'
    },
    facebook:{
      backgroundColor: '#0000FF',
      marginBottom: 5,
      margin: 20,
      borderRadius: 20,
      padding: 10,
      width: 300,
      alignItems: 'center'
    },
    twitter:{
      backgroundColor: '#4169E1',
      marginBottom: 5,
      margin: 20,
      borderRadius: 20,
      padding: 10,
      width: 300,
      alignItems: 'center'
    },
    xes:{
        color: '#808080', 
        fontSize: 30,
        marginLeft: 160
    },
    });
    export default styles;