angular.module('templates-app', ['admin/admin.tpl.html', 'admin/modal.tpl.html', 'users/route1.tpl.html', 'users/users.tpl.html']);

angular.module("admin/admin.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/admin.tpl.html",
    "<div class=\"data-department\" ng-controller=\"ModalDemoCtrl\">\n" +
    "  <h2>Настройки</h2>\n" +
    "  <div class=\"table-wrapper\">\n" +
    "\n" +
    "    <!-- Nav tabs -->\n" +
    "    <uib-tabset active=\"activeJustified\" justified=\"true\">\n" +
    "      <uib-tab index=\"0\" heading=\"CPA\">\n" +
    "        <h4>Процентная ставка:</h4> \n" +
    "        <div class=\"row step-bottom\">\n" +
    "          <div class=\"col-md-4\" ng-controller=\"validateCtrl\">\n" +
    "            <form name=\"teamleadCpaForm\" ng-submit=\"submitForm()\" novalidate>\n" +
    "              <div class=\"table-rate clearfix\">\n" +
    "                <table class=\"table\">\n" +
    "                  <thead>\n" +
    "                    <tr><th colspan=\"2\">Тимлид</th></tr>\n" +
    "                  </thead>\n" +
    "                  <tbody>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Оборот</td>\n" +
    "                      <td ng-class=\"{ 'has-error' : teamleadCpaForm.revenue.$invalid && !teamleadCpaForm.revenue.$pristine }\">\n" +
    "                        <input type=\"text\" name=\"revenue\" ng-model=\"teamlead.revenue\" pattern=\"\\d+(\\.\\d{0,3})?\"  value=\"\" ng-required=\"true\"/>                       \n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.revenue.$error.pattern\">Not a valid number!</span>\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.revenue.$error.required\"></span>                      \n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Прибыль</td>\n" +
    "                      <td ng-class=\"{ 'has-error' : teamleadCpaForm.profit.$invalid && !teamleadCpaForm.profit.$pristine }\">\n" +
    "                        <input type=\"text\" name=\"profit\" ng-model=\"teamlead.profit\" ng-required=\"true\" value=\"\" pattern=\"\\d+(\\.\\d{0,3})?\" />\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.profit.$error.pattern\">Not a valid number!</span>\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.profit.$error.required\"></span> \n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ отделом</td>\n" +
    "                      <td ng-class=\"{ 'has-error' : teamleadCpaForm.di.$invalid && !teamleadCpaForm.di.$pristine }\">\n" +
    "                        <input name=\"di\" id=\"\" type=\"text\" ng-model=\"teamlead.di\" ng-required=\"true\" value=\"\" pattern=\"\\-?\\d+(\\.\\d{0,3})?\">\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.di.$error.pattern\">Not a valid number!</span>\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.di.$error.required\"></span> \n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">ДЗ отдела <br>(если более 3% от оборота)</td>\n" +
    "                      <td ng-class=\"{ 'has-error' : teamleadCpaForm.dz.$invalid && !teamleadCpaForm.dz.$pristine }\">\n" +
    "                        <input name=\"dz\" id=\"\" type=\"text\" ng-model=\"teamlead.dz\" ng-required=\"true\" value=\"\" pattern=\"\\d+(\\.\\d{0,3})?\">\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.dz.$error.pattern\">Not a valid number!</span>\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.dz.$error.required\"></span> \n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">перевыполнение отделом плана</td>\n" +
    "                      <td ng-class=\"{ 'has-error' : teamleadCpaForm.over.$invalid && !teamleadCpaForm.over.$pristine }\">\n" +
    "                        <input name=\"over\" id=\"\" type=\"text\" ng-model=\"teamlead.over\" ng-required=\"true\" value=\"\" pattern=\"\\d+(\\.\\d{0,3})?\">\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.over.$error.pattern\">Not a valid number!</span>\n" +
    "                        <span class=\"help-block\" ng-show=\"teamleadCpaForm.over.$error.required\"></span>\n" +
    "                      </td>\n" +
    "                    </tr>\n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "                <button type=\"submit\" class=\"btn-primary btn-large btn-save btn pull-right\" ng-disabled=\"teamleadCpaForm.$invalid\">\n" +
    "                  <i class=\"glyphicon glyphicon-ok\"></i> Save</button>              \n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-4\">\n" +
    "            <form action=\"\">\n" +
    "              <div class=\"table-rate clearfix\">\n" +
    "                <table class=\"table\">\n" +
    "                  <thead>\n" +
    "                    <tr><th colspan=\"2\">CPA Менеджер</th></tr>\n" +
    "                  </thead>\n" +
    "                  <tbody>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Оборот</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"0.3\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Прибыль</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"0,05\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">ДЗ отдела <br>(если более 3% от оборота)</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>\n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "                <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>\n" +
    "              </div>\n" +
    "            </form>\n" +
    "          </div>\n" +
    "          <div class=\"col-md-4\">\n" +
    "            <form action=\"\">\n" +
    "              <div class=\"table-rate clearfix\">\n" +
    "                <table class=\"table\">\n" +
    "                  <thead>\n" +
    "                    <tr><th colspan=\"2\">Аккаунтер</th></tr>\n" +
    "                  </thead>\n" +
    "                  <tbody>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Оборот</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"0.2\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">Прибыль</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"0,05\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\"> <input type=\"checkbox\" name=\"\" >выполнение ДИ</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr>\n" +
    "                      <td class=\"txt-left\">ДЗ отдела <br>(если более 3% от оборота)</td>\n" +
    "                      <td><input name=\"\" id=\"\" type=\"text\" value=\"0,0\"></td>\n" +
    "                    </tr>\n" +
    "                    <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>                           \n" +
    "                  </tbody>\n" +
    "                </table>\n" +
    "                <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "              </div>  \n" +
    "            </form>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <hr>\n" +
    "        \n" +
    "        <h4>Список сотрудников:</h4> \n" +
    "        <table class=\"table table-bordered all-employees\" ng-controller=\"UserCtrl\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <th>Должность</th>\n" +
    "              <th>ФИО</th>\n" +
    "              <th>План по старым</th>    \n" +
    "              <th>План по новым</th>                 \n" +
    "              <th></th>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tbody>\n" +
    "            <tr ng-repeat=\"item in data\">\n" +
    "              <td class=\"text-left\">{{ item.user.position }}</td>\n" +
    "              <td class=\"text-left\">{{ item.user.name }}</td>\n" +
    "              <td>{{ item.stats.metrics.revenue_old.plan}}</td>\n" +
    "              <td>{{ item.stats.metrics.revenue_new.plan}}</td>                   \n" +
    "              <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>          \n" +
    "            </tr>\n" +
    "          </tbody>\n" +
    "        </table>  \n" +
    "      </uib-tab><!-- /cpa -->\n" +
    "\n" +
    "    <uib-tab index=\"1\" heading=\"CPM\">\n" +
    "      <h4>Процентная ставка:</h4>\n" +
    "      <div class=\"row step-bottom\">              \n" +
    "        <div class=\"col-md-6\">\n" +
    "          <form action=\"\">\n" +
    "            <div class=\"table-rate clearfix\">\n" +
    "              <table class=\"table\">   \n" +
    "                <thead>\n" +
    "                  <tr><th colspan=\"2\">Тимлид</th></tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по новым рекламодателям отдела</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"1.5\" required></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по новым</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"3\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по существующим и переданным в эк.* отдела</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"0,1\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">расчет и постановка планов по отделу, проверка мотивации, коучинг</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"3,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ отделом</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">ДЗ отдела (если более 3% от оборота)</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">перевыполнение отделом плана</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"5,0\"></td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "              <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "            </div>  \n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-6\">\n" +
    "          <form action=\"\">\n" +
    "            <div class=\"table-rate clearfix\">\n" +
    "              <table class=\"table\">\n" +
    "                <thead>\n" +
    "                  <tr><th colspan=\"2\">Менеджер</th></tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по новым рекламодателям</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"3\"></td>\n" +
    "                  </tr>                     \n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по существующим</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"1\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по переданным в эккаунтинг (от 3 до 6 мес.)</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"0,3\"></td>\n" +
    "                  </tr>                       \n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ отделом</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">ДЗ отдела (если более 3% от оборота)</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>  \n" +
    "                  <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>  \n" +
    "                  <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>                      \n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "              <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "            </div>  \n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"row step-bottom\">\n" +
    "        <div class=\"col-md-6\">\n" +
    "          <form action=\"\">\n" +
    "            <div class=\"table-rate clearfix\">\n" +
    "              <table class=\"table\">\n" +
    "                <thead>\n" +
    "                  <tr><th colspan=\"2\">Хантер</th></tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по новым рекламодателям</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"3\"></td>\n" +
    "                  </tr>                     \n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по существующим</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"1,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">оборот по переданным в эккаунтинг (от 3 до 6 мес.)</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"0,3\"></td>\n" +
    "                  </tr>                       \n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ отделом</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">ДЗ отдела (если более 3% от оборота)</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "              <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>\n" +
    "            </div>\n" +
    "          </form>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <hr>\n" +
    "      <h4>Список сотрудников:</h4>\n" +
    "      <table class=\"table table-bordered all-employees\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th>Должность</th>\n" +
    "            <th>ФИО</th>\n" +
    "            <th>План по старым</th>    \n" +
    "            <th>План по новым</th>                 \n" +
    "            <th></th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "          <tr>\n" +
    "            <td class=\"text-left\">менеджер</td>\n" +
    "            <td class=\"text-left\">Ален</td>\n" +
    "            <td>104,251</td>\n" +
    "            <td>30.000</td>                   \n" +
    "            <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>          \n" +
    "          </tr>                  \n" +
    "          <tr>\n" +
    "            <td class=\"text-left\">менеджер</td>\n" +
    "            <td class=\"text-left\">Даниил</td>\n" +
    "            <td>66,994</td>\n" +
    "            <td>20,000</td>\n" +
    "            <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>           \n" +
    "          </tr>                  \n" +
    "          <tr>\n" +
    "            <td class=\"text-left\">аккаунтер</td>\n" +
    "            <td class=\"text-left\"></td>\n" +
    "            <td></td>\n" +
    "            <td></td>\n" +
    "            <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>        \n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </uib-tab><!-- /cpm -->\n" +
    "\n" +
    "    <uib-tab index=\"2\" heading=\"PUB\">\n" +
    "      <h4>Процентная ставка:</h4> \n" +
    "      <div class=\"row step-bottom\">              \n" +
    "        <div class=\"col-md-4\">\n" +
    "          <form action=\"\">\n" +
    "            <div class=\"table-rate clearfix\">\n" +
    "              <table class=\"table\">   \n" +
    "                <thead>\n" +
    "                  <tr><th colspan=\"2\">Тимлид</th></tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">прибыль по новым</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"3.5\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">прибыль по старым</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"2,00\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ отделом</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                  </tr>\n" +
    "                  <tr>\n" +
    "                    <td class=\"txt-left\">перевыполнение отделом плана</td>\n" +
    "                    <td><input name=\"\" id=\"\" type=\"text\" value=\"5,0\"></td>\n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table>\n" +
    "              <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "            </div>  \n" +
    "          </form>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-4\">\n" +
    "          <form action=\"\">\n" +
    "            <div class=\"table-rate clearfix\">\n" +
    "              <table class=\"table\">   \n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                  <th colspan=\"2\">Менеджер</th> \n" +
    "                </tr>\n" +
    "              </thead>               \n" +
    "                    <tbody>\n" +
    "                      <tr>\n" +
    "                        <td class=\"txt-left\">прибыль по новым</td>\n" +
    "                        <td><input name=\"\" id=\"\" type=\"text\" value=\"3.5\"></td>\n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td class=\"txt-left\">прибыль по старым</td>\n" +
    "                        <td><input name=\"\" id=\"\" type=\"text\" value=\"2,00\"></td>\n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ</td>\n" +
    "                        <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                      </tr>\n" +
    "                       <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>                      \n" +
    "                    </tbody>\n" +
    "                  </table>\n" +
    "                  <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "                </div>  \n" +
    "              </form>\n" +
    "              </div>\n" +
    "              <div class=\"col-md-4\">\n" +
    "                <form action=\"\">\n" +
    "                  <div class=\"table-rate clearfix\">\n" +
    "                    <table class=\"table\">   \n" +
    "                     <thead>\n" +
    "                      <tr>\n" +
    "                        <th colspan=\"2\">Аккаунтер</th> \n" +
    "                      </tr>\n" +
    "                    </thead>               \n" +
    "                    <tbody>                      \n" +
    "                      <tr>\n" +
    "                        <td class=\"txt-left\">прибыль по старым</td>\n" +
    "                        <td><input name=\"\" id=\"\" type=\"text\" value=\"0,30\"></td>\n" +
    "                      </tr>\n" +
    "                      <tr>\n" +
    "                        <td class=\"txt-left\"><input type=\"checkbox\" name=\"\" > выполнение ДИ</td>\n" +
    "                        <td><input name=\"\" id=\"\" type=\"text\" value=\"-5,0\"></td>\n" +
    "                      </tr>\n" +
    "                      <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr> \n" +
    "                      <tr><td colspan=\"2\" class=\"empty\">&nbsp;</td></tr>                    \n" +
    "                    </tbody>\n" +
    "                  </table>\n" +
    "                  <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "                </div>  \n" +
    "              </form>\n" +
    "              </div>\n" +
    "            </div>                            \n" +
    "              <hr>\n" +
    "              <h4>Список сотрудников:</h4> \n" +
    "              <table class=\"table table-bordered all-employees\">\n" +
    "                <thead>\n" +
    "                  <tr>\n" +
    "                    <th>Должность</th>\n" +
    "                    <th>ФИО</th>\n" +
    "                    <th>План по старым</th>    \n" +
    "                    <th>План по новым</th>                 \n" +
    "                    <th></th>\n" +
    "                  </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                  <tr>\n" +
    "                    <td class=\"text-left\">менеджер</td>\n" +
    "                    <td class=\"text-left\">Ален</td>\n" +
    "                     <td>104,251</td>\n" +
    "                    <td>30.000</td>                   \n" +
    "                    <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>          \n" +
    "                  </tr>                  \n" +
    "                  <tr>\n" +
    "                    <td class=\"text-left\">менеджер</td>\n" +
    "                    <td class=\"text-left\">Даниил</td>\n" +
    "                    <td>66,994</td>\n" +
    "                    <td>20,000</td>\n" +
    "                    <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>           \n" +
    "                  </tr>                  \n" +
    "                  <tr>\n" +
    "                    <td class=\"text-left\">аккаунтер</td>\n" +
    "                    <td class=\"text-left\"></td>\n" +
    "                    <td></td>\n" +
    "                    <td></td>\n" +
    "                    <td><a ng-click=\"open()\" href=\"javascript:void(0);\">изменить</a></td>        \n" +
    "                  </tr>\n" +
    "                </tbody>\n" +
    "              </table> \n" +
    "    </uib-tab><!-- /pub -->\n" +
    "  </uib-tabset>\n" +
    "\n" +
    "   \n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("admin/modal.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("admin/modal.tpl.html",
    "<!-- Modal -->\n" +
    "<div class=\"profit-plan\" >\n" +
    "  <div class=\"modal-content\">\n" +
    "    <div class=\"modal-header\">\n" +
    "      <button type=\"button\" class=\"close\" ng-click=\"cancel()\"><span aria-hidden=\"true\">&times;</span></button>\n" +
    "      <h4 class=\"modal-title\">План по прибыли</h4>\n" +
    "    </div>\n" +
    "    <div class=\"modal-body\">\n" +
    "      <form action=\"\">\n" +
    "        <div class=\"table-rate clearfix\">\n" +
    "          <table class=\"table\">   \n" +
    "            <thead>\n" +
    "              <tr><th colspan=\"2\">Ален</th></tr>\n" +
    "            </thead>               \n" +
    "            <tbody>\n" +
    "              <tr>\n" +
    "                <td class=\"txt-left\">План по новым</td>\n" +
    "                <td><input name=\"\" id=\"\" type=\"text\" value=\"30.000\"></td>\n" +
    "              </tr>\n" +
    "              <tr>\n" +
    "                <td class=\"txt-left\">План по старым</td>\n" +
    "                <td><input name=\"\" id=\"\" type=\"text\" value=\"104.251\"></td>\n" +
    "              </tr>                      \n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "          <button class=\"btn-primary btn-large btn-save btn pull-right\" type=\"submit\" name=\"\"><i class=\"glyphicon glyphicon-ok\"></i> Save</button>    \n" +
    "        </div>  \n" +
    "      </form>\n" +
    "    </div>         \n" +
    "  </div> \n" +
    "</div>");
}]);

