import type { Meta, StoryObj } from '@storybook/react';
import CopyField from './CopyField';

// On définit précisément le type du Meta pour ton composant
const meta: Meta<typeof CopyField> = {
  title: 'Components/CopyField',
  component: CopyField, // L'erreur disparaît ici car Meta<typeof CopyField> lie les types
  parameters: {
    
  },
  argTypes: {
    // Tu peux définir ici tes contrôles MDS
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'contact@email.com',
    successMessage: 'e-mail copié',
    buttonAriaLabel: 'Copier l\'adresse email',
  },
};