import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
    title:string;
}

export function LinkButton({title,...rest}: LinkButtonProps){
  return (
    <Link  
    className="text-white text-center font-body text-base" {...rest}>
      {title}
    </Link>
  )
}