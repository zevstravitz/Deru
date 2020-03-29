import React, { useReducer } from "react";
import { IPage, IBlock, IMetadata } from "./PageTypes";
import { useImmerReducer } from 'use-immer';
import Block from '../Block/index'


// This is going to be the page that renders the large json will all of the page content
// Will use the js map function and conditionals rendering to render the proper type of
const Page: React.FC<{ page: IPage }> = (props) => {
  const pageReducer = (page: IPage, action: any) => {
    switch(action.type) {
      case 'update':
        return;
      case default:  
        return page;
    }
  }

  const [pageState, setPageState] = useImmerReducer(pageReducer, props.page)

  return (
    <div>
      {pageState['pageContent'].map((block: IBlock, index: number) => (
        <Block id={block.id} type={block.type} content={block.content}/>
      ))}
    </div>
  )
};

export default Page;
