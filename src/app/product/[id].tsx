import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router'
import { Redirect } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { FormatCurrency } from "@/utils/functions/format-currency";
import {Button} from "@/components/button"
import { useCartStore } from "@/stores/cartStore";
import {Feather} from '@expo/vector-icons'
import { LinkButton } from "@/components/link-button";
import { useNavigation } from 'expo-router'
export default function Products(){
  const cartStore = useCartStore()
  const {id} = useLocalSearchParams()
  const navigation = useNavigation()
  const products = PRODUCTS.find((product) => product.id === id)

  function handleAddToCart(){
    cartStore.addToCart(products!)
    navigation.goBack()
  }
  if(!products){
    return <Redirect href="/" />
  }
  return(
    <View className="flex-1" > 
      <Image source={products.cover} 
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-5 mb-8 flex-1 ">
      <Text className="text-white text-xl font-heading  ">{products.title}</Text>
        <Text className="text-cyan-300 text-2xl font-heading mb-3 mt-1">{FormatCurrency(products.price)}</Text>
        <Text className="text-slate-400 text-base font-body leading-6 mb-4 ">{products.description}</Text>
        {
          products.ingredients.map((ingredient ) => (
            <Text key={ingredient} className="text-slate-400 text-xs font-body leading-6 mb-1">
              {"\u2022"}
              {ingredient}
            </Text>
          )) 
        }
      </View>
      <View className="p-5 pb-8  gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20}/>
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>
        <LinkButton title="Voltar" href={"/"}/>
      </View>
    </View>
  )
}