<template> 
    <div class="nav_home">
        <el-row>
            <el-col :span="4" class="side_left">
                <NavLeft />
            </el-col>
            <el-col :span="20" class="side_right">
                <Header />  
                <div  class="content">
                    <transition>
                        <router-view></router-view>
                    </transition>   
                </div>
              
                <Footer />
            </el-col>  
        </el-row>
    </div>
</template>

<script>
import NavLeft from "@/components/Navleft";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {
    NavLeft,
    Header,
    Footer
  }
};
</script>

<style scoped>
.side_left {
  height: calc(100vh);
  background-color: #001529;
}
.side_right {
  height: calc(100vh);
  overflow: auto;
  background-color: #e0e6ec;
}
.content {
  margin: 20px;
}
</style>
