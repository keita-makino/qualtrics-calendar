import styled from '@emotion/styled';
import { Grid, Button, Typography } from '@mui/material';
import React from 'react';
import { useUpdate } from '../store';

export type ClearButtonProps = {};

export const ClearButton: React.FC<ClearButtonProps> = (
  props: ClearButtonProps
) => {
  const update = useUpdate();

  const StyledButton = styled(Button)({
    color: 'white !important',
  }) as typeof Button;

  return (
    <Grid container>
      <Grid item container xl={6} lg={6} md={6} sm={6} xs={6}>
        <StyledButton
          variant={'contained'}
          color={'primary'}
          onClick={() => update({ type: 'CLEAR_INPUT' })}
        >
          <Typography variant={'button'}>Reset Input(s)</Typography>
        </StyledButton>
      </Grid>
    </Grid>
  );
};
