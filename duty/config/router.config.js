// 注意：使用懒加载方式
import Overview from '../src/components/Overview.vue'
import AddMember from '../src/components/AddMember.vue'

//1.配置路由
const routes = [{
    path: '/overview',
    component: Overview
}, {
	path:'/addmember',
	component:AddMember
}];

//3.暴露router配置
module.exports=routes;
