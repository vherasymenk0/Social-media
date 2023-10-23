import Axios from '~/services/Axios.service'
import { COUNTRIES_CITIES_CONFIG } from '~/utils/constants/axios.constants'

type AxiosType = typeof Axios

function CountriesCitiesMixin<TBase extends AnyConstructor>(Base: TBase & AxiosType) {
  return class CountriesCities extends Base {
    getAllCountries = (): Promise<void> => this.get('/countries')
  }
}

class ApiWithMixins extends CountriesCitiesMixin(Axios) {}

const CountriesCitiesApi = new ApiWithMixins(COUNTRIES_CITIES_CONFIG)

export default CountriesCitiesApi
