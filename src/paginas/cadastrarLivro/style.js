import { StyleSheet } from 'react-native'
 
const styles = StyleSheet.create({
 container: { 
   flex:1,
   backgroundColor:'#fff'
 },
 label:{
   width:"90%",
   fontWeight: 'bold',
   marginTop: 20,
   fontSize:16,
   marginLeft: 30,
   color:"#eca53b"
 },
 input:{
  width:"90%",
  marginTop:10,
  padding:10,
  height:50,
  borderWidth: 1,
  borderColor:"#eca53b",
  borderRadius: 50,
  marginLeft:"auto",
  marginRight:"auto"
 },
 buttonSalvar: {
  width: '90%',
  height: 40,
  alignSelf:'center',
  backgroundColor: '#eca53b',
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