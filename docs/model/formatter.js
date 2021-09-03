sap.ui.define([],function(){"use strict";return{displayItem:function(n,t){if(t==="all"){return true}return n===t},formatRank:function(n){return+n+1},formatIndicator:function(n,t){if(n<t||isNaN(t)){return sap.m.DeviationIndicator.Up}if(n>t){return sap.m.DeviationIndicator.Down}return sap.m.DeviationIndicator.None},formatPastRankTooltip:function(n){const t=this.getView().getModel("i18n").getResourceBundle();if(isNaN(n)){return t.getText("noPrevListing")}return t.getText("prevListing",[+n+1])},isPresent:function(n){return!!n},containsNpmPackages:function(n){return n&&n.some(function(n){return n.type==="npm-package"})},formatHighlight:function(n,t){if(!n){return""}if(!t){return n}const e=n.toLowerCase().indexOf(t.toLowerCase());if(e>=0){const r=e+t.length;return`${n.slice(0,e)}<em>${n.slice(e,r)}</em>${n.slice(r)}`}return n},containsDockerImages:function(n){return n&&n.some(function(n){return n.type==="docker-image"})},containsPypiPackages:function(n){return n&&n.some(function(n){return n.type==="pypi-package"})},containsCodeRepositories:function(n){return n&&n.some(function(n){return n.type==="code-repository"})}}});