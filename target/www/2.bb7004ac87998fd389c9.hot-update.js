webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/layouts/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"print\\\"> <div class=\\\"col-md-3 float-left col-1 pl-0 pr-0 collapse width show\\\" id=\\\"sidebar\\\" *jhiHasAnyAuthority=\\\"['ROLE_USER', 'ROLE_ADMIN']\\\"> <div class=\\\"list-group border-0 card text-center text-md-left\\\"> <br/><br/> <a href=\\\"#\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-parent=\\\"#sidebar\\\" routerLink=\\\"dashboard\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-dashboard\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item1\\\">Dashboard</span> </a> <a href=\\\"#menu3x\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-toggle=\\\"collapse\\\" aria-expanded=\\\"false\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN']\\\"> <i class=\\\"fa fa-archive\\\" ngbTooltip=\\\"Inventário de Inquérito\\\" title=\\\"Inventário de Inquérito\\\"></i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item3.title\\\">Inventário de Inquérito</span> </a> <div class=\\\"collapse\\\" id=\\\"menu3x\\\" data-parent=\\\"#sidebar\\\"> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"sistema-agua\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-users\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item3.subItem1\\\">Sistema de Águas</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-address-card-o\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item3.subItem2\\\">Log Sistema de Águas</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"indicador-producao\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item3.subItem3\\\">Indicador de Produção</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"indicador-producao\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item3.subItem4\\\">Log Indicador de Produção</span> </a> </div> <a href=\\\"#menu4x\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-toggle=\\\"collapse\\\" aria-expanded=\\\"false\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN']\\\"> <i class=\\\"fa fa-calendar\\\" ngbTooltip=\\\"Programas-Projectos\\\" title=\\\"Programas-Projectos\\\"></i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item4.title\\\">Programas-Projectos</span> </a> <div class=\\\"collapse\\\" id=\\\"menu4x\\\" data-parent=\\\"#sidebar\\\"> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"user-management\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-users\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item4.subItem1\\\">Programas e Projectos</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-address-card-o\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item4.subItem2\\\">Log Programas e Projectos</span> </a> </div> <a href=\\\"#menu5x\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-toggle=\\\"collapse\\\" aria-expanded=\\\"false\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN']\\\"> <i class=\\\"fas fa-book-reader\\\" ngbTooltip=\\\"Publicações\\\" title=\\\"Publicações\\\"></i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.title\\\">Publicações</span> </a> <div class=\\\"collapse\\\" id=\\\"menu5x\\\" data-parent=\\\"#sidebar\\\"> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-users\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem1\\\">Início Banner</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-address-card-o\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem2\\\">Início Destaques</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem3\\\">Início Últimas Notícias</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem4\\\">Início Publicacao PDF</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem5\\\">Sobre DNA Banner</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"tipo-espaco\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item5.subItem6\\\">Sobre DNA</span> </a> </div> <a href=\\\"#menu6x\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-toggle=\\\"collapse\\\" aria-expanded=\\\"false\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN']\\\"> <i class=\\\"fa fa-bar-chart\\\" ngbTooltip=\\\"Relatórios\\\" title=\\\"Relatórios\\\"></i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.title\\\">Relatórios</span> </a> <div class=\\\"collapse\\\" id=\\\"menu6x\\\" data-parent=\\\"#sidebar\\\"> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-area-chart\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.subItem1\\\">Sistema de Águas</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-area-chart\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.subItem2\\\">Indicador de Produção</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-area-chart\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.subItem3\\\">Programas e Projectos</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-area-chart\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.subItem4\\\">Publicacoes</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"a fa-bar-chart-o\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item6.subItem5\\\">Log Relatórios</span> </a> </div> <a href=\\\"#menu1x\\\" class=\\\"list-group-item d-inline-block collapsed\\\" data-toggle=\\\"collapse\\\" aria-expanded=\\\"false\\\" *jhiHasAnyAuthority=\\\"['ROLE_ADMIN']\\\"> <i class=\\\"fas fa-users-cog\\\" ngbTooltip=\\\"Configuração\\\" title=\\\"Configuração\\\"></i> <span class=\\\"d-none d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.title\\\">Configurações</span> </a> <div class=\\\"collapse\\\" id=\\\"menu1x\\\" data-parent=\\\"#sidebar\\\"> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"user-management\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-users\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem1\\\">Controle de Acesso</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-address-card-o\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem2\\\">Perfil</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem3\\\">Tipo Situacao</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem4\\\">Província</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fas fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem5\\\">Município</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem6\\\">Comuna</span> </a> <a href=\\\"#\\\" class=\\\"list-group-item\\\" data-parent=\\\"#menu1x\\\" routerLink=\\\"authority\\\" routerLinkActive=\\\"active\\\"> <i class=\\\"fa fa-th-large\\\" style=\\\"size: 10px !important;\\\"> </i> <span class=\\\"d-md-inline\\\" jhiTranslate=\\\"sidebar.item2.subItem7\\\">Fornecedores</span> </a> </div> </div> </div> </div> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2xheW91dHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5odG1sPzFkYzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMmNBQTJjLHNzQkFBc3NCLGdTQUFnUyx1U0FBdVMsd1NBQXdTLHV0QkFBdXRCLHFTQUFxUywrckJBQStyQiwrUkFBK1IsNFJBQTRSLG1TQUFtUyxpU0FBaVMsNFJBQTRSLDRxQkFBNHFCLDRSQUE0UixpU0FBaVMsaVNBQWlTLHVSQUF1UiwwckJBQTByQixrU0FBa1MsZ1JBQWdSLHVSQUF1UixvUkFBb1IsbVJBQW1SLGdSQUFnUiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwicHJpbnRcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2wtbWQtMyBmbG9hdC1sZWZ0IGNvbC0xIHBsLTAgcHItMCBjb2xsYXBzZSB3aWR0aCBzaG93XFxcIiBpZD1cXFwic2lkZWJhclxcXCIgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX1VTRVInLCAnUk9MRV9BRE1JTiddXFxcIj4gPGRpdiBjbGFzcz1cXFwibGlzdC1ncm91cCBib3JkZXItMCBjYXJkIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFxcXCI+IDxici8+PGJyLz4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBkLWlubGluZS1ibG9jayBjb2xsYXBzZWRcXFwiIGRhdGEtcGFyZW50PVxcXCIjc2lkZWJhclxcXCIgcm91dGVyTGluaz1cXFwiZGFzaGJvYXJkXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtZGFzaGJvYXJkXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW0xXFxcIj5EYXNoYm9hcmQ8L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI21lbnUzeFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBkLWlubGluZS1ibG9jayBjb2xsYXBzZWRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIlsnUk9MRV9BRE1JTiddXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFyY2hpdmVcXFwiIG5nYlRvb2x0aXA9XFxcIkludmVudMOhcmlvIGRlIElucXXDqXJpdG9cXFwiIHRpdGxlPVxcXCJJbnZlbnTDoXJpbyBkZSBJbnF1w6lyaXRvXFxcIj48L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW5vbmUgZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtMy50aXRsZVxcXCI+SW52ZW50w6FyaW8gZGUgSW5xdcOpcml0bzwvc3Bhbj4gPC9hPiA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZVxcXCIgaWQ9XFxcIm1lbnUzeFxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNzaWRlYmFyXFxcIj4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcInNpc3RlbWEtYWd1YVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJzXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTMuc3ViSXRlbTFcXFwiPlNpc3RlbWEgZGUgw4FndWFzPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJhdXRob3JpdHlcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1hZGRyZXNzLWNhcmQtb1xcXCIgc3R5bGU9XFxcInNpemU6IDEwcHggIWltcG9ydGFudDtcXFwiPiA8L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW0zLnN1Ykl0ZW0yXFxcIj5Mb2cgU2lzdGVtYSBkZSDDgWd1YXM8L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImluZGljYWRvci1wcm9kdWNhb1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxhcmdlXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTMuc3ViSXRlbTNcXFwiPkluZGljYWRvciBkZSBQcm9kdcOnw6NvPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJpbmRpY2Fkb3ItcHJvZHVjYW9cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1sYXJnZVxcXCIgc3R5bGU9XFxcInNpemU6IDEwcHggIWltcG9ydGFudDtcXFwiPiA8L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW0zLnN1Ykl0ZW00XFxcIj5Mb2cgSW5kaWNhZG9yIGRlIFByb2R1w6fDo288L3NwYW4+IDwvYT4gPC9kaXY+IDxhIGhyZWY9XFxcIiNtZW51NHhcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gZC1pbmxpbmUtYmxvY2sgY29sbGFwc2VkXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCJbJ1JPTEVfQURNSU4nXVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1jYWxlbmRhclxcXCIgbmdiVG9vbHRpcD1cXFwiUHJvZ3JhbWFzLVByb2plY3Rvc1xcXCIgdGl0bGU9XFxcIlByb2dyYW1hcy1Qcm9qZWN0b3NcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW00LnRpdGxlXFxcIj5Qcm9ncmFtYXMtUHJvamVjdG9zPC9zcGFuPiA8L2E+IDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlXFxcIiBpZD1cXFwibWVudTR4XFxcIiBkYXRhLXBhcmVudD1cXFwiI3NpZGViYXJcXFwiPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwidXNlci1tYW5hZ2VtZW50XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdXNlcnNcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtNC5zdWJJdGVtMVxcXCI+UHJvZ3JhbWFzIGUgUHJvamVjdG9zPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJhdXRob3JpdHlcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1hZGRyZXNzLWNhcmQtb1xcXCIgc3R5bGU9XFxcInNpemU6IDEwcHggIWltcG9ydGFudDtcXFwiPiA8L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW00LnN1Ykl0ZW0yXFxcIj5Mb2cgUHJvZ3JhbWFzIGUgUHJvamVjdG9zPC9zcGFuPiA8L2E+IDwvZGl2PiA8YSBocmVmPVxcXCIjbWVudTV4XFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtIGQtaW5saW5lLWJsb2NrIGNvbGxhcHNlZFxcXCIgZGF0YS10b2dnbGU9XFxcImNvbGxhcHNlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCIgKmpoaUhhc0FueUF1dGhvcml0eT1cXFwiWydST0xFX0FETUlOJ11cXFwiPiA8aSBjbGFzcz1cXFwiZmFzIGZhLWJvb2stcmVhZGVyXFxcIiBuZ2JUb29sdGlwPVxcXCJQdWJsaWNhw6fDtWVzXFxcIiB0aXRsZT1cXFwiUHVibGljYcOnw7Vlc1xcXCI+PC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1ub25lIGQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTUudGl0bGVcXFwiPlB1YmxpY2HDp8O1ZXM8L3NwYW4+IDwvYT4gPGRpdiBjbGFzcz1cXFwiY29sbGFwc2VcXFwiIGlkPVxcXCJtZW51NXhcXFwiIGRhdGEtcGFyZW50PVxcXCIjc2lkZWJhclxcXCI+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJ0aXBvLWVzcGFjb1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXVzZXJzXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTUuc3ViSXRlbTFcXFwiPkluw61jaW8gQmFubmVyPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJ0aXBvLWVzcGFjb1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFkZHJlc3MtY2FyZC1vXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTUuc3ViSXRlbTJcXFwiPkluw61jaW8gRGVzdGFxdWVzPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJ0aXBvLWVzcGFjb1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxhcmdlXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTUuc3ViSXRlbTNcXFwiPkluw61jaW8gw5psdGltYXMgTm90w61jaWFzPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJ0aXBvLWVzcGFjb1xcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxhcmdlXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTUuc3ViSXRlbTRcXFwiPkluw61jaW8gUHVibGljYWNhbyBQREY8L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcInRpcG8tZXNwYWNvXFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGFyZ2VcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtNS5zdWJJdGVtNVxcXCI+U29icmUgRE5BIEJhbm5lcjwvc3Bhbj4gPC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwidGlwby1lc3BhY29cXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS10aC1sYXJnZVxcXCIgc3R5bGU9XFxcInNpemU6IDEwcHggIWltcG9ydGFudDtcXFwiPiA8L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW01LnN1Ykl0ZW02XFxcIj5Tb2JyZSBETkE8L3NwYW4+IDwvYT4gPC9kaXY+IDxhIGhyZWY9XFxcIiNtZW51NnhcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW0gZC1pbmxpbmUtYmxvY2sgY29sbGFwc2VkXFxcIiBkYXRhLXRvZ2dsZT1cXFwiY29sbGFwc2VcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcImZhbHNlXFxcIiAqamhpSGFzQW55QXV0aG9yaXR5PVxcXCJbJ1JPTEVfQURNSU4nXVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1iYXItY2hhcnRcXFwiIG5nYlRvb2x0aXA9XFxcIlJlbGF0w7NyaW9zXFxcIiB0aXRsZT1cXFwiUmVsYXTDs3Jpb3NcXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW02LnRpdGxlXFxcIj5SZWxhdMOzcmlvczwvc3Bhbj4gPC9hPiA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZVxcXCIgaWQ9XFxcIm1lbnU2eFxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNzaWRlYmFyXFxcIj4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImF1dGhvcml0eVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFyZWEtY2hhcnRcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtNi5zdWJJdGVtMVxcXCI+U2lzdGVtYSBkZSDDgWd1YXM8L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImF1dGhvcml0eVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFyZWEtY2hhcnRcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtNi5zdWJJdGVtMlxcXCI+SW5kaWNhZG9yIGRlIFByb2R1w6fDo288L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImF1dGhvcml0eVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFyZWEtY2hhcnRcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtNi5zdWJJdGVtM1xcXCI+UHJvZ3JhbWFzIGUgUHJvamVjdG9zPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJhdXRob3JpdHlcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS1hcmVhLWNoYXJ0XFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTYuc3ViSXRlbTRcXFwiPlB1YmxpY2Fjb2VzPC9zcGFuPiA8L2E+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJhdXRob3JpdHlcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJhIGZhLWJhci1jaGFydC1vXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTYuc3ViSXRlbTVcXFwiPkxvZyBSZWxhdMOzcmlvczwvc3Bhbj4gPC9hPiA8L2Rpdj4gPGEgaHJlZj1cXFwiI21lbnUxeFxcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbSBkLWlubGluZS1ibG9jayBjb2xsYXBzZWRcXFwiIGRhdGEtdG9nZ2xlPVxcXCJjb2xsYXBzZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiICpqaGlIYXNBbnlBdXRob3JpdHk9XFxcIlsnUk9MRV9BRE1JTiddXFxcIj4gPGkgY2xhc3M9XFxcImZhcyBmYS11c2Vycy1jb2dcXFwiIG5nYlRvb2x0aXA9XFxcIkNvbmZpZ3VyYcOnw6NvXFxcIiB0aXRsZT1cXFwiQ29uZmlndXJhw6fDo29cXFwiPjwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbm9uZSBkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW0yLnRpdGxlXFxcIj5Db25maWd1cmHDp8O1ZXM8L3NwYW4+IDwvYT4gPGRpdiBjbGFzcz1cXFwiY29sbGFwc2VcXFwiIGlkPVxcXCJtZW51MXhcXFwiIGRhdGEtcGFyZW50PVxcXCIjc2lkZWJhclxcXCI+IDxhIGhyZWY9XFxcIiNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwLWl0ZW1cXFwiIGRhdGEtcGFyZW50PVxcXCIjbWVudTF4XFxcIiByb3V0ZXJMaW5rPVxcXCJ1c2VyLW1hbmFnZW1lbnRcXFwiIHJvdXRlckxpbmtBY3RpdmU9XFxcImFjdGl2ZVxcXCI+IDxpIGNsYXNzPVxcXCJmYSBmYS11c2Vyc1xcXCIgc3R5bGU9XFxcInNpemU6IDEwcHggIWltcG9ydGFudDtcXFwiPiA8L2k+IDxzcGFuIGNsYXNzPVxcXCJkLW1kLWlubGluZVxcXCIgamhpVHJhbnNsYXRlPVxcXCJzaWRlYmFyLml0ZW0yLnN1Ykl0ZW0xXFxcIj5Db250cm9sZSBkZSBBY2Vzc288L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImF1dGhvcml0eVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLWFkZHJlc3MtY2FyZC1vXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTIuc3ViSXRlbTJcXFwiPlBlcmZpbDwvc3Bhbj4gPC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwiYXV0aG9yaXR5XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGFyZ2VcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtMi5zdWJJdGVtM1xcXCI+VGlwbyBTaXR1YWNhbzwvc3Bhbj4gPC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwiYXV0aG9yaXR5XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGFyZ2VcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtMi5zdWJJdGVtNFxcXCI+UHJvdsOtbmNpYTwvc3Bhbj4gPC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwiYXV0aG9yaXR5XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmFzIGZhLXRoLWxhcmdlXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTIuc3ViSXRlbTVcXFwiPk11bmljw61waW88L3NwYW4+IDwvYT4gPGEgaHJlZj1cXFwiI1xcXCIgY2xhc3M9XFxcImxpc3QtZ3JvdXAtaXRlbVxcXCIgZGF0YS1wYXJlbnQ9XFxcIiNtZW51MXhcXFwiIHJvdXRlckxpbms9XFxcImF1dGhvcml0eVxcXCIgcm91dGVyTGlua0FjdGl2ZT1cXFwiYWN0aXZlXFxcIj4gPGkgY2xhc3M9XFxcImZhIGZhLXRoLWxhcmdlXFxcIiBzdHlsZT1cXFwic2l6ZTogMTBweCAhaW1wb3J0YW50O1xcXCI+IDwvaT4gPHNwYW4gY2xhc3M9XFxcImQtbWQtaW5saW5lXFxcIiBqaGlUcmFuc2xhdGU9XFxcInNpZGViYXIuaXRlbTIuc3ViSXRlbTZcXFwiPkNvbXVuYTwvc3Bhbj4gPC9hPiA8YSBocmVmPVxcXCIjXFxcIiBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIiBkYXRhLXBhcmVudD1cXFwiI21lbnUxeFxcXCIgcm91dGVyTGluaz1cXFwiYXV0aG9yaXR5XFxcIiByb3V0ZXJMaW5rQWN0aXZlPVxcXCJhY3RpdmVcXFwiPiA8aSBjbGFzcz1cXFwiZmEgZmEtdGgtbGFyZ2VcXFwiIHN0eWxlPVxcXCJzaXplOiAxMHB4ICFpbXBvcnRhbnQ7XFxcIj4gPC9pPiA8c3BhbiBjbGFzcz1cXFwiZC1tZC1pbmxpbmVcXFwiIGpoaVRyYW5zbGF0ZT1cXFwic2lkZWJhci5pdGVtMi5zdWJJdGVtN1xcXCI+Rm9ybmVjZWRvcmVzPC9zcGFuPiA8L2E+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiBcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluL3dlYmFwcC9hcHAvbGF5b3V0cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21haW4vd2ViYXBwL2FwcC9sYXlvdXRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/layouts/sidebar/sidebar.component.html\n");

/***/ })

})