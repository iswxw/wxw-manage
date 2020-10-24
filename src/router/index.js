/*
 * @Descripttion: 
 * @version: V 1.0
 * @Author: wxw
 * @Date: 2020-10-22 00:09:57
 */
import Vue from "vue";
import Router from "vue-router";
import Home from "../components/common/Home.vue";
import Dashboard from "../components/page/Dashboard.vue";
import Icon from "../components/page/Icon.vue";
import Table from "../components/page/BaseTable.vue";
import Tabs from "../components/page/Tabs.vue";
import BaseForm from "../components/page/BaseForm.vue";
import VueEditor from "../components/page/VueEditor.vue";
import Markdown from "../components/page/Markdown.vue";
import Upload from "../components/page/Upload.vue";
import BaseCharts from "../components/page/BaseCharts.vue";
import DragList from "../components/page/DragList.vue";
import DragDialog from "../components/page/DragDialog.vue";
import I18n from "../components/page/I18n.vue";
import Permission from "../components/page/Permission.vue";
import p404 from "../components/page/404.vue";
import p403 from "../components/page/403.vue";
import Donate from "../components/page/Donate.vue";
import Login from "../components/page/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", redirect: "/dashboard" },
    {
      path: "/", component: Home, meta: "门户主页",
      children: [
        { path: "/dashboard", component: Dashboard, meta: { title: "系统首页" } },
        { path: "/icon", component: Icon, meta: { title: "自定义图标" } },
        { path: "/table", component: Table, meta: { title: "基础表格" } },
        { path: "/tabs", component: Tabs, meta: { title: "tab选项卡" } },
        { path: "/form", component: BaseForm, meta: { title: "基本表单" } },
        { path: "/editor", component: VueEditor, meta: { title: "富文本编辑器" } },
        { path: "/markdown", component: Markdown, meta: { title: "markdown编辑器" } },
        { path: "/upload", component: Upload, meta: { title: "文件上传" } },
        { path: "/charts", component: BaseCharts, meta: { title: "schart图表" } },
        { path: "/drag", component: DragList, meta: { title: "拖拽列表" } },
        { path: "/dialog", component: DragDialog, meta: { title: "拖拽弹框" } },
        { path: "/i18n", component: I18n, meta: { title: "国际化" } },
        { path: "/permission", component: Permission, meta: { title: "权限测试" }, permission: true },
        { path: "/404", component: p404, meta: { title: "404" } },
        { path: "/403", component: p403, meta: { title: "403" } },
        { path: "/donate", component: Donate, meta: { title: "支持作者" } }
      ]
    },
    { path: "/login", component: Login, meta: "登录" },
    { path: "*", redirect: "/404" }
  ]
});
