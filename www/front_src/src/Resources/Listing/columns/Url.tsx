import * as React from 'react';

import IconLink from '@material-ui/icons/Link';

import { IconButton, ComponentColumnProps } from '@centreon/ui';

import { path, isNil } from 'ramda';
import { labelUrl } from '../../translatedLabels';

const UrlColumn = ({ row }: ComponentColumnProps): JSX.Element | null => {
  const endpoint = path<string | undefined>(
    ['links', 'externals', 'notes'],
    row,
  );

  if (isNil(endpoint)) {
    return null;
  }

  return (
    <a href={endpoint}>
      <IconButton
        title={labelUrl}
        ariaLabel={labelUrl}
        onClick={(): null => {
          return null;
        }}
      >
        <IconLink fontSize="small" />
      </IconButton>
    </a>
  );
};

export default UrlColumn;
