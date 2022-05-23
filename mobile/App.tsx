import 'react-native-gesture-handler';
import { Inter_400Regular, Inter_500Medium, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from './src/theme';
import Widget from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  const [appIsReady, setAppIsReady] = useState(false);

  const onReady = useCallback(() => {
    setAppIsReady(true);
  }, [setAppIsReady]);

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>

      <StatusBar
        style="light"
        backgroundColor="transparent"
        translucent
       />

       <Widget />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
