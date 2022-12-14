// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../index.css'
import ProductDetail from '../ProdDetail/ProductDetail';

export default {

    title: 'ProductDetail  Page',
    component: ProductDetail,

    argTypes : {
    title :  {
        options : [ 'happy fathers day' , " coffee mug "],
        control : { type : 'radio'},
    } ,
    price :  {
        options : [ '39' , ' 49' , " 59 "],
        control : { type : 'radio'},
    } ,
    thumbnail:  {
        options : [ 
                'https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg' , 
                'https://trycasuals.com/wp-content/uploads/2018/06/tshirt4-4-300x300.jpg' , 
                " https://trycasuals.com/wp-content/uploads/2018/06/tshirt5-4-300x300.jpg "
                ],
        control : { type : 'select'},
    } ,
    category :  {
        options : [ 'Mugs' , ' T-shirts' ],
        control : { type : 'radio'},
        } ,
    description  :  {
        options : [ 
            'Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.' ,
            ' Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.' , 
            " Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame. "
        ],
        control : { type : 'select'},
    } ,
  }
} as ComponentMeta<typeof ProductDetail>;


const Template: ComponentStory<typeof ProductDetail> = (args) => <ProductDetail {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    story :true,

    // thumbnail  : 'https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg' ,
    // title : ' Coffee Mug ' ,
    // price : '39' ,
    // category : 'Mugs' , 
    // description : ' Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.' ,
};
