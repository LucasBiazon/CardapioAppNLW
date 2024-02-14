import { Header } from '@/components/header'
import {View, Text} from 'react-native'
export default function Home(){
  return (
    <View  >
     <Header cardQuantItems={4} title={'Faça seu pedido'}></Header>
    </View>
  )
}
