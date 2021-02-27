import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    
    caixa: {
       height: Platform.OS === "web" ? "100vh" : "100%"
    },
    fundo: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        color: "white",
        fontSize: 27
    },
    inputs: {
        width: "100%",
        padding: 8
    },
    input: {
        backgroundColor: "white",
        width: "100%",
        padding: 8,
        marginTop: 20,
        textAlign: "center"

    },
    btn: {
        backgroundColor: "#4F4F4F",
        height: 50,
        marginTop: 20,
        padding: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#363636"

    },
    textbtn: {
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
})

export default styles;
