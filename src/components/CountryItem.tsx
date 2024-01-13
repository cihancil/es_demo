import { StyleSheet, Text, View, Image, TouchableOpacity, LayoutAnimation } from 'react-native'
import { COLORS } from '../utils/colors'
import { CountryType } from '../data/countries'
import { useCallback, useState } from 'react'
import DataInfoCarousel from './DataInfoCarousel'

export default function CountryItem({ country, onNavigate }: {
  country: CountryType, onNavigate: any,
}) {
  const [active, setActive] = useState(false)

  const renderArrowIcon = useCallback(() => <Image
    style={styles.icon}
    source={active
      ? require('../../assets/icon-up-arrow.png')
      : require('../../assets/icon-down-arrow.png')
    }
  />, [active])

  const renderMainContent = useCallback(() => <TouchableOpacity
    style={styles.mainContent}
    onPress={() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
      setActive(!active)
    }}
  >
    <Image
      resizeMode='contain'
      style={styles.flag}
      source={country.image}
    />
    <Text style={styles.labelText}>{country.label}</Text>
    {renderArrowIcon()}
  </TouchableOpacity >, [active, renderArrowIcon])

  const renderInfoIcon = useCallback(() => <TouchableOpacity
    style={styles.infoIconContainer}
    hitSlop={{ bottom: 8, top: 8, right: 8, left: 8 }}
    onPress={() => {
      onNavigate()
    }}>
    <Image
      style={styles.icon}
      source={require('../../assets/icon-info.png')}
    />
  </TouchableOpacity>, [])

  return (
    <View style={styles.container}>
      <View style={StyleSheet.flatten([styles.innerContainer, {
        borderColor: active ? COLORS.action : 'transparent',
      }])}>
        {renderMainContent()}
        {renderInfoIcon()}
      </View>
      {active && <DataInfoCarousel />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    borderWidth: 4,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  labelText: {
    fontWeight: 'bold',
    flex: 1,
  },
  infoIconContainer: {
    paddingRight: 16,
  },
  flag: {
    width: 32,
    height: 32,
    marginRight: 16,
  },
  icon: {
    width: 16,
    height: 16,
  },
})