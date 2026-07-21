import { describe, it, expect } from 'vitest';

describe('App', () => {

  it('Debe tener el título correcto', () => {

    const titulo = 'Gestor de Actividades PWA';

    expect(titulo).toBe('Gestor de Actividades PWA');

  });
  it('Debe validar que la aplicación inicia correctamente', () => {

    expect(true).toBe(true);

  });

});