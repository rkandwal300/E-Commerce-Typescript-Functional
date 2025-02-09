//  YourComponent.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Product from '@/components/shared/Product/Product';
import '../../index.css';

export default {
  title: 'Product',
  component: Product,
  argTypes: {
    title: {
      options: ['happy fathers day', ' coffee mug '],
      control: { type: 'radio' },
    },
    price: {
      options: ['39', ' 49', ' 59 '],
      control: { type: 'radio' },
    },
    id: {
      options: ['39', ' 49', ' 59 '],
      control: { type: 'select' },
    },
    rating: {
      // options : [ '39' , ' 49' , " 59 "],
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args) => (
  <Product {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  thumbnail:
    'https://trycasuals.com/wp-content/uploads/2018/06/mug-white-4-300x300.jpg',
  title: ' Coffee Mug ',
  price: 39,
};
//
