import * as SplashScreen from 'expo-splash-screen';

// Mantener el splash screen visible hasta que estemos listos
SplashScreen.preventAutoHideAsync();

export const hideSplashScreen = async () => {
  await SplashScreen.hideAsync();
};