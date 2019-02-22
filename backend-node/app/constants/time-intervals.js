import {TIMEOUTS} from '../constants/config.js';

const MILLISECONDS_PER_SEC = 1000;
const SEC_PER_MIN = 60;

export const ACTIVATION_EXPIRATION_INTERVAL = MILLISECONDS_PER_SEC * SEC_PER_MIN * TIMEOUTS.ACTIVATION_TIMEOUT;
export const RESET_PASSWORD_EXPIRATION_INTERVAL = MILLISECONDS_PER_SEC * SEC_PER_MIN * TIMEOUTS.RESET_PASSWORD_TIMEOUT;