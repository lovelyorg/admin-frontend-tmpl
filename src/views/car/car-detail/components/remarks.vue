<template>
  <el-card v-if="false" class="box-card">
    <div slot="header" class="clearfix">
      <span>备注</span>
    </div>
    <div class="text item">1、当“车辆的出售方式”选择为“收购”时，需填写“车辆的购进价格”。</div>
    <div class="text item">2、“交强险到期时间”“商业险到期时间”“质保到期时间”“年检有效时间”可以选择时间，当选择时间小于当前日期时，显示过期。</div>
    <div class="text item">3、当输入车辆VIN码后，自动调取车辆的维保记录。</div>
    <div
      class="text item danger"
    >4、车辆点击保存后自动生成车源编码，收购车辆编码规则：DZ+年份+月份+日期+车辆录入顺序 例如：DZ1909010001 寄售车源：DP</div>
    <div class="text item danger">5、新车含税价格=新车价格+开票价×（1+13%）×10%，当选择车辆的品牌车型车系后，自动进行计算。</div>
    <div class="text item danger">6、点击“客户姓名”旁边的放大镜在“卖车客户列表中”选择客户，如有该客户信息带出对应的客户信息，如没有可直接填写。</div>
  </el-card>
</template>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 12px;
}

.danger {
  color: #f56c6c;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>