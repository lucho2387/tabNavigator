import { Button, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from '../../constants/colors/colors';
import {Footer} from '../../components/index'
import {PRODUCTS} from '../../constants/data/products';
import { styles } from "./styles";

const ProductDetails = ({ navigation, route }) => {

  const { productId } = route.params;

  const product = PRODUCTS.find((item) => item.id == productId)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerContent}>
        <View  style={styles.description}>
          <Text style={styles.title1}>{product.title}</Text>
          <Text style={styles.title}>{product.description}</Text>
          <Text style={styles.title}>x {product.weight}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Categories')}
          style={styles.button}
          color={COLORS.colorCategory1}
        >
          <Text style={styles.buttonTitle}>Ir a las Categorias</Text>
        </TouchableOpacity>
      </View>
      <Footer title='Derechos Reservados 2023'/>
    </SafeAreaView>
  );
};

export default ProductDetails;