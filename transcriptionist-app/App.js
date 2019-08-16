import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

import Card from "./components/Card";

export default function App() {
  return (
    <Container>
      <TitleBar>
        <Avatar source={require("./assets/avatar.jpg")} />
        <Title>Welcome back, </Title>
        <Name>Ivan</Name>
      </TitleBar>
      <Subtitle>Your Jobs</Subtitle>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  margin-left: 20px;
  position: absolute;
  border-radius: 22px;
  top: 0;
  left: 0;
`;

const Subtitle = styled.Text`
  width: 100%;
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
  text-transform: uppercase;
`;
