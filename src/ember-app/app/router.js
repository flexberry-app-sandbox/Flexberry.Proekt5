import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-proekt-докум-постав-l');
  this.route('i-i-s-proekt-докум-постав-e',
  { path: 'i-i-s-proekt-докум-постав-e/:id' });
  this.route('i-i-s-proekt-докум-постав-e.new',
  { path: 'i-i-s-proekt-докум-постав-e/new' });
  this.route('i-i-s-proekt-клиенты-l');
  this.route('i-i-s-proekt-клиенты-e',
  { path: 'i-i-s-proekt-клиенты-e/:id' });
  this.route('i-i-s-proekt-клиенты-e.new',
  { path: 'i-i-s-proekt-клиенты-e/new' });
  this.route('i-i-s-proekt-организация-l');
  this.route('i-i-s-proekt-организация-e',
  { path: 'i-i-s-proekt-организация-e/:id' });
  this.route('i-i-s-proekt-организация-e.new',
  { path: 'i-i-s-proekt-организация-e/new' });
  this.route('i-i-s-proekt-пункт-погрузки-l');
  this.route('i-i-s-proekt-пункт-погрузки-e',
  { path: 'i-i-s-proekt-пункт-погрузки-e/:id' });
  this.route('i-i-s-proekt-пункт-погрузки-e.new',
  { path: 'i-i-s-proekt-пункт-погрузки-e/new' });
  this.route('i-i-s-proekt-список-барж-l');
  this.route('i-i-s-proekt-список-барж-e',
  { path: 'i-i-s-proekt-список-барж-e/:id' });
  this.route('i-i-s-proekt-список-барж-e.new',
  { path: 'i-i-s-proekt-список-барж-e/new' });
  this.route('i-i-s-proekt-список-контей-l');
  this.route('i-i-s-proekt-список-контей-e',
  { path: 'i-i-s-proekt-список-контей-e/:id' });
  this.route('i-i-s-proekt-список-контей-e.new',
  { path: 'i-i-s-proekt-список-контей-e/new' });
  this.route('i-i-s-proekt-товары-l');
  this.route('i-i-s-proekt-товары-e',
  { path: 'i-i-s-proekt-товары-e/:id' });
  this.route('i-i-s-proekt-товары-e.new',
  { path: 'i-i-s-proekt-товары-e/new' });
  this.route('i-i-s-proekt-формир-распред-l');
  this.route('i-i-s-proekt-формир-распред-e',
  { path: 'i-i-s-proekt-формир-распред-e/:id' });
  this.route('i-i-s-proekt-формир-распред-e.new',
  { path: 'i-i-s-proekt-формир-распред-e/new' });
  this.route('i-i-s-proekt-формир-рез-пос-l');
  this.route('i-i-s-proekt-формир-рез-пос-e',
  { path: 'i-i-s-proekt-формир-рез-пос-e/:id' });
  this.route('i-i-s-proekt-формир-рез-пос-e.new',
  { path: 'i-i-s-proekt-формир-рез-пос-e/new' });
});

export default Router;
