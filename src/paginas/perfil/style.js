import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    containerLogo: {
        flex: 2,
        backgroundColor: "#fff",
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom:50,

    },


    text1: {

        fontSize: 45,
        color: "#F92E",
        padding: 5,

    },
    text2: {
        fontSize: 20,
        color: '#3d3d3d',
    },

    imgLogo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth:4,
        borderColor: "#F92E",
        marginBottom:20,

    },
    buttonSeguir: {
        width: '90%',
        height: 40,
        alignSelf:'center',
        borderColor: "#F92E",
        borderWidth:2,
        marginBottom: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
        
      },
      sair:{
        fontSize: 20,
        color: '#ff1f58',
        marginBottom: 20

      }

});

export default styles