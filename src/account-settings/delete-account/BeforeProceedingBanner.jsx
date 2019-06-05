import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-i18n';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hyperlink } from '@edx/paragon';

// Messages
import messages from './messages';

// Components
import { Alert } from '../../common';

const BeforeProceedingBanner = (props) => {
  const { instructionMessageId, intl, supportUrl } = props;

  return (
    <Alert
      className="alert-warning mt-n2"
      icon={<FontAwesomeIcon className="mr-2" icon={faExclamationTriangle} />}
    >
      <FormattedMessage
        id="account.settings.delete.account.before.proceeding"
        defaultMessage="Before proceeding, please {actionLink}."
        description="Error that appears if you are trying to delete your edX account, but something about your account needs attention first.  The actionLink will be instructions, such as 'unlink your Facebook account'."
        values={{
          actionLink: (
            <Hyperlink destination={supportUrl}>
              {intl.formatMessage(messages[instructionMessageId])}
            </Hyperlink>
          ),
        }}
      />
    </Alert>
  );
};

BeforeProceedingBanner.propTypes = {
  instructionMessageId: PropTypes.string.isRequired,
  intl: intlShape.isRequired,
  supportUrl: PropTypes.string.isRequired,
};

export default injectIntl(BeforeProceedingBanner);