import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import {View, Text, FlatList} from 'react-native'
import {CATEGORIES} from '@/utils/data/products'
import { useState } from 'react'
export default function Home(){
  let [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0])
  function handleCategorySelected(selectedCategory: string){
    setSelectedCategory(selectedCategory)
  }
  return (
    <View  >
     <Header cardQuantItems={4} title={'Faça seu pedido'}></Header>
      <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton 
            title={item}
            onPress={() => handleCategorySelected(item)}
            isActive={selectedCategory === item}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
        className='max-h-10  mt-5'
      />
    </View>
  )
}
