import styled from 'styled-components';

export const HeaderTag = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4);

    background-color: white;
    color: var(--blueDetails);
    width: 80%;
    margin: 0 auto;
    padding: 2% 5%;

    div {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    span {
        font-weight: 600;
    }
`;

export const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;

    background-color: rgba(255, 255, 255, 0.802);
    border-radius: 0 0 5px 5px;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.4);

    color: var(--blueDetails);
    width: 80%;
    margin: 0 auto;
    padding: 2% 5%;

    /* div {
        display: flex;
        gap: 20px;
    } */

    input {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid var(--blueDetails);
    }

    select {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid var(--blueDetails);
    }

    button {
        background-color: var(--greenDetails);
        color: white;

        border: none;
        border-radius: 5px;

        font-weight: 600;

        padding: 5px;
        margin: 0 auto;
        width: 30%;
        transition: 500ms;

        &:hover {
            background-color: var(--greenHover);
            cursor: pointer;
        }
}
`;

export const DescriptionContainer = styled.div`
    width: 80%;
    margin: 0 auto 20px;
  
    display: flex;
    justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 15px;

    input {
        width: 300px;
    }

    select {
        width: 200px;
    }
    
  }
`;

export const ValueContainer = styled.div`
    width: 80%;
    margin: 0 auto 20px;
  
    display: flex;
    justify-content: space-between;

    div {
    display: flex;
    align-items: center;
    gap: 15px;

    input {
        width: 150px;
    }

    select {
        width: 100px;
    }
    }
`;

export const TableContainer = styled.div`
    background-color: var(--blueDetails);
    color: white;

    width: 85%;
    margin: 0 auto;
    min-height: 150px;
    padding-top: 40px;

    border-radius: 5px;

    table {
        border-collapse: collapse;
        font-size: .8em;
        
        width: 95%;
        margin: 0 auto 25px;

        thead {
            width: 100%;
            margin-bottom: 10px;
        }

        th {
            padding: 10px 5px;
            border-left: 1px solid white;
        }
        
        td {
            padding: 10px 5px;
        }

        tbody tr {
            border-bottom: 1px solid rgba(255, 255, 255, 0.349);
        }
        
        button {
            background: none;
            border: none;
            margin: 0 10px;

            &:hover {
                cursor: pointer;
            }
        }
    }
`;
