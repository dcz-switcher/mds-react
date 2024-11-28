import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ title, subTitle, heroActions, image }: import('./Hero').HeroProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
