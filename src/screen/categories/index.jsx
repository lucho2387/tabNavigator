import { Button, FlatList, SafeAreaView, Text, View } from 'react-native';
import {CategoryItem, Footer} from '../../components/index'

import { CATEGORIES } from '../../constants/data/index'
import { COLORS } from '../../constants/colors/colors';
import { styles } from './styles';

const Categories = ({ navigation }) => {

  const onSelected = (item) => {
    navigation.navigate('Products', {
      categoryId: item.id,
      title: item.title,
      color: item.color,
    })
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data= {CATEGORIES}
        renderItem={renderItem}
        // id del item
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerStyle}
      />
      <Footer title='Derechos Reservados 2023'/>
    </SafeAreaView>
    
  );
};

export default Categories;
