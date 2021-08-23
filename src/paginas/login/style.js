import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingBottom:50,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    containerLogo: {
        flex: 2,
        backgroundColor: "#fff",
        paddingTop :50,
        alignItems: 'center',
        justifyContent: 'center'

    },

    
    text1: {

        fontSize: 45,
        color: "#F92E",
        padding: 20,
        marginBottom: 10,

    },
    text2: {
        fontSize: 20,
        color: '#3d3d3d',
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

    }
    
});

export default styles
