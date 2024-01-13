import { ImageSourcePropType } from 'react-native'

export type CountryType = {
  key: string
  label: string
  image: ImageSourcePropType
}

const COUNTRIES_DATA =
  [
    {
      key: 'australia',
      label: 'Australia',
      image: require('../../assets/flag-australia.png'),
    },
    {
      key: 'brazil',
      label: 'Brazil',
      image: require('../../assets/flag-brazil.png'),
    },
    {
      key: 'canada',
      label: 'Canada',
      image: require('../../assets/flag-canada.png'),
    },
    {
      key: 'china',
      label: 'China',
      image: require('../../assets/flag-china.png'),
    },
    {
      key: 'france',
      label: 'France',
      image: require('../../assets/flag-france.png'),
    },
    {
      key: 'germany',
      label: 'Germany',
      image: require('../../assets/flag-germany.png'),
    },
    {
      key: 'india',
      label: 'India',
      image: require('../../assets/flag-india.png'),
    },
    {
      key: 'italy',
      label: 'Italy',
      image: require('../../assets/flag-italy.png'),
    },
    {
      key: 'united-states',
      label: 'United States',
      image: require('../../assets/flag-united-states.png'),
    },
  ]
export default COUNTRIES_DATA