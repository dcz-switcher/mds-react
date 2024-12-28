import { StoryObj } from '@storybook/react';
import { default as React } from 'react';
declare const meta: {
    component: ({ variant, title, titleLevel, subTitle, media, }: import('./Card').CardProps) => React.JSX.Element;
    decorators: ((Story: import('@storybook/csf').PartialStoryFn<import('@storybook/react').ReactRenderer, {
        variant?: "basic1" | "basic2" | "compactV" | "compactH" | undefined;
        title?: string | undefined;
        titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
        subTitle?: string | undefined;
        media?: React.ReactNode;
    }>) => React.JSX.Element)[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Compact: Story;
