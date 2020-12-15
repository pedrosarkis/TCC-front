import styled from 'styled-components'

export const Switch = styled.button`
    border: none;
    background: transparent;

  .toggle {
    --width: 70px;
    --height: calc(var(--width) / 2);
    --border-radius: calc(var(--height) / 2);

    display: inline-block;
    cursor: pointer;
}


.toggle__input {
    display: none;
}


.toggle__fill {
    position: relative;
    width: var(--width);
    height: var(--height);
    border-radius: var(--border-radius);
    background: #dddddd;
    transition: background 0.2s;
}

.toggle__fill::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: var(--height);
    width: var(--height);
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius);
    transition: transform 0.2s;
}

.toggle__input:checked ~ .toggle__fill {
    background: #00B0FF;
    
}

.toggle__input:checked ~ .toggle__fill::after {
    transform: translateX(var(--height));
}

`