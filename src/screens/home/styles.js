import {StyleSheet} from "react-native";
import colors from "../../../theme/colors";

const styles = StyleSheet.create({

    bodyWrapper:{
        flex: 1,
        marginHorizontal: 15,

    },

    heading:{
        marginTop: 30,
        marginBottom: 15,
        fontSize: 20,
        color: colors.black1,
        marginHorizontal: 15,
        fontWeight: "800",
    },

    dashboardPara:{
       fontSize: 19, 
       marginHorizontal: 15,
       fontSize: 15,
       marginBottom: 10,
    },

    dashboardItemsWrapper:{
        flex: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        // borderWidth: 1,

    },

    dashboardWrapperItem:{
        backgroundColor: "white",
        // paddingVertical: 10,
        marginHorizontal: 5,
        marginVertical: 10,
        padding: 10,
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "44%",
        borderRadius: 15,

    },

    dashboardItemsHeading:{
        
    }
});

export default styles;