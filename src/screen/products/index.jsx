import { FlatList, SafeAreaView, Text } from "react-native";
import {Footer, ProductItem} from '../../components/index'

import { COLORS } from '../../constants/colors/colors';
import {PRODUCTS} from '../../constants/data/products';
import { styles } from "./styles";

const Products = ({ navigation, route }) => {

  const { categoryId, title, color } = route.params;

  // console.warn(categoryId, title, color);


  const onSelected = (item) => {
    navigation.navigate('ProductsDetails', {
      productId: item.id,
      title: item.title,
    })
  };
  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} route={route} />;
  const keyExtractor = (item) => item.id.toString();

  const filteredProducts = PRODUCTS.filter((item) => item.categoryId == categoryId)
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data= {filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        // contentContainerStyle={styles.contentContainerStyle}
      />
      <Footer title='Derechos Reservados 2023'/>
    </SafeAreaView>
  );
};

export default Products;