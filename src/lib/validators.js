import isRegex from 'validate.io-regexp';

export const validRegex = value => isRegex(value);

export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = max => value =>
	value && value.length > max ? `Must be ${max} characters or less` : undefined

export const minLength = min => value =>
	value && value.length < min ? `Must be ${min} characters or more` : undefined

export const number = value =>
	value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const minValue = min => value =>
	value && value < min ? `Must be at least ${min}` : undefined

export const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
		? 'Invalid email address'
		: undefined

export const alphaNumeric = value =>
	value && /[^a-zA-Z0-9 ]/i.test(value)
		? 'Only alphanumeric characters'
		: undefined

export const isYoutubeChannel = value => {
  isYoutubeChannel(value) ? 'Must be a balid subscription url (Youtube or soundcloud)' : undefined;
}

export const isSoundcloud = value => {
  return /(snd\.sc|soundcloud\.com)/.test(value);
}

export const isAllowedSubscription = value => {
  return isYoutubeChannel(value) || isSoundcloud(value) ? 'Must be a balid subscription url (Youtube or soundcloud)' : undefined;
}
