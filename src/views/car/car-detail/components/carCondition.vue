<template>
  <div>
    <div style="width: 620px;display: inline-block;vertical-align: top;margin-right: 20px;">
      <div>
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td colspan="6" class="title">排除重大碰撞-40项</td>
          </tr>
          <tr>
            <td colspan="2">事故判断</td>
            <td colspan="4">
              <el-checkbox-group v-model="checkList" style="width: 100%;">
                <el-checkbox label="事故车"></el-checkbox>
                <el-checkbox label="正常车"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>代码</td>
            <td>BX</td>
            <td>XF</td>
            <td>GH</td>
            <td>SH</td>
            <td>ZZ</td>
          </tr>
          <tr>
            <td>描述</td>
            <td>变形</td>
            <td>修复</td>
            <td>更换</td>
            <td>烧焊</td>
            <td>褶皱</td>
          </tr>
          <tr>
            <td colspan="2">左前纵梁</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">右前车门裙边</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右前纵梁</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">左后车门裙边</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左后纵梁</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">右后车门裙边</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右后纵梁</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后备箱底板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左前翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后围板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右前翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">左后翼子板导水槽</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左后翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">右后翼子板导水槽</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右后翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后部导水槽</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左前减震器支架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">前防撞梁</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右前减震器支架</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后防撞梁</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">防火墙</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">水箱框架</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左A柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">车顶</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右A柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">车架号</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左B柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">方向盘</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右B柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">仪表台</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左C柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">前排座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右C柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后排座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左D柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">前排内饰板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">右D柱</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">后排内饰板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td colspan="2">左前车门裙边</td>
            <td>
              <input type="text" />
            </td>
            <td colspan="2">气囊警示灯</td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </table>
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td colspan="4" class="title">排除泡水火烧-43项</td>
          </tr>
          <tr>
            <td>泡水火烧判定</td>
            <td colspan="3">
              <el-checkbox-group
                v-model="checkList"
                style="width: 100%;"
                class="long-checkbox-group"
              >
                <el-checkbox label="火烧车" style="margin:0"></el-checkbox>
                <el-checkbox label="泡水车" style="margin:0"></el-checkbox>
                <el-checkbox label="正常车" style="margin:0"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>左前大灯总成</td>
            <td>
              <input type="text" />
            </td>
            <td>中央扶手区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>右前大灯总成</td>
            <td>
              <input type="text" />
            </td>
            <td>点烟器座</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>左前雾灯</td>
            <td>
              <input type="text" />
            </td>
            <td>驾驶室内保险盒</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>右前雾灯</td>
            <td>
              <input type="text" />
            </td>
            <td>副驾驶仪表台</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>左后尾灯</td>
            <td>
              <input type="text" />
            </td>
            <td>后排中控</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>右后尾灯</td>
            <td>
              <input type="text" />
            </td>
            <td>后置物板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>左前翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td>主驾驶座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>右前翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td>副驾驶座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>左后翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td>左后座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>右后翼子板骨架</td>
            <td>
              <input type="text" />
            </td>
            <td>右后座椅区域</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>电机电控及附件</td>
            <td>
              <input type="text" />
            </td>
            <td>安全带</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>机舱内保险盒</td>
            <td>
              <input type="text" />
            </td>
            <td>座椅滑轨及安装螺丝</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>防火墙</td>
            <td>
              <input type="text" />
            </td>
            <td>地毯</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>防火墙隔热棉</td>
            <td>
              <input type="text" />
            </td>
            <td>天窗饰板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>转向柱</td>
            <td>
              <input type="text" />
            </td>
            <td>后备箱盖内饰板</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>A柱</td>
            <td>
              <input type="text" />
            </td>
            <td>前排内饰</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>B柱</td>
            <td>
              <input type="text" />
            </td>
            <td>后排内饰</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>C柱</td>
            <td>
              <input type="text" />
            </td>
            <td>后备箱内饰</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>D柱</td>
            <td>
              <input type="text" />
            </td>
            <td>顶棚</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>后备箱止震板</td>
            <td>
              <input type="text" />
            </td>
            <td>轮胎扳手</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>备用轮胎</td>
            <td>
              <input type="text" />
            </td>
            <td>拖车钩防盗螺丝</td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>千斤顶</td>
            <td>
              <input type="text" />
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <div>
        <table border="0" cellspacing="0" cellpadding="0" class="td-4col-in-1row">
          <tr>
            <td colspan="4" class="title">诊断仪检测-19项</td>
          </tr>
          <tr>
            <td>电机控制器(大陆) MCU</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>空调控制器AC</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>电机控制器(自主) MCU</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>电动助力转向系统EPS</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>整车控制器VCU</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>日行灯控制系统DRL</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>智能进入控制系统PEPS</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>电子驻车控制系统EPB</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>车身控制系统BCM</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>电池管理系统BMS</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>安全气囊控制系统</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>车载充电机OBC</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>制动防抱死系统ABS</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>电子换挡器EDM</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>组合仪表(新款) IC</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>多媒体影音系统MP5</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>组合仪表(旧款) IC</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td>电池冷却系统BCU</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
          </tr>
          <tr>
            <td>电动水泵EWP</td>
            <td>
              <el-checkbox-group v-model="checkList">
                <el-checkbox label="正常"></el-checkbox>
                <el-checkbox label="不正常"></el-checkbox>
              </el-checkbox-group>
            </td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div style="width: 620px;display: inline-block;vertical-align: top;">
      <table border="0" cellspacing="0" cellpadding="0" class="td-4col-in-1row">
        <tr>
          <td colspan="4" class="title">常用功能检查-17项</td>
        </tr>
        <tr>
          <td>前雨刷</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>倒车影像</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>后雨刷</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>全景摄像头</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>左右后视镜</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>方向盘</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>中控锁</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>空调</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>车身稳定系统</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>驾驶模式选择</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>影音系统</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>电动门窗</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>中控台</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>天窗</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>前驻车雷达啊</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>驻车制动系统</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>后驻车雷达啊</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td colspan="8" class="title">骨架检查-31项</td>
        </tr>
        <tr>
          <td
            colspan="8"
          >划痕:HH&nbsp;&nbsp;&nbsp;&nbsp;变形:BX&nbsp;&nbsp;&nbsp;&nbsp;锈蚀:XS&nbsp;&nbsp;&nbsp;&nbsp;裂纹:LW&nbsp;&nbsp;&nbsp;&nbsp;凹陷:AZ&nbsp;&nbsp;&nbsp;&nbsp;修复:XF</td>
        </tr>
        <tr>
          <td style="width:110px;">左前纵梁</td>
          <td>
            <input type="text" />
          </td>
          <td style="width:114px;">左后翼子板导水槽</td>
          <td>
            <input type="text" />
          </td>
          <td style="width:110px;">左A柱</td>
          <td>
            <input type="text" />
          </td>
          <td style="width:110px;">防火墙</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>右前纵梁</td>
          <td>
            <input type="text" />
          </td>
          <td>右后翼子板导水槽</td>
          <td>
            <input type="text" />
          </td>
          <td>右A柱</td>
          <td>
            <input type="text" />
          </td>
          <td>后备箱底板</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>左后纵梁</td>
          <td>
            <input type="text" />
          </td>
          <td>左前减震器支架</td>
          <td>
            <input type="text" />
          </td>
          <td>左B柱</td>
          <td>
            <input type="text" />
          </td>
          <td>后围板</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>右后纵梁</td>
          <td>
            <input type="text" />
          </td>
          <td>右前减震器支架</td>
          <td>
            <input type="text" />
          </td>
          <td>右B柱</td>
          <td>
            <input type="text" />
          </td>
          <td>后部导水槽</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>左前翼子板骨架</td>
          <td>
            <input type="text" />
          </td>
          <td>左前车门裙边</td>
          <td>
            <input type="text" />
          </td>
          <td>左C柱</td>
          <td>
            <input type="text" />
          </td>
          <td>前防撞梁</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>左前翼子板骨架</td>
          <td>
            <input type="text" />
          </td>
          <td>右前车门裙边</td>
          <td>
            <input type="text" />
          </td>
          <td>右C柱</td>
          <td>
            <input type="text" />
          </td>
          <td>后防撞梁</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>左后翼子板骨架</td>
          <td>
            <input type="text" />
          </td>
          <td>左后车门裙边</td>
          <td>
            <input type="text" />
          </td>
          <td>左D柱</td>
          <td>
            <input type="text" />
          </td>
          <td>水箱框架</td>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td>左后翼子板骨架</td>
          <td>
            <input type="text" />
          </td>
          <td>右后车门裙边</td>
          <td>
            <input type="text" />
          </td>
          <td>右D柱</td>
          <td>
            <input type="text" />
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table border="0" cellspacing="0" cellpadding="0" class="td-4col-in-1row">
        <tr>
          <td colspan="4" class="title">启动检查-6项</td>
        </tr>
        <tr>
          <td>钥匙启动检查</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>仪表自检</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>电机电控及附件</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>故障警示</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>转向助力检查</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>蓄电池检查</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>转向助力检查</td>
          <td colspan="3"></td>
        </tr>
      </table>

      <table border="0" cellspacing="0" cellpadding="0" class="td-4col-in-1row">
        <tr>
          <td colspan="4" class="title">灯光系统-11项</td>
        </tr>
        <tr>
          <td>前雾灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>近光灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>后雾灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>远光灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>刹车灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>大灯高度调节</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>倒车灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>前转向灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>前排室内灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>后转向灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>后排室内灯</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>

      <table border="0" cellspacing="0" cellpadding="0" class="td-4col-in-1row">
        <tr>
          <td colspan="4" class="title">随车工具-7项</td>
        </tr>
        <tr>
          <td>备用轮胎</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>三角警示牌</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>千斤顶</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>拖车钩</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>车载充电器</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td>防盗螺丝</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
        </tr>
        <tr>
          <td>扳手</td>
          <td>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="不正常"></el-checkbox>
            </el-checkbox-group>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: ['']
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
$table-border-color: #606266;

table {
  display: inline-block;
  border-right: 1px solid $table-border-color;
  border-bottom: 1px solid $table-border-color;
  margin-bottom: 12px;
  vertical-align: top;

  td {
    border-left: 1px solid $table-border-color;
    border-top: 1px solid $table-border-color;
    padding: 2px 3px;
    color: #303133;
    font-size: 13px;
  }

  .title {
    text-align: center;
    font-weight: bold;
  }
}

input {
  width: 36px;
}

.el-checkbox-group {
  width: 155px;
}

.el-checkbox {
  margin: 0 8px 0 8px;
}

.td-4col-in-1row {
  td {
    width: 146px;
  }
}

.long-checkbox-group /deep/ .el-checkbox__label {
  padding-left: 4px;
  padding-right: 10px;
}
</style>