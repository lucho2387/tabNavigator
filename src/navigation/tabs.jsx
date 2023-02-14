import { COLORS } from "../constants/colors/colors";
import CartNavigator from "./cart";
import { FONTS } from "../constants/fonts/fonts";
import Ionicons from '@expo/vector-icons/Ionicons';
import OrdersNavigator from "./orders";
import ShopNavigator from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator 
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
            fontFamily: FONTS.bitterMedium,
            fontSize: 12,
        },
        tabBarActiveTintColor: COLORS.colorCategory1,
        tabBarInactiveTintColor: COLORS.color3,
      }}>
      <BottomTab.Screen 
        name="ShopTab" 
        component={ShopNavigator}
        options= {{
            title: 'Shop',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={focused ? "home" : "home-outline"}
                    size={22}
                    color= {focused ? COLORS.colorCategory1 : COLORS.color10}
                />
            )
        }}
      />
      <BottomTab.Screen 
        name="OrdersTab" 
        component={OrdersNavigator}
        options= {{
            title: 'Orders',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={focused ? "file-tray" : "file-tray-outline"}
                    size={22}
                    color= {focused ? COLORS.colorCategory1 : COLORS.color10}
                />
            )
        }} 
      />
      <BottomTab.Screen 
        name="CartTab" 
        component={CartNavigator}
        options= {{
            title: 'Cart',
            tabBarIcon: ({ focused }) => (
                <Ionicons
                    name={focused ? "cart" : "cart-outline"}
                    size={22}
                    color= {focused ? COLORS.colorCategory1 : COLORS.color10}
                />
            ),
        }} 
      />
    </BottomTab.Navigator>
  );
}


export default TabsNavigator;