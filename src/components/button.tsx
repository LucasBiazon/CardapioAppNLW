import { TouchableOpacity, TouchableOpacityProps, Text} from "react-native"
import { ReactNode } from "react"

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode
} 

type ButtonTextProps  =  {
  children: React.ReactNode
} 

type ButtonIconProps = {
  children: React.ReactNode
}

function Button({children, ...rest}: ButtonProps){
  return(
    <TouchableOpacity {...rest} className="h-12 bg-sky-400 items-center justify-center mt-10
    flex-row" activeOpacity={0.7}>
      {children}
    </TouchableOpacity>
  )

}

function ButtonText({children}: ButtonTextProps){
  return (
    <Text className="text-black font-heading text-base mx-2">{children}</Text>
  )
}

function ButtonIcon({children}: ButtonIconProps){
  return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon

export { Button} 