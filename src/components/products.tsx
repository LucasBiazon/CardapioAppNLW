import { Image, ImageProps, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";

type DataProps = {
  title: string;
  description: string;
  thumbnail: ImageProps;
}
type ProductsProps = TouchableOpacityProps & {
  data: DataProps;
}
export function Products({data, ...rest}: ProductsProps) {
  return(
    <TouchableOpacity className="w-full flex-row items-center pb-4" {...rest}>
        <Image source={data.thumbnail}  className="h-20 w-20 rounded-md" />
        <View className="flex-1 ml-3">
          <Text className="text-slate-100 text-base font-subtitle flex-1">{data.title}</Text>
          <Text className="text-slate-400 text-xs font-heading leading-5 mt-0.5">{data.description}</Text>
        </View>
    </TouchableOpacity> 
  )

}