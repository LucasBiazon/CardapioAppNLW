import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from 'expo-router'
import { PRODUCTS } from "@/utils/data/products";
import { FormatCurrency } from "@/utils/functions/format-currency";
import {Button} from "@/components/button"

import {Feather} from '@expo/vector-icons'
import { LinkButton } from "@/components/link-button";
export default function Products(){
  const {id} = useLocalSearchParams()
  const products = PRODUCTS.filter((product) => product.id === id)[0]

  return(
    <View className="flex-1" > 
      <Image source={products.cover} 
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-5 mb-8 flex-1 ">
        <Text className="text-cyan-300 text-2xl font-heading my-0.5">{FormatCurrency(products.price)}</Text>
        <Text className="text-slate-400 text-base font-body leading-6 mb-6 ">{products.description}</Text>
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
        <Button>
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