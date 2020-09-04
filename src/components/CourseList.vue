<template>
  <div id="course-list">
    <h1>所有课程</h1>
    <el-row class="list-filter">
      <!-- tab 切换 -->
      <el-col>
        <!-- 通过 class 绑定实现切换 -->
        <el-button class="el-button--primary"
                   size="mini" round >全部课程</el-button>
        <el-button class="el-button--text"
                   size="mini" round >自然科学</el-button>
        <el-button class="el-button--text"
                   size="mini" round >园艺栽培</el-button>
        <el-button class="el-button--text"
                   size="mini" round >创意绘画</el-button>
        <el-button class="el-button--text"
                   size="mini" round >摄影技巧</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <!-- 单个的卡片列 -->

      <el-col :span="6" v-for="(item, index) in 6"
              :index="index"
              :key="index"
              class=""><!-- 0 == flag || item.courseType == flag ? '' : 'hide' -->
        <!-- card div -->
        <router-link to="/home/course/xxx">
          <div class="course" >
            <!-- img div -->
            <!-- 使用 require 方法请求图片地址实现图片绑定 -->
            <div :style="{background: 'transparent url(' +
              require('../assets/images/course/c1.jpg') + ') no-repeat scroll center center'}" class="course-img" >
              <!-- time div -->
              <div class="course-date">
                <!-- 使用过滤器实现日期格式化 -->
                <time class="time">2018-06-01 11:11</time>
              </div>
            </div>
            <!-- info div -->
            <div class="course-info">
              <!-- class name div -->
              <div class="course-name">
                课程名
              </div>
              <!-- teacher name div -->
              <div class="teacher-name">
                老师名
              </div>
            </div>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>
  <script>
    export default {
      name: 'course-list',
      data () {
        return{

        }
      },
      create:{ //页面加载

      },

    }

  </script>

<style scoped>
  @import '../assets/css/course-list.css';
</style>
