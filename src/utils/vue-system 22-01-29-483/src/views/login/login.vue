<template>
  <div class="login-wrap">
    <el-form :model="formItem" :rules="rules2" ref="ruleForm" class="login-main">
      <h3 class="login-title">登录系统</h3>
      <el-form-item prop="account">
        <el-input type="text" class="el-input-mine" placeholder="username" v-model="formItem.account" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input type="password" class="el-input-mine" placeholder="password" v-model="formItem.pass"></el-input>
      </el-form-item>
      <el-button type="primary" style="width:100%;" @click="loginIn('ruleForm')">登录</el-button>
    </el-form>
  </div>
</template>
<script>
import Cookie from 'js-cookie'
import { passCheck } from '@/utils/validate'
export default {
  data () {
    const validAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        callback()
      }
    }
    const validPass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码不能为空'))
      } else if (passCheck(value)) {
        return callback(new Error('密码不能少于8位,且必须有数字字母组合'))
      } else {
        callback()
      }
    }
    return {
      formItem: {
        account: '',
        pass: ''
      },
      rules2: {
        account: [
          {
            validator: validAccount,
            trigger: 'blur'
          }
        ],
        pass: [
          {
            validator: validPass,
            trigger: 'blur'
          }
        ]
      },
      cliboard: ''
    }
  },
  methods: {
    loginIn (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Cookie.set('user', this.formItem.account)
          this.$router.push({
            name: 'main_index'
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/styles/login/login.scss';
</style>
