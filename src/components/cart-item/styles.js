import { Dimensions, StatusBar, StyleSheet } from "react-native";

import {COLORS} from '../../constants/colors/colors';

// import { COLORS } from '../../constants/colors/colors'
// import { FONTS } from "../../constants/fonts/fonts";

// const { height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex:1,
    height: 120,
    backgroundColor: COLORS.color8,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: COLORS.color10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerContainer: {

  },
  header: {
    fontSize: 18,
    color: COLORS.color10,
    textAlign: 'center',
    paddingTop: 10
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingHorizontal: 65,
    paddingTop: 15,
  },
  quantity: {
    fontSize: 14,
    color: COLORS.colorCategory1,
  },
  price: {
    fontSize: 18,
    color: COLORS.colorCategory1,
  },
});