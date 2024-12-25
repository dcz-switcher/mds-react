import { default as React } from 'react';
import { StoryObj } from '@storybook/react';
declare const meta: {
    component: ({ endAdornment, error, errorText, fullWidth, id, label, optionalText, required, reverse, supportingText, startIcon, type, ...props }: import('./TextField').TextFieldProps) => React.JSX.Element;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const MoreExamples: () => React.JSX.Element;
export declare const Reverse: () => React.JSX.Element;
