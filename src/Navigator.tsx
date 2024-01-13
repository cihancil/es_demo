import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaView } from 'react-native-safe-area-context'

import CountriesScreen from './screens/CountriesScreen'
import CountryDetailScreen from './screens/CountryDetailScreen'
import { CountryType } from './data/countries'
import CountrySearchBar from './components/CountrySearchBar'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()
export default function Navigator() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Countries'
            component={CountriesScreen}
            options={{
              header: () => <CountrySearchBar />,
            }}
          />
          <Stack.Screen
            name='CountryDetail'
            component={CountryDetailScreen}
            options={{
              title: 'Data Bundle Details',
              headerBackTitleVisible: false,
              headerTintColor: 'black',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, }
})

export type RootStackParamList = {
  Countries: undefined
  CountryDetail: {
    country: CountryType,
  }
}