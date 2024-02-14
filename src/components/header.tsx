import { View, Image, Text, TouchableOpacity } from "react-native"
import {Feather} from '@expo/vector-icons'
import colors from "tailwindcss/colors";
interface HeaderProps {
  title: string;
  cardQuantItems?:number;
}

export function Header({title, cardQuantItems = 0}: HeaderProps){
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
       <Image source={require("@/assets/logo.png")} className="h-6 w-32"/>
       <Text className="text-white font-heading text-xl mt-2">
         {title}
       </Text>
      </View>
      { cardQuantItems > 0 &&
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-sky-300 h-4 w-4 rounded-full justify-center items-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">{cardQuantItems}</Text>
          </View>
          <Feather name="shopping-bag" color={colors.white} size={24}/>
        </TouchableOpacity>
      }
    </View>
  )
}