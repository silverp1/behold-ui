import moment from 'moment';
import config from '../config/app'

export const formatDate = date => {
  return moment(date).format(config.DATE_FORMAT);
}

export const redirectTo = (href) => {
  window.location.assign(href);
}

export const possiblyParseInt = (string) => {
  let parsedValue = parseInt(string);
  return isNaN(parsedValue) ? string : parsedValue;
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}