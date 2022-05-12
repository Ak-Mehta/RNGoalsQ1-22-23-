import React from 'react';
import {Box} from './components/Box';
import {Card} from './components/Card';
import Text from './components/Test/Text';

const Welcome = () => {
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      paddingVertical="xl"
      paddingHorizontal="m"
      mt="mll">
      <Text variant="headline" color={'darkBlue'}>
        Welcome to Shopify-Restyle
      </Text>
      <Box
        flexDirection={{
          phone: 'column',
          tablet: 'row',
        }}
        pt="m">
        <Card m="mll" variant="high" paddingVertical="s" paddingLeft="s">
          <Text variant="headline">hey!</Text>
        </Card>
        <Card m="mll" variant="medium" paddingVertical={'xs'} paddingLeft="s">
          <Text variant="body">Displaying use of Restyle</Text>
        </Card>
      </Box>
    </Box>
  );
};

export default Welcome;
