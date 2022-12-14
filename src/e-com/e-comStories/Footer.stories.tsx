import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../index.css'
import Footer from '../HeaderFooter/Footer';

export default {
    title: 'Footer',
    component: Footer,
    parameters: {
  
    layout: 'fullscreen',
    },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer  />;

export const Footerr = Template.bind({});


