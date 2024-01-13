import Navigator from './src/Navigator'
import StoreProvider from './src/StoreProvider'
import { Platform, UIManager } from 'react-native';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function App() {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  )
}