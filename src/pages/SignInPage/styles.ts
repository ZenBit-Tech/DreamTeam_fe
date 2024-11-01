import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
`;

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
`;

export const RightContainer = styled.div`
    flex: 1;
    max-width: 700px;
    height: 100vh;
    padding: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
