//配置具体的修改规则
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addPostcssPlugins
} = require("customize-cra");
const path = require("path");
const resolve = dir => path.join(__dirname, dir);

module.exports = override(
  // 配置babel-plugin-import ==> 只打包import模块及css
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    // style: 'css', // 自动打包组件对应css
    style: true, // 加载less编译
  }),
  fixBabelImports('antd', {
    libraryName: 'antd',
    libraryDirectory: 'es',    
    style: true,
  }),
  // 添加less-loader对应的配置  ==> 修改primary对应的颜色
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#FFCC32"
        // "@brand-primary": "#1DA57A",
        // "@brand-primary-tap": "#1DA57A",
      },
    },
  }),
  //配置别名
  addWebpackAlias({
    "@": resolve("./src"),
    "@comp": resolve("./src/components"),
  }),
  addPostcssPlugins([
    require("postcss-px2rem")({ 
      remUnit: 37.5, //按照设计师的设计稿计算出来的根字体大小
      exclude: /node_modules/
    })
  ])
);