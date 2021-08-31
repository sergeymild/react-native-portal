import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Portal, PortalProvider } from 'react-native-portal';

const Component = () => {
  return (
    <View>
      <Portal>
        <View style={styles.container}>
          <Text>Portal text </Text>
        </View>
      </Portal>
      <Text style={{marginTop: 100}}>Simple text</Text>
    </View>
  );
};

export default function App() {
  return (
    <>
      <PortalProvider>
        <Component />
      </PortalProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
