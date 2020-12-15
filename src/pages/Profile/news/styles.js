import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    @media (min-width: 700px) {
        justify-content: center;
        align-items: center;
    }
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 36px;
    margin-top: 30px;
    width: 80vw;

    #left-arrow {
        color: #454545;
        font-size: 60px;
    }
    button {
        background: transparent;
        border: none;
    }
    #change-password {
        color: #454545;
        cursor: pointer;
    }

    #blank-space-changepass {
        margin-right: 50px;
    }
    p {
        margin-right: 50px;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 75px;

    h1 {
        font-size: 28px;
    }
    #acess-time {
        #acess-time-icon {
            font-size: 20px;
            margin-right: 10px;
        }
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
            font-size: 14px;
        }
    }

    #news-content {
        margin-top: 40px;
        display: flex;
        width: 50vw;
        @media (max-width: 700px) {
            width: 75vw;
        }
        line-height: 1.5;
        font-size: 16px;
        text-align: justify;
        text-align-last: justify;

        #quote-left {
            margin-right: 20px;
        }

        #quote-right {
            margin-left: 20px;
        }
    }
`;
