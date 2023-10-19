import React from "react";
function header() {
    return(
        <header className="header">
            <div className="header-mobile-info">
                <div className="header-mobile-slide info1">
                    <div className="inside">
                        <div className="row">
                            <div className="col-sm">
                                <p><i className="icon-viber"></i><a href="tel:http://+842363847333">+842363847333</a>
                                </p>
                            </div>
                            <div className="col-sm mt-15 mt-sm-0">

                                <p><i className="icon-closed-envelope"></i><a
                                    href="mailto:reservation@furamavietnam.com">reservation@furamavietnam.com</a></p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mobile-slide info2">
                    <div id="googleMapHeader" className="google-map">
                        <div style="height: 100%; width: 100%;"></div>
                        <div
                            style="background-color: white; font-weight: 500; font-family: Roboto, sans-serif; padding: 15px 25px; box-sizing: border-box; top: 5px; border: 1px solid rgba(0, 0, 0, 0.12); border-radius: 5px; left: 50%; max-width: 375px; position: absolute; transform: translateX(-50%); width: calc(100% - 10px); z-index: 1;">
                            <div><img alt="" src="https://maps.gstatic.com/mapfiles/api-3/images/google_gray.svg"
                                      draggable="false"
                                      style="padding: 0px; margin: 0px; border: 0px; height: 17px; vertical-align: middle; width: 52px; user-select: none;">
                            </div>
                            <div style="line-height: 20px; margin: 15px 0px;"><span
                                style="color: rgba(0, 0, 0, 0.87); font-size: 14px;">This page can't load Google Maps correctly.</span>
                            </div>
                            <table style="width: 100%;">
                                <tr>
                                    <td style="line-height: 16px; vertical-align: middle;"><a
                                        href="https://developers.google.com/maps/documentation/javascript/error-messages?utm_source=maps_js&amp;utm_medium=degraded&amp;utm_campaign=keyless#api-key-and-billing-errors"
                                        target="_blank" rel="noopener"
                                        style="color: rgba(0, 0, 0, 0.54); font-size: 12px;">Do you own this
                                        website?</a></td>
                                    <td style="text-align: right;">
                                        <button className="dismissButton">OK</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="header-mobile-slide info3">
                    <div className="inside">

                        <div className="visible-xs visible-sm hidden-lg hidden-md">
                            <form action="https://furamavietnam.com/vi/" className="form-inline row" role="search"
                                  method="get">
                                <div className="col pr-0">
                                    <input type="text" name="s" value="" placeholder="Search"
                                           className="form-control w-100">
                                </div>
                                <div className="col-auto pl-0">
                                    <button className="btn btn-primary" type="submit">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="header-mobile-slide info4">
                    <div className="inside">
                        <div className="row">
                            <div className="col-sm">
                                <p><a href="#">English</a></p>
                                <p><a href="#">German</a></p>
                            </div>
                            <div className="col-sm">
                                <p><a href="#">France</a></p>
                                <p><a href="#">Italian</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-topline">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-auto col-lg-4 col-xl-3 d-none d-lg-flex">
                            <div className="header-info"><i className="icon-sun"></i><span
                                className="">Thời tiết:</span> 28 °C / 82 °F
                            </div>
                        </div>
                        <div className="col-auto col-lg-4 col-xl-3 d-none d-lg-flex">
                            <div className="header-info"><i className="icon-time"></i><span>Giờ địa phương:</span> <span
                                className="devvn_time">09:39 am</span></div>
                        </div>
                        <div className="col-auto ml-auto d-none d-lg-flex">
                            <div className="header-lang">
                                <div id="icl_lang_sel_widget-2" className="widget_icl_lang_sel_widget">
                                    <div
                                        className="wpml-ls-sidebars-language_sevices wpml-ls wpml-ls-legacy-dropdown js-wpml-ls-legacy-dropdown"
                                        id="lang_sel">
                                        <ul>

                                            <li tabIndex="0"
                                                className="wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-vi wpml-ls-current-language wpml-ls-item-legacy-dropdown">
                                                <a href="#"
                                                   className="js-wpml-ls-item-toggle wpml-ls-item-toggle lang_sel_sel icl-vi"><span
                                                    className="wpml-ls-native icl_lang_sel_native">VI</span></a>

                                                <ul className="wpml-ls-sub-menu">

                                                    <li className="icl-en wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-en wpml-ls-first-item">
                                                        <a href="https://furamavietnam.com"
                                                           className="wpml-ls-link"><span
                                                            className="wpml-ls-display icl_lang_sel_translated">EN</span></a>
                                                    </li>


                                                    <li className="icl-ja wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-ja">
                                                        <a href="https://furamavietnam.com/ja/"
                                                           className="wpml-ls-link"><span
                                                            className="wpml-ls-display icl_lang_sel_translated">JA</span></a>
                                                    </li>


                                                    <li className="icl-ko wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-ko">
                                                        <a href="https://furamavietnam.com/ko/"
                                                           className="wpml-ls-link"><span
                                                            className="wpml-ls-display icl_lang_sel_translated">KR</span></a>
                                                    </li>


                                                    <li className="icl-ru wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-ru">
                                                        <a href="https://furamavietnam.com/ru/"
                                                           className="wpml-ls-link"><span
                                                            className="wpml-ls-display icl_lang_sel_translated">RU</span></a>
                                                    </li>


                                                    <li className="icl-zh-hant wpml-ls-slot-language_sevices wpml-ls-item wpml-ls-item-zh-hant wpml-ls-last-item">
                                                        <a href="https://furamavietnam.com/zh-hant/"
                                                           className="wpml-ls-link"><span
                                                            className="wpml-ls-display icl_lang_sel_translated">CN</span></a>
                                                    </li>

                                                </ul>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-auto ml-auto justify-content-end d-flex d-lg-none">
                            <a href="#" className="header-toggle-slide" data-slide="info1"><i
                                className="icon-telephone"></i><span
                                className="d-inline-block d-md-none">Call</span></a> <a href="javascript:void(0)"
                                                                                        className="header-toggle-slide"
                                                                                        data-slide="info2"><i
                            className="icon-placeholder"></i><span
                            className="d-inline-block d-md-none">Find Us</span></a> <a href="javascript:void(0)"
                                                                                       className="header-toggle-slide"
                                                                                       data-slide="info3"><i
                            className="icon-search"></i></a>

                            <div><a href="javascript:void(0)" className="header-toggle-slide dropdown-toggle"
                                    data-toggle="dropdown">En</a>
                                <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item"
                                                                                      href="javascript:void(0)">German</a>
                                    <a className="dropdown-item" href="javascript:void(0)">France</a> <a
                                        className="dropdown-item" href="javascript:void(0)">Italian</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-content">
                <div className="container">
                    <div className="row">
                        <div className="col-auto col-sm-5 col-lg-3 d-flex align-items-center bestel-logo">
                            <a href="https://furamavietnam.com/vi/" className="header-logo"><img
                                src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" alt="logo "
                                className="img-fluid" width="63" height="100"></a>
                        </div>
                        <div className="col col-md-auto col-lg-3 d-flex">
                            <div className="catalog-widget d-none d-sm-block">

                                <div className="catalog-widget-inside" style="visibility: visible;">
                                    <a href="https://www.tripadvisor.com/Hotel_Review-g298085-d302750-Reviews-Furama_Resort_Danang-Da_Nang_Quang_Nam_Province.html"
                                       target="_blank">
                                        <div className="widget-tripadvisor">
                                            <div className="inside">
                                                <div className="widget-tripadvisor-logo"><img
                                                    src="https://smartdata.tonytemplates.com/bestel/wp-content/uploads/2018/05/widget-tripadvisor-logo.png"
                                                    alt=""></div>
                                                <div className="widget-tripadvisor-rating"><img
                                                    src="https://furamavietnam.com/wp-content/uploads/2018/08/widget-tripadvisor-rating.png"
                                                    alt=""></div>
                                                <div className="widget-tripadvisor-text">2,746 Reviews</div>
                                            </div>
                                        </div>
                                    </a>
                                    <span className="catalog-widget-toggle js-catalog-widget-toggle"></span></div>
                            </div>
                            <div className="catalog-widget-mobile d-flex d-sm-none align-items-center mx-auto">
                            </div>
                        </div>

                        <div className="col-sm-3 d-none d-lg-block">
                            <div className="header-contact d-flex">
                                <div className="header-contact-icon"><i className="icon-placeholder"></i></div>
                                <div className="header-contact-txt">
                                    <p>
                                        103 – 105 Đường Võ Nguyên Giáp, Phường Khuê Mỹ, Quận Ngũ hành Sơn, Tp. Đà Nẵng,
                                        Việt Nam </p><p className="txt-sm">
                                    <span>7.0 km</span> từ Sân bay Quốc tế Đà Nẵng </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 d-none d-lg-block">
                            <div className="header-contact d-flex">
                                <div className="header-contact-icon"><i className="icon-telephone"></i></div>
                                <div className="header-contact-txt">
                                    <p className="txt-lg">
                                        84-236-3847 333/888 </p>
                                </div>
                            </div>
                            <div className="header-contact d-flex">
                                <div className="header-contact-icon"><i className="icon-closed-envelope"></i></div>
                                <div className="header-contact-txt">
                                    <a href="mailto:reservation@furamavietnam.com">
                                        reservation@furamavietnam.com </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-auto ml-auto d-flex d-lg-none">
                            <button className="navbar-btn" data-target="#modalNavigation" data-toggle="modal">
                                <i className="icon-menu"></i>
                            </button>
                            <div className="modal fade modal-fullscreen-menu" id="modalNavigation">
                                <button aria-label="Close" className="close" data-dismiss="modal">
                                    <i className="icon-close"></i>CLOSE
                                </button>
                                <div className="modal-dialog">
                                    <ul id="menu-furama-vi" className="menu navbar-nav w-100 js-main-menu">
                                        <li id="nav-menu-item-5006"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/the-resort/"
                                               className="nav-link main-menu-link">GIỚI THIỆU</a></li>
                                        <li id="nav-menu-item-5007"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/our-rooms/"
                                               className="nav-link main-menu-link">LOẠI PHÒNG</a></li>
                                        <li id="nav-menu-item-5008"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/culinary/"
                                               className="nav-link main-menu-link">ẨM THỰC</a></li>
                                        <li id="nav-menu-item-5009"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/meeting-and-events/"
                                               className="nav-link main-menu-link">HỘI NGHỊ VÀ SỰ KIỆN</a></li>
                                        <li id="nav-menu-item-5010"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/spa-and-fitness/"
                                               className="nav-link main-menu-link">SPA</a></li>
                                        <li id="nav-menu-item-5011"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/recreation/"
                                               className="nav-link main-menu-link">GIẢI TRÍ</a></li>
                                        <li id="nav-menu-item-5012"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/destination/"
                                               className="nav-link main-menu-link">ĐIỂM ĐẾN</a></li>
                                        <li id="nav-menu-item-5013"
                                            className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                            <a href="https://furamavietnam.com/vi/furama-special-offers/"
                                               className="nav-link main-menu-link">ƯU ĐÃI</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sticky-wrapper">
                <div className="header-nav js-header-nav sticky">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <div className="navbar-collapse">
                                <ul id="menu-furama-vi" className="menu navbar-nav w-100 js-main-menu">
                                    <li id="nav-menu-item-5006"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/the-resort/"
                                           className="nav-link main-menu-link">GIỚI THIỆU</a></li>
                                    <li id="nav-menu-item-5007"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/our-rooms/"
                                           className="nav-link main-menu-link">LOẠI PHÒNG</a></li>
                                    <li id="nav-menu-item-5008"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/culinary/"
                                           className="nav-link main-menu-link">ẨM THỰC</a></li>
                                    <li id="nav-menu-item-5009"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/meeting-and-events/"
                                           className="nav-link main-menu-link">HỘI NGHỊ VÀ SỰ KIỆN</a></li>
                                    <li id="nav-menu-item-5010"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/spa-and-fitness/"
                                           className="nav-link main-menu-link">SPA</a></li>
                                    <li id="nav-menu-item-5011"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/recreation/"
                                           className="nav-link main-menu-link">GIẢI TRÍ</a></li>
                                    <li id="nav-menu-item-5012"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/destination/"
                                           className="nav-link main-menu-link">ĐIỂM ĐẾN</a></li>
                                    <li id="nav-menu-item-5013"
                                        className="nav-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page">
                                        <a href="https://furamavietnam.com/vi/furama-special-offers/"
                                           className="nav-link main-menu-link">ƯU ĐÃI</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
    
}