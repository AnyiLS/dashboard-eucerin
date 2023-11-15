import React from "react";
/** Styles */
import {StyledButton} from "./Button.styles.ts";

interface IButton {
    children: React.ReactNode;
    onClick?: any;
    color: string;
    text?: string;
}

const Button: React.FC<IButton> = ({children, onClick, color, text}): JSX.Element => {
    return (
        <StyledButton onClick={onClick} color={color} text={text}>
            {children}
        </StyledButton>
    );
}

export default Button;