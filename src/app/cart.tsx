import { Header } from '@/components/header'
import { View, Text, ScrollView, Alert }from 'react-native'
import { Products } from '@/components/products'
import { ProductCartProps, useCartStore } from '@/stores/cartStore'
import { FormatCurrency } from '@/utils/functions/format-currency'
import { Input } from '@/components/input'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Button } from '@/components/button'
import { Feather } from '@expo/vector-icons'
import { LinkButton } from "@/components/link-button";
import { ProductProps } from '@/utils/data/products'
export default function Cart(){
  const cartStore = useCartStore()
  const total = FormatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

  function handleProductRemove(product: ProductCartProps){
    Alert.alert('Remover produto', `Deseja remover o produto ${product.title} do carrinho?`, [
      {
        text: 'Cancelar',
      },
      {
        text: 'Remover',
        onPress: () => cartStore.removeToProduct(product)
      }
    
    ])
  }
  return (
    <View className='flex-1 pt-8'>
      <KeyboardAwareScrollView>
      <ScrollView>
        <Header title={'Seu carrinho'} />
        <View className='flex-1 p-5'>
        {cartStore.products.length > 0 ? (
          <View className='border-b border-slate-700 mb-2'>
            {
              cartStore.products.map((product) => (
                <Products key={product.id} data={product} onPress={() => handleProductRemove(product)}/>
              
              ))
            }
          </View>
          ) : (
          <Text className='font-body text-xl text-center animate-bounce my-8  text-slate-400'>
              Seu carrinho está vazio
          </Text>
        )}
        <View className='flex-row  items-center mb-4 mt-5 gap-2'>
          <Text className='font-subtitle text-xl text-slate-100 '>
            Total:
          </Text>
          <Text className='font-semibold text-2xl text-sky-200'>
            {total}
          </Text>
        </View>
        <Input placeholder='Informe o indereço de entrega'/>
        </View>
      </ScrollView>
      </KeyboardAwareScrollView>
      <View className='p-5 gap-5'>
        <Button >
          <Button.Text>Finalizar compra</Button.Text>
          <Button.Icon > 
            <Feather name='arrow-right-circle' size={20} color='white' />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar" href={"/"}/>

      </View>
    </View>
  )
}