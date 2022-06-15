<template>
  <div class="pagination">
    <button :disabled="pageNo == 1" @click="GivePageNo(pageNo - 1)">上一页</button>
    <button v-if="startPageAndEndPage.start >= 2" @click="GivePageNo(1)" :class="{active:pageNo == 1}">1</button>
    <button v-if="startPageAndEndPage.start >= 2">···</button>

    <button v-for="(page,index) in startPageAndEndPage.end" :key="index" v-if="page >= startPageAndEndPage.start" @click="GivePageNo(page)" :class="{active:pageNo == page}">{{page}}</button>
    
    <button v-if="startPageAndEndPage.end < totalPage - 1">···</button>
    <button v-if="startPageAndEndPage.end < totalPage" @click="GivePageNo(totalPage)" :class="{active:pageNo == totalPage}">{{totalPage}}</button>
    <button :disabled="pageNo == totalPage" @click="GivePageNo(pageNo + 1)">下一页</button>
    
    <button style="margin-left: 30px">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage(){
        return Math.ceil(this.total/this.pageSize)
    },
    startPageAndEndPage(){
      const {continues,totalPage,pageNo} = this
       let start = 0 , end = 0;
      //  连续页码数5【最少必须有5页】,如果出现不正常的现象 那么一定是连续页码数 < 5
      if(continues > totalPage){
        start = 1;
        end = totalPage;
      }else{
        // 正常现象
        start = pageNo - Math.floor(continues / 2)

        end = pageNo + Math.floor(continues / 2)

        if(start < 1){
          start = 1;
          end = continues;
        }

        if(end > totalPage){
            end = totalPage
            start = (totalPage - continues) + 1
        }

      }

      return {start,end}
    }
  },
  methods: {
    GivePageNo(pageNo){
      this.$emit("getPageNo",pageNo)
    }
  },
};
</script>

<style lang="less" scoped>
.pagination {
    text-align: center;
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>