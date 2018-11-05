import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { getFirebase } from 'react-redux-firebase';

import { isAllowedSubscription, validRegex, required } from 'lib/validators';

const submit = ({ url, regex }) => {
  const firebase = getFirebase();

  return firebase.push('subscriptions', {
    url,
    regex,
    parsed: false,
  })
    .then( snapshot => {
      if(snapshot.key.length) {
        console.log('created');
      }
    })
    .catch( err => {
      debugger;
    });
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className='grid-item item-s-24 item-m-12'>
    <label className='margin-bottom-tiny'>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const enhance = compose(
  reduxForm({
    form: 'subscription',
    initialValues: {
      regex: 'MV|M\\V|M/V',
      //url: 'https://www.youtube.com/channel/UCDIhSUQ7tY5yfSKJWeNaPUQ?view_as=subscriber',
    }
  }),
);

const SubscriptionForm = enhance( ({ classes, handleSubmit, change }) => (
  <form className={`container padding-top-micro padding-bottom-micro`} onSubmit={handleSubmit(submit)}>
    <div className={`grid-row justify-end padding-top-micro padding-bottom-micro`}>
      <h1 className='grid-item item-s-24 margin-bottom-small'>Add new subscription</h1>

      <Field
        name='url'
        component={renderField}
        type='text'
        placeholder='URL'
        label='URL'
        validate={[required]}
      />
      <Field
        name='regex'
        component={renderField}
        type='text'
        placeholder='regex'
        label='Regex'
        validate={[required,validRegex]}
      />

      <button type='submit'>Submit</button>
    </div>

  </form>
));

export default SubscriptionForm;
