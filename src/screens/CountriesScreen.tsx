import { useCallback } from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RootState } from '../stores'
import { COLORS } from '../utils/colors'
import CountryItem from '../components/CountryItem'
import { CountryType } from '../data/countries'
import { RootStackParamList } from '../Navigator'

export default function CountriesScreen() {
  const filteredCountries = useSelector((state: RootState) => state.countries.filteredCountries)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Countries'>>()

  const renderCountryItem = useCallback(
    ({ item }: { item: CountryType }) => <CountryItem
      country={item}
      onNavigate={() => {
        navigation.navigate('CountryDetail', {
          country: item,
        })
      }} />,
    [navigation]
  )

  return (
    <View style={styles.container}>
      {filteredCountries.length == 0 &&
        <View style={styles.noResultContainer}>
          <Text style={styles.noResultText}>No results were found!</Text>
        </View>
      }
      <FlatList
        data={filteredCountries}
        renderItem={renderCountryItem}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.accent,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  seperator: {
    height: 16,
  },
  noResultContainer: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noResultText: {
    fontWeight: 'bold',
    color: 'white',
  },
})