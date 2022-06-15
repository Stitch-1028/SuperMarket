<template>
    <header class="header">
        <!-- 头部的第一行 -->
        <div class="top">
            <div class="container">
                <div class="loginList">
                    <p>尚品汇欢迎您！</p>
                    <p v-if="!userName">
                        <span v-if="!isToken()">请</span>
                        <router-link to="/login">{{!isToken()?'登录':getToken()}}</router-link>
                        <router-link to="register" class="register" v-if="!isToken()">免费注册</router-link>
                    </p>
                    <p v-else>
                        <a style="cursor:pointer" >{{userName}}</a>
                        <a style="cursor:pointer" class="register" @click="exit">退出登录</a>
                    </p>
                </div>
                <div class="typeList">
                    <!-- <a href="###">我的订单</a> -->
                    <router-link to="/center/myorder" >我的订单</router-link>
                    <router-link to="/shopcart">我的购物车</router-link>
                    <a href="###">我的尚品汇</a>
                    <a href="###">尚品汇会员</a>
                    <a href="###">企业采购</a>
                    <a href="###">关注尚品汇</a>
                    <a href="###">合作招商</a>
                    <a href="###">商家后台</a>
                </div>
            </div>
        </div>
        <!--头部第二行 搜索区域-->
        <div class="bottom">
            <h1 class="logoArea">
                <router-link class="logo" title="尚品汇" to="/home" >
                    <img src="./images/logo.png" alt="">
                </router-link>
            </h1>
            <div class="searchArea">
                <form action="###" class="searchForm">
                    <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyWord"/>
                    <button class="sui-btn btn-xlarge btn-danger" type="button" @click="Search">搜索</button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            keyWord:''
        }
    },
    name: "theheader",
    methods: {
        Search(){
            // 搜索按钮的回调函数
            // 路由传参
            // 传统传参
            // this.$router.push("/search/"+this.keyWord)
            // 模板字符串传参
            // this.$router.push(`/search/${this.keyWord}`)
            // 对象的形式

            let location = {name:"search"}
            if(this.$route.query){
                location.query = this.$route.query
            }
            location.params  = {keyWord:this.keyWord || undefined}

            this.$router.push(location)
        },
        isToken(){
            if(this.$store.state.Home.userInfo.name){
                return true;
            }else{
                return false
            }
        },
        exit(){
            this.$store.dispatch('exit')
            localStorage.removeItem('TOKEN')
            location.reload()
        }
    },
    async mounted(){
        this.$bus.$on("clear",()=>{
            this.keyWord = ''
        }),
        await this.$store.dispatch('checkToken')
    },
    computed:{
        userName(){
            return this.$store.state.Home.userInfo.name || undefined
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    &>.top {
        background-color: #eaeaea;
        height: 30px;
        line-height: 30px;

        .container {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .loginList {
                float: left;

                p {
                    float: left;
                    margin-right: 10px;

                    .register {
                        border-left: 1px solid #b3aeae;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                }
            }

            .typeList {
                float: right;

                a {
                    padding: 0 10px;

                    &+a {
                        border-left: 1px solid #b3aeae;
                    }
                }

            }

        }
    }

    &>.bottom {
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;

        .logoArea {
            float: left;

            .logo {
                img {
                    width: 175px;
                    margin: 25px 45px;
                }
            }
        }

        .searchArea {
            float: right;
            margin-top: 35px;

            .searchForm {
                overflow: hidden;

                input {
                    box-sizing: border-box;
                    width: 490px;
                    height: 32px;
                    padding: 0px 4px;
                    border: 2px solid #ea4a36;
                    float: left;

                    &:focus {
                        outline: none;
                    }
                }

                button {
                    height: 32px;
                    width: 68px;
                    background-color: #ea4a36;
                    border: none;
                    color: #fff;
                    float: left;
                    cursor: pointer;

                    &:focus {
                        outline: none;
                    }
                }
            }
        }
    }
}
</style>
