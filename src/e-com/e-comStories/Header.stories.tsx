// YourComponent.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../../components/shared/Header/Header';
import '../../index.css';

import { MemoryRouter } from 'react-router';

// addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

export default {
  title: 'Header',
  component: Header,
  decorators: [
    (Headerr) => (
      <MemoryRouter>
        <Headerr />
      </MemoryRouter>
    ),
  ], //Wrapping the story inside the router

  // parameters: {
  //   // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: 'fullscreen',
  // },
} as ComponentMeta<typeof Header>;

export const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const LoggedIn = Template.bind({});

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