angular.module("users/route1.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/route1.tpl.html",
    "<div class=\"table-wrapper\">\n" +
    "    <table class=\"table table-bordered\">\n" +
    "      <thead>\n" +
    "        <tr class=\"first-row\">\n" +
    "          <th colspan=\"5\" class=\"txt-left\"><b> {{ positionMap[user.position] }} отдела {{ departmentMap[user.department] }}, {{ user.name }}</b></th>                \n" +
    "          <th class=\"correction\">1</th>\n" +
    "          <th class=\"correction\">0.8</th>\n" +
    "          <th class=\"correction\">0.6</th>\n" +
    "          <th class=\"correction\">1.2</th>\n" +
    "          <th></th>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "          <th></th>\n" +
    "          <th>План</th>\n" +
    "          <th>Факт</th>\n" +
    "          <th>Выполнение %</th>\n" +
    "          <th>Бонус расчет</th>\n" +
    "          <th colspan=\"4\" class=\"txt-center correction\">Корректировка</th>\n" +
    "          <th></th>\n" +
    "        </tr>\n" +
    "      </thead>\n" +
    "      <tbody >\n" +
    "      	<tr ng-repeat-start=\"item in stats.metrics\">\n" +
    "      		<td class=\"txt-left\">{{item.title}}</td>\n" +
    "      		<td>{{item.plan}}</td>\n" +
    "      		<td>{{item.fact}}</td>\n" +
    "      		<td>\n" +
    "      			<div class=\"progress\">\n" +
    "      				<div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"{{item.plan_percent}}\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: {{item.plan_percent}}%;\">{{item.plan_percent}}%</div>\n" +
    "      			</div>\n" +
    "      		</td>\n" +
    "      		<td></td>\n" +
    "      		<td class=\"correction\"></td>\n" +
    "      		<td class=\"correction\"></td>\n" +
    "      		<td class=\"correction\"></td>\n" +
    "      		<td class=\"correction\"></td>\n" +
    "      		<td></td>\n" +
    "        </tr>\n" +
    "        <tr ng-repeat-end>\n" +
    "      		<td>{{item.fee_percent}}</td>\n" +
    "      		<td></td>\n" +
    "      		<td></td>\n" +
    "      		<td></td>\n" +
    "      		<td>{{item.fee}}</td>\n" +
    "      		<td class=\"correction\"><span ng-if=\"item.correction === 1\">{{item.fee_corrected}}</span></td>\n" +
    "      		<td class=\"correction\"><span ng-if=\"item.correction === 0.8\">{{item.fee_corrected}}</span></td>\n" +
    "      		<td class=\"correction\"><span ng-if=\"item.correction === 0.6\">{{item.fee_corrected}}</span></td>\n" +
    "      		<td class=\"correction\"><span ng-if=\"item.correction === 1.2\">{{item.fee_corrected}}</span></td>\n" +
    "      		<td></td>\n" +
    "        </tr>\n" +
    "        <tr>\n" +
    "        	<td></td>\n" +
    "        	<td></td>\n" +
    "        	<td></td>\n" +
    "        	<td></td>\n" +
    "            <td class=\"correction txt-bold\">{{ fee.toFixed(2) }}</td>\n" +
    "            <td class=\"correction txt-bold\">{{ feeCorrection100 }}</td>\n" +
    "            <td class=\"correction txt-bold\">{{ feeCorrection80 }}</td>\n" +
    "            <td class=\"correction txt-bold\">{{ feeCorrection60 }}</td>\n" +
    "            <td class=\"correction txt-bold\">{{ feeCorrection120 }}</td>\n" +
    "            <td class=\"correction txt-bold\">{{ sum }}</td>\n" +
    "        </tr>\n" +
    "        <tr class=\"not-border\">\n" +
    "	        <td colspan=\"4\"></td>\n" +
    "	        <td class=\"correction txt-left\">Оклад</td>\n" +
    "	        <td class=\"correction\"></td>\n" +
    "	        <td class=\"correction\"></td>\n" +
    "	        <td class=\"correction\"></td>\n" +
    "	        <td class=\"correction\"></td>\n" +
    "	        <td>{{user.salary}}</td>\n" +
    "        </tr>\n" +
    "        <tr class=\"not-border\">\n" +
    "            <td colspan=\"4\"></td>\n" +
    "            <td class=\"correction txt-left\">Итого к выплате</td>\n" +
    "            <td class=\"correction\"></td>\n" +
    "            <td class=\"correction\"></td>\n" +
    "            <td class=\"correction\"></td>\n" +
    "            <td class=\"correction\"></td>\n" +
    "            <td class=\"txt-color\">{{user.salary + sum }}</td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "    </table>         \n" +
    "</div>");
}]);

