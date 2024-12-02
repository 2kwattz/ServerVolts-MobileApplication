import {StyleSheet} from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({

    bodyWrapper:{
        backgroundColor: colors.backgroundWhite,
        flex: 1,
    },

    logoSection:{

        // borderWidth: 4,
        marginTop: 150,
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"center",
    },

    textHeading:{
        fontSize: 28,
        textAlign: "center",
        marginTop: 20,
    },

    loginForm:{
        flex: 0,
        flexDirection: "column",
        marginTop: 60,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonPrimary:{
        marginTop: 20,
        padding: 15,
        backgroundColor: colors.colorPrimary,
        width: 130,
        textAlign: "center",
        borderRadius: 15,
    },
    buttonText:{
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },

    baseInputText:{
        backgroundColor: "white",
        marginBottom: 10,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 300,
    },
});

export default styles;