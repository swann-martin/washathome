import React from 'react';
import Field from 'src/components/Field';

import PropTypes from 'prop-types';

import './styles.scss';

const PasswordChangeForm = ({ handleFieldChange, handlePasswordChangeFormSubmit }) => (
    <div>
        <h2>Modifier mon mot de passe</h2>
        <div>
            <form>
                <Field
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleFieldChange}
                    placeholder='Nouveau mot de passe' />
                <Field
                    type='password'
                    name='passwordConfirm'
                    value={passwordConfirm}
                    onChange={handleFieldChange}
                    placeholder='Confirmer le nouveau mot de passe' />
                <button type="submit">Valider</button>
            </form>
        </div>
    </div>
);

PasswordChangeForm.propTypes = {
    handleFieldChange: PropTypes.func,
    handlePasswordChangeFormSubmit: PropTypes.func,
};

PasswordChangeForm.defaultProps = {
    handleFieldChange: () => { },
    handlePasswordChangeFormSubmit: () => { },
};

export default PasswordChangeForm;
