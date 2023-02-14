import { StatusBar, StyleSheet } from "react-native";

import { COLORS } from '../../constants/colors/colors';
import { FONTS } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: COLORS.color3,
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    listContainer: {
      flex: 1,
      backgroundColor: COLORS.color8
    },
    footer: {
      backgroundColor: COLORS.color8,
      borderTopColor: COLORS.colorCategory1,
      borderTopWidth: 3,
      paddingVertical: 10,
      paddingHorizontal: 10,
      marginBottom: 10
    },
    buttonConfirm: {
      backgroundColor: COLORS.color4,
      borderRadius: 15,
      paddingHorizontal: 20,
      paddingVertical: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
      // margin: 7

    },
    buttonConfirmText: {
      fontSize: 14,
      color: COLORS.color5,
      fontFamily: FONTS.bitterMedium
    },
    totalContainer: {
      flex: 0.4,
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    totalText: {
      fontSize: 14,
      color: COLORS.colo3,
      fontFamily: FONTS.bitterBold,
      paddingRight: 10
    },
    totalPrice: {
      fontSize: 20,
      color: COLORS.colorCategory2,
      fontFamily: FONTS.bitterBold
    },
});