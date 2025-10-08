# 1. 创建过程

1. npx称为包执行器，可以直接执行依赖而不用安装。

2. 使用react官方的脚手架创建项目：`npx create-react-app my-app`。

3. 组件本身的需要的变量定义在组件内部，一些静态的可以放在外面。

4. ts的类型通常放在变量名后，但在配合react/vue的钩子函数使用时，类型是放在泛型里的，这点不要忘记。比如

   ```typescript
   let echartObj = useRef<EChartsType>(null);
   const [phones, setPhones] = useState<Phone[]>([]);
   ```

   

# 2.路由相关

1. hash与history模式，也是老生常谈的问题。hash优势多，但对外给用户的基本都是history，刷新页面重新会发起请求，同时需要后端配合，否则会404。
2. 路由配置以前使用硬编码的模式，类似写html。目前流程和vue类似的配置方式。
3. 子路由的页面得有个展示的地方，所以在父组件中使用`Outlet`标签配置子路由的展示位置，或者说出口。

4. `index.ts`中的`React.StrictMode`的作用是帮助在开发过程中尽早发现组件中的常见错误，它会将组件重新渲染一次，因此有时你会发现有些请求内的console.log()打印了两次。

   

# 3. 首页相关

1. 后台管理系统的前端，通常以下几部分组成：
   - Sider：侧边栏。
   - Header：顶部导航栏。
   - Content：中间显示内容的区域。
   - Footer：可能有底部区域。

​	这些内容全部放在Layout里。

2. 按照由外向内的顺序，相关的文件依次是：
   - `index.ts`：最外层，此处渲染`App`组件。
   - `App.ts`：算是入口，这里会包含一级路由的渲染。
   - `main.ts`：页面主体，也可以叫`Layout`组件，分为Sider、Header和Content等区域。通常在Content区域中会有二级路由的出口。
3. redux类似vuex，目前推荐toolkit的方式。感觉和之前接触的dvajs和react saga类似，都是什么reducer和state。

4. axios是最近流行的ajax库。
5. 使用mockjs可以脱离后端自己模拟接口的返回结果。

6. 
