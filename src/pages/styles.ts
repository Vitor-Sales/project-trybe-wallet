import styled from 'styled-components';

export const MainLogin = styled.main`
    /* background-image: url('../assets/foto_fundo.png');
    background-color: rgba(0, 128, 0, 0.374); */
    display: flex;
    height: 100vh;
`;

export const LoginCard = styled.div`
    background-color: white;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
    width: 400px;
    height: 300px;
    margin: auto;
    padding: 20px;

    h1 img {
        width: 70%;
        margin-top: 15px;
        margin-bottom: 30px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    label {
        position: absolute;
        color: var(--blueDetails);
        margin-right: 180px;
        margin-bottom: 10px;
    }
    
    input {
        border: 1px solid var(--blueDetails);
        border-radius: 5px;

        margin-bottom: 10px;
        padding: 10px 10px 10px 70px;
    }

    button {
        font-size: 1rem;
        font-weight: 600;

        color: white;
        background-color: var(--blueDetails);
        width: 73%;
        
        border: none;
        border-radius: 5px;

        padding: 10px;
        margin-top: 20px;

        transition: 500ms;

        &:hover {
        background-color: var(--blueHover);
        cursor: pointer;
    }
    } 
`;
