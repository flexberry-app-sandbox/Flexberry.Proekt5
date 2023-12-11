import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.proekt.caption'),
          title: i18n.t('forms.application.sitemap.proekt.title'),
          children: [{
            link: 'i-i-s-proekt-список-барж-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-список-барж-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-список-барж-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-proekt-пункт-погрузки-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-пункт-погрузки-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-пункт-погрузки-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-proekt-список-контей-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-список-контей-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-список-контей-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-proekt-клиенты-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-клиенты-l.title'),
            children: null
          }, {
            link: 'i-i-s-proekt-формир-рез-пос-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-формир-рез-пос-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-формир-рез-пос-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-proekt-организация-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-организация-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-proekt-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-докум-постав-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-proekt-формир-распред-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-формир-распред-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-формир-распред-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-proekt-товары-l',
            caption: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-товары-l.caption'),
            title: i18n.t('forms.application.sitemap.proekt.i-i-s-proekt-товары-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})