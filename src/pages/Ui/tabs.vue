<style lang="less">
@import "./ui.less";
</style>


<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>tab标签</h2>
            </div>
            <div  class="text item">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="tab1" name="first">欢迎学习vue课程</el-tab-pane>
                    <el-tab-pane label="tab2" :disabled="true" name="second">配置管理</el-tab-pane>
                    <el-tab-pane label="tab3" name="third">vue是一个现在比较火的框架</el-tab-pane>
                </el-tabs>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>Tab带图的标签</h2>
            </div>
            <div  class="text item">
                <el-tabs>
                    <el-tab-pane>
                        <span slot="label"> <i class="el-icon-date card_icon"></i>我的行程</span>
                        欢迎学习vue课程
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-edit card_icon"></i>tab2</span>
                        欢迎学习vue课程
                    </el-tab-pane>
                    <el-tab-pane>
                        <span slot="label"><i class="el-icon-delete card_icon"></i>tab3</span>
                        vue是一个现在比较火的框架
                    </el-tab-pane>
                </el-tabs> 
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>Tab位置的标签</h2>
            </div>
            <div class="text item">
                <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
                    <el-radio-button label="top">top</el-radio-button>
                    <el-radio-button label="right">right</el-radio-button>
                    <el-radio-button label="bottom">bottom</el-radio-button>
                    <el-radio-button label="left">left</el-radio-button>
                </el-radio-group>
                <el-tabs :tab-position="tabPosition" style="height: 200px;">
                    <el-tab-pane label="tab1">欢迎学习vue课程</el-tab-pane>
                    <el-tab-pane label="tab2">欢迎学习vue课程</el-tab-pane>
                    <el-tab-pane label="tab3">vue是一个现在比较火的框架</el-tab-pane>
                </el-tabs>
            </div>
        </el-card>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h2>动态添加tab</h2>
            </div>
            <div class="text item">
                <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
                    <el-tab-pane
                        :key="item.name"
                        v-for="(item, index) in editableTabs"
                        :label="item.title"
                        :name="item.name"
                    >
                        {{item.content}}
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tabPosition: "top",
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "欢迎学习vue课程"
        },
        {
          title: "Tab 2",
          name: "2",
          content: "vue是一个现在比较火的框架"
        }
      ],
      tabIndex: 2,
      tabName: 0
    };
  },
  methods: {
    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        let tabName = ++this.tabName;
        this.editableTabs.push({
          title: "New Tab" + tabName,
          name: newTabName,
          content: "vue是一个现在比较火的框架" + tabName
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
};
</script>
