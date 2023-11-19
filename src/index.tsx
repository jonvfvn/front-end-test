import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import 'normalize.css';
import store from './state';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import {QueueScreen} from './components/QueueScreen/QueueScreen';
import './index.css';
import logo from './qudini-logo.png';
import Content from './components/Content/Content';

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <Container>
        <Navigation>
          <Logo src={logo} alt="Qudini logo"/>
        </Navigation>
        <Content>
          <QueueScreen />
        </Content>
      </Container>
    </Provider>
);
