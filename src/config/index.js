import * as DEV_KEYS from './dev'
import * as PROD_KEYS from './prod'

const Keys = __DEV__ ? DEV_KEYS : PROD_KEYS

export default Keys
