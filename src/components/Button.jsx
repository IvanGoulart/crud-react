import React from "react";


const Button = ({props}) => {
console.log(props);
    return(
<>
        <button type="submit" class="botao submit">{props}</button>

</>
    )
}

export default Button;