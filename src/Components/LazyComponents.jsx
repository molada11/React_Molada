import React, { lazy } from 'react';

// Importa tus componentes aquí
const Equipo = lazy(() => import('./Equipo'));
const Instalaciones = lazy(() => import('./Instalaciones'));
const QuienesSomos = lazy(() => import('./QuienesSomos'));
const Mapa = lazy(() => import('./Mapa'));
const CarruselImagenes = lazy(() => import('./CarruselImagenes'));
const ContactUs = lazy(() => import('./ContactUs'));

export { Equipo as LazyEquipo, Instalaciones as LazyInstalaciones, QuienesSomos as LazyQuienesSomos, Mapa as LazyMapa, CarruselImagenes as LazyCarruselImagenes, ContactUs as LazyContactUs };

