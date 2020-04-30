import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, TabsContainer, TabItem, TabText} from './styled';

export default function Tabs() {
    return(
        <Container>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={45} color="#FFF"/>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
                <TabItem>
                    <TabText>Teste de Scroll</TabText>
                </TabItem>
            </TabsContainer>
        </Container>
    )
}