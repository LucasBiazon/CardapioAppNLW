import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import {forwardRef} from 'react'

type DataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
}
type ProductsProps = TouchableOpacityProps & {
  data: DataProps;
}
export const Products = forwardRef<TouchableOpacity, ProductsProps>(({data, ...rest} , ref) =>  {
  return(
    <TouchableOpacity ref={ref} className="w-full flex-row items-center pb-4" {...rest}>
        <Image source={data.thumbnail}  className="h-20 w-20 rounded-md" />
        <View className="flex-1 ml-3">
          <Text className="text-slate-100 text-base font-subtitle flex-1">{data.title}</Text>
          <Text className="text-slate-400 text-xs font-heading leading-5 mt-0.5">{data.description}</Text>
        </View>
    </TouchableOpacity> 
  )

})