import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 10,
        padding:10,
        justifyContent: 'flex-start'

    },
    
    card:{
        width: "100%",
        height:90,
        backgroundColor: "#f2f2f2",
        borderRadius: 10,
        marginTop: 5,
        
        justifyContent:'space-between',
        

    },    
    titulo: {

        fontSize: 30,
        fontWeight: 'bold',
        color: "#F92E",
        paddingTop: 5,
        marginLeft:20,

    },
    autor: {

        fontSize: 20,
        fontWeight: 'bold',
        color: "#F92E",
        marginBottom:5,
        marginTop: 10,
        marginLeft: 20,

    },
    edicao:{
        fontSize: 20,
        color: "#F92E",
        justifyContent:'flex-end',
        marginTop:5,
        marginRight: 20,



    },
    touch:{
         
        height:"100%"
    },
    
    
   
    buttonCadastrar: {
        width: 80,
        height: 80,
        position: "absolute",
        bottom: 30,
        right: 40,
        backgroundColor: "#F92E",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
        
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold",
    },
    inputs: {
        width: "90%",
        borderRadius: 50,
        borderColor: "#ffffff",
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        borderWidth: 1,
        paddingLeft: 10,

    },
    imgLogo: {
        width: 150,
        height: 150,
    },
    botaoGoogle:{
        width: 250, 
        height: 55,
        marginTop: 30,
        marginBottom:50,

    },
    textoBt:{
        fontWeight: 'bold',
        fontSize: 50,
        color: '#f2f2f2',
        alignSelf: 'center'
    }
    
});

export default styles