angular.module("users/users.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("users/users.tpl.html",
    "<div class=\"table-wrapper\"> \n" +
    "	<table class=\"table table-bordered all-employees\">\n" +
    "       <thead>\n" +
    "	       	<tr>\n" +
    "		     	<th>Должность</th>\n" +
    "		        <th>ФИО</th>\n" +
    "		        <th>План по прибыли*</th>\n" +
    "		        <th>факт по прибыли</th>\n" +
    "		        <th>% бонуса по прибыли*</th>\n" +
    "		        <th class=\"txt-bonus\">Бонус</th>            \n" +
    "		        <th>% выполнения плана</th>              \n" +
    "		        <th>Корректировка</th>\n" +
    "		        <th>Итого</th>\n" +
    "		        <th></th>\n" +
    "	        </tr>\n" +
    "       </thead>\n" +
    "       <tbody>\n" +
    "	       	<tr ng-repeat=\"item in data\">\n" +
    "		        <td class=\"txt-left\">{{ item.user.position }}</td>\n" +
    "		        <td class=\"txt-left\">{{ item.user.name }}</td>\n" +
    "		        <td>{{ item.stats.metrics.revenue_new.plan}}</td>\n" +
    "		        <td>{{ item.stats.metrics.revenue_new.fact}}</td>\n" +
    "		        <td>2,00%</td>\n" +
    "		        <td class=\"txt-bonus\">1.842</td>\n" +
    "		        <td>{{item.stats.metrics.revenue_new.plan_percent}}%</td>\n" +
    "		        <td>1473.5</td>\n" +
    "		        <td></td>   \n" +
    "		        <td><a  ui-sref=\"user({id: item.user.id})\">подробнее</a></td>           \n" +
    "	        </tr> \n" +
    "       </tbody>\n" +
    "    </table>         \n" +
    "</div>");
}]);
