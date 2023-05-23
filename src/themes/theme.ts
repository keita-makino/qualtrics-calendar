import { createTheme } from '@mui/material';
import { renderTimeViewClock } from '@mui/x-date-pickers';
import type {} from '@mui/x-date-pickers/themeAugmentation';

export const theme = createTheme({
  components: {
    MuiDesktopTimePicker: {
      defaultProps: {
        viewRenderers: {
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        },
      },
    },
    MuiDesktopDateTimePicker: {
      defaultProps: {
        viewRenderers: {
          hours: renderTimeViewClock,
          minutes: renderTimeViewClock,
          seconds: renderTimeViewClock,
        },
      },
    },
  },
});
