import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100px;
    margin-top: 20px;
`;

export const ContainerCad = styled.View`
    flex: 1;
    backgroundColor: #2c3e50;

`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle : {paddingLeft: 10, paddingRight: 20},
    showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
    width: 300px;
    height: 100px;
    backgroundColor: rgba(250, 250, 250, 0.2);
    border-radius: 3px;
    margin-left: 10px;
    padding: 20px;
    justify-content: space-between;

`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #FFF;    
`;
