sap.ui.define(["aow/artifact/controller/BaseController","aow/artifact/model/formatter","sap/ui/model/Filter","sap/ui/model/FilterOperator"],function(e,t,o,r){"use strict";return e.extend("aow.artifact.controller.MainView",{formatter:t,onMenuButtonPress:function(){const e=this.getView().getModel("settings");const t=e.getProperty("/sidebarExpanded");e.setProperty("/sidebarExpanded",!t)},onToggleTheme:function(e){const t=e.getParameter("state");sap.ui.getCore().applyTheme(t?"sap_fiori_3":"sap_fiori_3_dark")},goToRepo:function(){window.open("https://github.com/SAP-samples/artifact-of-the-month/")},onNavPage:function(e){const t=this.getView().getModel("settings");const o=e.getParameter("item").getKey();if(o==="legal"){return window.open("https://www.sap.com/corporate/en/legal/impressum.html","_blank")}if(o==="privacy"){return window.open("https://www.sap.com/corporate/en/legal/privacy.html","_blank")}if(o==="terms"){return window.open("https://www.sap.com/corporate/en/legal/terms-of-use.html","_blank")}this.navTo(o);t.setProperty("/currentHash",o);t.setProperty("/filter","all")},displayItem:function(e){const t=this.byId("trend-list").getBinding("items");const i=this.getView().getModel("settings");let n=i.getProperty("/filter");if(n==="all"){t.filter([])}else{t.filter([new o("type",r.EQ,n)])}},liveSearch:function(e){const t=this.getView().getModel("settings");let o=t.getProperty("/search");if(!o){o=""}let r=t.getProperty("/filterSearch");if(r===undefined||r==="all"){r=""}const i=this.getView().byId("all-list");const n=i.getBinding("items");const a=new sap.ui.model.Filter({path:"name",operator:sap.ui.model.FilterOperator.Contains,value1:o});const s=new sap.ui.model.Filter({path:"description",operator:sap.ui.model.FilterOperator.Contains,value1:o});const l=new sap.ui.model.Filter({path:"type",operator:sap.ui.model.FilterOperator.Contains,value1:r});const p=new sap.ui.model.Filter({filters:[a,s],and:false});n.filter(new sap.ui.model.Filter({filters:[p,l],and:true}))}})});