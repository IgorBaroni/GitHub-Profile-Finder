import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    user: {
        backgroundColor: '#2b2b29',
        padding: 40,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    img: {
        width: 140,
        height: 140,
        borderWidth: 4,
        borderColor: '#928f8f',
        borderRadius: 100,
    },
    login: {
        color: '#FFF',
        marginTop: 20,
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 15,
    },
    name: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 20,
    },
    bio: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: "500",
        marginBottom: 20,
    },
    location: {
        color: '#dadada',
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 20,
    },
    stats:{
        display: 'flex',
        flexDirection: "column",
    },
    statsText:{
        color: '#fff',
        textAlign: "center",
        marginBottom: 2,
    },
    number1: {
        color: '#fff',
        backgroundColor: '#585855',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 3,
        textAlign: "center",
        marginBottom: 15,
    },
    number2: {
        color: '#fff',
        backgroundColor: '#585855',
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: 3,
        textAlign: "center",
    }
});