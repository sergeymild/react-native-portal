# react-native-portal

Portal allows to render a component at a different place in the parent tree. You can use it to render content which should appear above other elements, similar to Modal. It requires a `PortalProvider` component to be rendered somewhere in the parent tree.

## Usage

```sh
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Portal, PortalProvider } from 'react-native-portal';

const BasicScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>
          Text won't be teleported!
          <Portal>
            <Text style={styles.text}>
              Text to be teleported to the root host
            </Text>
          </Portal>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  box: {
    padding: 24,
    backgroundColor: '#333',
  },
  text: {
    alignSelf: 'center',
    textAlign: 'center',
    margin: 24,
    backgroundColor: '#eee',
  },
});

export default () => (
  <PortalProvider>
    <BasicScreen />
    {/* Text will be teleported to here */}
  </PortalProvider>
);
```
