import React from 'react';
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './styles.scss';

const PasswordChangeForm = ({
  password,
  passwordConfirm,
  changeField,
  handlePasswordChangeFormSubmit,
  togglePasswordOn,
}) => (
  <div>
    <h2>Modifier mon mot de passe</h2>
    <div>
      <form onSubmit={handlePasswordChangeFormSubmit}>
        <Field
          type="password"
          name="password"
          value={password}
          onChange={changeField}
          placeholder="Nouveau mot de passe"
        />
        <Field
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={changeField}
          placeholder="Confirmer le nouveau mot de passe"
        />
        <button type="submit" onClick={togglePasswordOn}>Valider</button>
      </form>
    </div>
  </div>
);

PasswordChangeForm.propTypes = {
  changeField: PropTypes.func,
  handlePasswordChangeFormSubmit: PropTypes.func,
  password: PropTypes.string,
  passwordConfirm: PropTypes.string,
  togglePasswordOn: PropTypes.func,
};

PasswordChangeForm.defaultProps = {
  changeField: () => { },
  handlePasswordChangeFormSubmit: () => { },
  password: '',
  passwordConfirm: '',
  togglePasswordOn: () => { },
};

export default PasswordChangeForm;
