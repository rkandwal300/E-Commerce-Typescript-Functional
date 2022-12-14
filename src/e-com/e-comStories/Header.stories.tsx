// YourComponent.stories.ts|tsx

import React from 'react';
import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Headerr from '../HeaderFooter/Header';


export default {
title: 'Header',
component: Headerr,
parameters: {
  // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  layout: 'fullscreen',
},
} as ComponentMeta<typeof Headerr>;

export const Template: ComponentStory<typeof Headerr> = (args) => <Headerr  />;

export const LoggedIn = Template.bind({});


// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

