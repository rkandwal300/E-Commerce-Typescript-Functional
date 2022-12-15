// YourComponent.stories.ts|tsx

import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import '../../index.css'
import Headerr from '../HeaderFooter/Header';

import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";

// addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export default {
title: 'Header',
component: Headerr,
decorators : [(Headerr) => (<MemoryRouter><Headerr/></MemoryRouter>)] //Wrapping the story inside the router

// parameters: {
//   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
//   layout: 'fullscreen',
// },
} as ComponentMeta<typeof Headerr>;

export const Template: ComponentStory<typeof Headerr> = (args) => <Headerr  />;

export const LoggedIn = Template.bind({});


// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

