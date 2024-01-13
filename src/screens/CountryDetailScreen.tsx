import { StyleSheet, Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../Navigator'

export default function CountryDetailScreen(props: NativeStackScreenProps<RootStackParamList, 'CountryDetail'>) {
  const { country } = props.route.params
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{country.label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 32,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 24,
  }
})