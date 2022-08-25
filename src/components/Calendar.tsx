import { Grid, TextField } from '@mui/material';
import { DatePicker, DateTimePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react';
import { useTrackedState, useUpdate } from '../store';

type CalendarProps = {
  index: number;
};

export const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const update = useUpdate();
  const state = useTrackedState();
  const [moment, setMoment] = useState<Date | null>(null);

  const handleChange = (newMoment: any) => {
    setMoment(new Date(newMoment._d));
    update({
      type: 'EDIT_INPUT',
      input: {
        ...state.inputs[props.index],
        moment: newMoment,
        value: newMoment._d,
      },
      index: props.index,
    });
  };

  useEffect(() => {
    if (state.inputs[props.index].moment === undefined) {
      setMoment(null);
    }
  }, [state.inputs[props.index].moment]);

  return (
    <Grid item container xl={12} lg={12} md={12} sm={12} xs={12}>
      <DateTimePicker
        label={`Type or select for ${state.inputs[props.index].label}`}
        value={moment}
        onChange={(newMoment) => handleChange(newMoment)}
        renderInput={(params) => <TextField {...params} />}
      />
    </Grid>
  );
};
