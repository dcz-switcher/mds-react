import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default"
  }
};

export const Navigation: Story = {
  args: {
    navMenu: <><nav role="navigation" aria-label="menu principal">
                    <ul className="mds-header__menu mds-handleClick-nav-item-btn">
                        <li className="mds-header__menu-item"><button className="mds-btn mds-header__nav-item">menu item<span className="mds-icon__expand-more--right" aria-hidden="true"></span></button></li>
                        <li className="mds-header__menu-item"><button className="mds-btn mds-header__nav-item">menu item<span className="mds-icon__expand-more--right" aria-hidden="true"></span></button></li>
                        <li className="mds-header__menu-item"><button className="mds-btn mds-header__nav-item">menu item<span className="mds-icon__expand-more--right" aria-hidden="true"></span></button></li>
                    </ul>
                </nav></>,
    navMenuPosition : "inside"
  },
  render: (args) => (
    <Header {...args} />
  )
}