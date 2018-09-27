import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss'
import { compose, withReducer, withHandlers, flattenProp } from 'recompose';

// STYLES
import { colorBlue, colorWhite } from 'styl/constants';

const styles = {
};

const enhance = compose(
  flattenProp('formState'),
  withHandlers({
    onSubmit: ({ url, regex, submitForm, dispatch }) => e => {
      e.preventDefault();
      debugger;
      submitForm({ url, regex });
    },
  }),
  injectSheet(styles)
);

const SubscriptionForm = enhance( ({ url, regex, dispatch, classes, onSubmit, onUrlChange, onRegexChange }) => (
  <form className={`container padding-top-micro padding-bottom-micro`} onSubmit={onSubmit}>
    <h1>Add new subscription</h1>
    <div className={`grid-row justify-end padding-top-micro padding-bottom-micro`}>
      <input type="text" placeholder="URL" value={url} onChange={e => onUrlChange(e.target.value)} />
      <input type="text" placeholder="regex" value={regex} onChange={ e => onRegexChange(e.target.value)} />
      <input type="submit" />
    </div>
  </form>
));

export default SubscriptionForm;
