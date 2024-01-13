import { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import { COLORS } from '../utils/colors'
import { useDispatch, useSelector } from 'react-redux'
import { countriesActions } from '../stores/countriesStore'

export default function CountrySearchBar() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(countriesActions.setSearchKey({
      searchKey: value
    }))
  }, [value])

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={StyleSheet.flatten([styles.input, {
          }])}
          placeholder='Where next?'
          value={value}
          onChangeText={setValue}
          returnKeyType='search'
          autoCapitalize='none'
          autoCorrect={false}
          cursorColor={COLORS.action}
          selectionColor={COLORS.action}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 44,
    paddingVertical: 4,
    paddingHorizontal: 24,
  },
  input: {
    flex: 1,
    height: 32,
    borderWidth: 1,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
  },
})