import { Children } from "react";

const Button = ({onclick ,children , classname }) =>{
    return(
        <button onClick={onclick} className={`${classname}`} >{children}</button>
    )
}

export default Button