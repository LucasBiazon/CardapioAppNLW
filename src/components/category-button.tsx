import { Text, Pressable, PressableProps, View } from "react-native";
import {clsx} from  'clsx'
interface CategoryButtonProps extends PressableProps{
  title: string;
  isActive?: boolean;
}
export function CategoryButton({ title, isActive, ...rest }: CategoryButtonProps) {
  return (
   <Pressable className={clsx("bg-slate-800 px-4 justify-center rounded-md h-10", isActive && 'border-2 border-sky-100')}
    {...rest}>
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
   </Pressable>
  )
}