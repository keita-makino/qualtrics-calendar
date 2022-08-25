import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from './components';
import { Provider } from './store';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const calendarRender = (target: HTMLElement) => {
  const container = document.createElement('div');
  container.setAttribute('id', `MapContainer${target.id}`);

  target.getElementsByClassName('ChoiceStructure')[0].appendChild(container);

  const directionContainer = target.querySelectorAll(
    '[role*=presentation]'
  )[0] as HTMLElement;

  const root = createRoot(document.getElementById(`MapContainer${target.id}`)!);

  root.render(
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Provider>
        <Container directionContainer={directionContainer} />
      </Provider>
    </LocalizationProvider>
  );
  directionContainer.style.display = 'none';
};

(window as any).calendarRender = calendarRender;
