import { StyleSheet, View, useWindowDimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel-v4'

import { COLORS } from '../utils/colors'

export default function DataInfoCarousel() {
  const { width } = useWindowDimensions()
  const CAROUSEL_WIDTH = width - 16 * 2
  const ITEM_WIDTH = CAROUSEL_WIDTH * 0.75
  return (
    <Carousel
      vertical={false}
      data={[1, 2, 3]}
      renderItem={() => <View style={styles.container} />}
      sliderWidth={CAROUSEL_WIDTH}
      itemWidth={ITEM_WIDTH}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginTop: 16,
    borderColor: COLORS.action,
    backgroundColor: COLORS.cardBackground,
    borderRadius: 8,
    borderWidth: 4,
  }
})