﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proekt
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Формир распред.
    /// </summary>
    // *** Start programmer edit section *** (ФормирРаспред CustomAttributes)

    // *** End programmer edit section *** (ФормирРаспред CustomAttributes)
    [AutoAltered()]
    [Caption("Формир распред")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормирРаспредE", new string[] {
            "Дата as \'Дата\'",
            "НомерДокРаспр as \'Номер документа распределения\'",
            "ДокумПостав.Клиенты as \'привет\'",
            "ДокумПостав.Организация as \'я\'",
            "ПунктПогрузки.Наименование as \'рада\'",
            "СписокБарж.НомерБаржи as \'ккк\'",
            "СписокКонтей.НаимКонт as \'лллл\'"})]
    [View("ФормирРаспредL", new string[] {
            "Дата as \'Дата\'",
            "НомерДокРаспр as \'Номер док распр\'",
            "ДокумПостав.Клиенты as \'привет\'",
            "ДокумПостав.Организация as \'я\'",
            "ПунктПогрузки.Наименование as \'рада\'",
            "СписокБарж.НомерБаржи as \'ккк\'",
            "СписокКонтей.НаимКонт as \'лллл\'"})]
    public class ФормирРаспред : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомерДокРаспр;
        
        private System.DateTime fДата;
        
        private IIS.Proekt.ДокумПостав fДокумПостав;
        
        private IIS.Proekt.ПунктПогрузки fПунктПогрузки;
        
        private IIS.Proekt.СписокБарж fСписокБарж;
        
        private IIS.Proekt.СписокКонтей fСписокКонтей;
        
        // *** Start programmer edit section *** (ФормирРаспред CustomMembers)

        // *** End programmer edit section *** (ФормирРаспред CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.Дата Get start)

                // *** End programmer edit section *** (ФормирРаспред.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормирРаспред.Дата Get end)

                // *** End programmer edit section *** (ФормирРаспред.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.Дата Set start)

                // *** End programmer edit section *** (ФормирРаспред.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормирРаспред.Дата Set end)

                // *** End programmer edit section *** (ФормирРаспред.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДокРаспр.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр CustomAttributes)
        public virtual int НомерДокРаспр
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Get start)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Get start)
                int result = this.fНомерДокРаспр;
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Get end)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Set start)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Set start)
                this.fНомерДокРаспр = value;
                // *** Start programmer edit section *** (ФормирРаспред.НомерДокРаспр Set end)

                // *** End programmer edit section *** (ФормирРаспред.НомерДокРаспр Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.ДокумПостав CustomAttributes)
        [PropertyStorage(new string[] {
                "ДокумПостав"})]
        [NotNull()]
        public virtual IIS.Proekt.ДокумПостав ДокумПостав
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Get start)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Get start)
                IIS.Proekt.ДокумПостав result = this.fДокумПостав;
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Get end)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Set start)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Set start)
                this.fДокумПостав = value;
                // *** Start programmer edit section *** (ФормирРаспред.ДокумПостав Set end)

                // *** End programmer edit section *** (ФормирРаспред.ДокумПостав Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки CustomAttributes)
        [PropertyStorage(new string[] {
                "ПунктПогрузки"})]
        [NotNull()]
        public virtual IIS.Proekt.ПунктПогрузки ПунктПогрузки
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Get start)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Get start)
                IIS.Proekt.ПунктПогрузки result = this.fПунктПогрузки;
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Get end)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Set start)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Set start)
                this.fПунктПогрузки = value;
                // *** Start programmer edit section *** (ФормирРаспред.ПунктПогрузки Set end)

                // *** End programmer edit section *** (ФормирРаспред.ПунктПогрузки Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.СписокБарж CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.СписокБарж CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокБарж"})]
        [NotNull()]
        public virtual IIS.Proekt.СписокБарж СписокБарж
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Get start)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Get start)
                IIS.Proekt.СписокБарж result = this.fСписокБарж;
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Get end)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Set start)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Set start)
                this.fСписокБарж = value;
                // *** Start programmer edit section *** (ФормирРаспред.СписокБарж Set end)

                // *** End programmer edit section *** (ФормирРаспред.СписокБарж Set end)
            }
        }
        
        /// <summary>
        /// Формир распред.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей CustomAttributes)

        // *** End programmer edit section *** (ФормирРаспред.СписокКонтей CustomAttributes)
        [PropertyStorage(new string[] {
                "СписокКонтей"})]
        [NotNull()]
        public virtual IIS.Proekt.СписокКонтей СписокКонтей
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Get start)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Get start)
                IIS.Proekt.СписокКонтей result = this.fСписокКонтей;
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Get end)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Set start)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Set start)
                this.fСписокКонтей = value;
                // *** Start programmer edit section *** (ФормирРаспред.СписокКонтей Set end)

                // *** End programmer edit section *** (ФормирРаспред.СписокКонтей Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормирРаспредE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРаспредE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРаспредE", typeof(IIS.Proekt.ФормирРаспред));
                }
            }
            
            /// <summary>
            /// "ФормирРаспредL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРаспредL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРаспредL", typeof(IIS.Proekt.ФормирРаспред));
                }
            }
        }
    }
}
