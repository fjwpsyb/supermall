module.exports = {
   // 别名路径名称配置
   configureWebpack: {
      resolve: {
         alias: {
            'assets': resolve('@/assets'),
            'common': resolve('@/common'),
            'components': resolve('@/components'),
            'network': resolve('@/network'),
            'views': resolve('@/views')
         }
      }
   }
};
