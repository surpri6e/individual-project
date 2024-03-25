import MainScreeen from './screens/MainScreeen';
import styled from 'styled-components/native';

const Container = styled.View`
    display: flex;
    align-items: center;
    padding: 10px;
    padding-bottom: 135px;
    color: black;
`;

export default function App() {
    return (
        <Container>
            <MainScreeen />
        </Container>
    );
}
