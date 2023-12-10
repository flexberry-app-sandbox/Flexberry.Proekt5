import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProektДокумПоставLForm from './forms/i-i-s-proekt-докум-постав-l';
import IISProektКлиентыLForm from './forms/i-i-s-proekt-клиенты-l';
import IISProektОрганизацияLForm from './forms/i-i-s-proekt-организация-l';
import IISProektПунктПогрузкиLForm from './forms/i-i-s-proekt-пункт-погрузки-l';
import IISProektСписокБаржLForm from './forms/i-i-s-proekt-список-барж-l';
import IISProektСписокКонтейLForm from './forms/i-i-s-proekt-список-контей-l';
import IISProektТоварыLForm from './forms/i-i-s-proekt-товары-l';
import IISProektФормирРаспредLForm from './forms/i-i-s-proekt-формир-распред-l';
import IISProektФормирРезПосLForm from './forms/i-i-s-proekt-формир-рез-пос-l';
import IISProektДокумПоставEForm from './forms/i-i-s-proekt-докум-постав-e';
import IISProektКлиентыEForm from './forms/i-i-s-proekt-клиенты-e';
import IISProektОрганизацияEForm from './forms/i-i-s-proekt-организация-e';
import IISProektПунктПогрузкиEForm from './forms/i-i-s-proekt-пункт-погрузки-e';
import IISProektСписокБаржEForm from './forms/i-i-s-proekt-список-барж-e';
import IISProektСписокКонтейEForm from './forms/i-i-s-proekt-список-контей-e';
import IISProektТоварыEForm from './forms/i-i-s-proekt-товары-e';
import IISProektФормирРаспредEForm from './forms/i-i-s-proekt-формир-распред-e';
import IISProektФормирРезПосEForm from './forms/i-i-s-proekt-формир-рез-пос-e';
import IISProektДокумПоставModel from './models/i-i-s-proekt-докум-постав';
import IISProektКлиентыModel from './models/i-i-s-proekt-клиенты';
import IISProektОрганизацияModel from './models/i-i-s-proekt-организация';
import IISProektПунктПогрузкиModel from './models/i-i-s-proekt-пункт-погрузки';
import IISProektСписокБаржModel from './models/i-i-s-proekt-список-барж';
import IISProektСписокКонтейModel from './models/i-i-s-proekt-список-контей';
import IISProektТЧИнфОЗакModel from './models/i-i-s-proekt-т-ч-инф-о-зак';
import IISProektТоварыModel from './models/i-i-s-proekt-товары';
import IISProektФормирРаспредModel from './models/i-i-s-proekt-формир-распред';
import IISProektФормирРезПосModel from './models/i-i-s-proekt-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-proekt-докум-постав': IISProektДокумПоставModel,
    'i-i-s-proekt-клиенты': IISProektКлиентыModel,
    'i-i-s-proekt-организация': IISProektОрганизацияModel,
    'i-i-s-proekt-пункт-погрузки': IISProektПунктПогрузкиModel,
    'i-i-s-proekt-список-барж': IISProektСписокБаржModel,
    'i-i-s-proekt-список-контей': IISProektСписокКонтейModel,
    'i-i-s-proekt-т-ч-инф-о-зак': IISProektТЧИнфОЗакModel,
    'i-i-s-proekt-товары': IISProektТоварыModel,
    'i-i-s-proekt-формир-распред': IISProektФормирРаспредModel,
    'i-i-s-proekt-формир-рез-пос': IISProektФормирРезПосModel
  },

  'application-name': 'Proekt',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Proekt',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Proekt',
          title: 'Proekt'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        proekt: {
          caption: 'Proekt',
          title: 'Proekt',
          'i-i-s-proekt-список-барж-l': {
            caption: 'Список барж',
            title: ''
          },
          'i-i-s-proekt-пункт-погрузки-l': {
            caption: 'Пункт погрузки',
            title: ''
          },
          'i-i-s-proekt-список-контей-l': {
            caption: 'Список контей',
            title: ''
          },
          'i-i-s-proekt-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-proekt-формир-рез-пос-l': {
            caption: 'Формир рез пос',
            title: ''
          },
          'i-i-s-proekt-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-proekt-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-proekt-формир-распред-l': {
            caption: 'Формир распред',
            title: ''
          },
          'i-i-s-proekt-товары-l': {
            caption: 'Товары',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-proekt-докум-постав-l': IISProektДокумПоставLForm,
    'i-i-s-proekt-клиенты-l': IISProektКлиентыLForm,
    'i-i-s-proekt-организация-l': IISProektОрганизацияLForm,
    'i-i-s-proekt-пункт-погрузки-l': IISProektПунктПогрузкиLForm,
    'i-i-s-proekt-список-барж-l': IISProektСписокБаржLForm,
    'i-i-s-proekt-список-контей-l': IISProektСписокКонтейLForm,
    'i-i-s-proekt-товары-l': IISProektТоварыLForm,
    'i-i-s-proekt-формир-распред-l': IISProektФормирРаспредLForm,
    'i-i-s-proekt-формир-рез-пос-l': IISProektФормирРезПосLForm,
    'i-i-s-proekt-докум-постав-e': IISProektДокумПоставEForm,
    'i-i-s-proekt-клиенты-e': IISProektКлиентыEForm,
    'i-i-s-proekt-организация-e': IISProektОрганизацияEForm,
    'i-i-s-proekt-пункт-погрузки-e': IISProektПунктПогрузкиEForm,
    'i-i-s-proekt-список-барж-e': IISProektСписокБаржEForm,
    'i-i-s-proekt-список-контей-e': IISProektСписокКонтейEForm,
    'i-i-s-proekt-товары-e': IISProektТоварыEForm,
    'i-i-s-proekt-формир-распред-e': IISProektФормирРаспредEForm,
    'i-i-s-proekt-формир-рез-пос-e': IISProektФормирРезПосEForm
  },

});

export default translations;
