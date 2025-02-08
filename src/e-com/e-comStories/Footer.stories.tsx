import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../../components/shared/Footer/Footer';
import '../../index.css';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer />;

export const Footerr = Template.bind({});
