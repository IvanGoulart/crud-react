import React from "react";

const Button = ({props}, onClick) => {
console.log(props);
    return(
        <>
            <button type="submit" onClink = {onClick} class="botao submit">{props}</button>

        </>
    )
}

export default Button;