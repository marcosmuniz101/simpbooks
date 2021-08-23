import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
  container: { 
    flex:1,
    backgroundColor:'#fff'
  },
  label:{
    width:"90%",
    fontWeight: 'bold',
    marginTop: 18,
    fontSize:16,
    marginLeft: 30,
    color:"#F92E"
  },
  input:{
   width:"90%",
   marginTop:5,
   padding:10,
   height:50,
   borderWidth: 1,
   borderColor:"#F92E",
   borderRadius: 50,
   marginLeft:"auto",
   marginRight:"auto"
  },
  buttonSalvar: {
   width: '90%',
   height: 40,
   alignSelf:'center',
   backgroundColor: "#F92E",
   marginTop:20,
   borderRadius: 50,
   justifyContent: "center",
   alignItems: "center"
   
 },
 buttonExcluir: {
  width: '90%',
  height: 40,
  alignSelf:'center',
  borderColor: '#F92E6A',
  borderWidth:2,
  marginTop:20,
   borderRadius: 50,
  justifyContent: "center",
  alignItems: "center"
  
},
  iconButton:{
   color:"#ffffff",
   fontSize:16,
   fontWeight:"bold",
  }
  
});
 
export default styles