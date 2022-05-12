import React from 'react';
import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme} from '../../../styles/theme';
import {Box} from '../Box';

export const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({themeKey: 'cardVariants'})], Box);

Card.defaultProps = {
  variant: 'medium',
  borderRadius: 8,
  margin: 'xs',
  bg: 'whiteText',
};
