import React from "react";
import { IPage, IBlock, IMetadata } from "./PageTypes";
import { useImmerReducer } from 'use-immer';
import { produce } from 'immer';
import Block from '../Block/index'
import { v4 as uuid } from "uuid";


// This is going to be the page that renders the large json will all of the page content
// Will use the js map function and conditionals rendering to render the proper type of
const Page: React.FC<{ page: IPage }> = (props) => {
  const pageReducer = (page: IPage, action: any): any => {
    switch(action.type) {
      case 'addNew':
        const newBlock: IBlock = {
          id: uuid(),
          type: 'text', 
          content: ''
        }
        page['pageContent'].push(newBlock)
        return;
      default:
        return page;
    }
  }



  const [pageState, setPageState] = useImmerReducer(pageReducer, props.page)

  // // Add New Block
  // const addNewPage = () => pageReducer(pageState, { type: 'addNew' });
  // // Remove by Id
  // const page = (id) => {
  //   produce(basePage, draftPage => {
  //     draftPage
  //   })
  // }

  return (
    <div>
      {pageState['pageContent'].map((block: IBlock, index: number) => (
        <Block id={block.id} type={block.type} content={block.content}/>
      ))}
    </div>
  )
};

export default Page;
