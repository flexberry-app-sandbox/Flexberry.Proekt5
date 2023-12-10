import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдИзмEnum from '../enums/i-i-s-proekt-ед-изм';

export default FlexberryEnum.extend({
  enum: ЕдИзмEnum,
  sourceType: 'IIS.Proekt.ЕдИзм'
});
