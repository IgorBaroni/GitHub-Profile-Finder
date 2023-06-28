import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
    },
    txt: {
        color: '#FFF',
        marginTop: 80,
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 20,
    },
    container2: {
        backgroundColor: '#2b2b29',
        padding: 20,
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 1.5,
    },
    container2txt: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 5,
    },
    container2txt2: {
        color: '#b6b6b6',
        marginBottom: 5,
    },
    inpubtn: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
    },
    txtinput: {
        color: '#000',
        padding: 5,
        backgroundColor: '#f1f1f1',
        borderRadius: 5,
        width: 200,
    },
    btn: {
        borderRadius: 3,
        marginLeft: 20,
        padding: 10,
        backgroundColor: '#626262',
    }
});