import { CategoryButton } from '@/components/category-button'
import { Header } from '@/components/header'
import {View, Text, FlatList, SectionList} from 'react-native'
import {CATEGORIES, MENU} from '@/utils/data/products'
import { useState, useRef } from 'react'
import { Products } from '@/components/products'
import { Link } from 'expo-router'

export default function Home(){
  let [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0])
  const SectionListRef = useRef<SectionList>(null)
  function handleCategorySelected(selectedCategory: string){
    setSelectedCategory(selectedCategory)
    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)
    if(SectionListRef.current){
      SectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true
      })
    }
  }
  return (
    <View className='flex-1 pt-8' >
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
      <SectionList 
        ref={SectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false} 
        renderItem={({ item }) => (
         <Link href={`/product/${item.id}`} asChild>
            <Products data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Text className='text-white text-xl font-heading  mt-8  mb-3'>{title}</Text>
        )}
          className='flex-1 p-5 '
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 100}}
        />

    </View>
  )
}
