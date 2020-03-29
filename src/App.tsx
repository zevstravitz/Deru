import React from "react";
import './App.scss'

import AppBar from "./components/AppBar";
import Page from './components/Page/index';
import { IPage } from "./components/Page/PageTypes";
import { v4 as uuid } from "uuid";

function App() {
  const page: IPage = {
    metadata: {
      title: '',
      author: '',
      editable: true
    },
    pageContent: [
      {
        id: uuid(),
        type: 'text',
        content: ''
      }
    ]
  }

  return (
    <div className="App">
      <AppBar></AppBar>
      <Page page={page}/>
    </div>
  );
}

export default App;
