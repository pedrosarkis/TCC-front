import styled from "styled-components";

export const MenuMobile = styled.div``;

export const Menu = styled.div`
    height: 60px;
    display: flex;

    @media (max-width: 700px) {
        justify-content: space-between;
        padding-left: 2px;
        padding-right: 2px;
    }

    @media (min-width: 500px) {
        padding: 5px 5px 10px 50px;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;

        .cell {
            width: 35px;
            @media (min-width: 700px) {
                width: 80px;
            }

            height: 50px;
            display: flex;
            align-items: center;
            transition: width 1s;
            text-overflow: clip;
            overflow: hidden;
            @media (min-width: 500px) {
                margin-left: 20px;
            }

            @media (min-width: 500px) {
                width: 80px;
                height: 50px;
                display: flex;
                align-items: center;
                transition: width 1s;
                text-overflow: clip;
                overflow: hidden;
                margin-left: 20px;
            }

            .icon {
                width: 35px;
                min-width: 35px;
                @media (min-width: 500px) {
                    width: 50px;
                    min-width: 50px;
                }
            }
            p {
                padding-left: 30px;
                font-size: 20px;
                @media (max-width: 700px) {
                    visibility: hidden;
                }
            }
        }
    }

    .cell:hover {
        @media (min-width: 700px) {
            width: 200px;
        }
    }
`;
