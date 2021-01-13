<template>
    <div id="registe" class="contarin_r">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"  class="demo-ruleForm">
            <div class="flexBox justify_between_stretch regFix">
                 <el-form-item  class="col_48" prop="firstname">
                    <el-input type="text" v-model="ruleForm.firstname" placeholder="First Name*" autocomplete="off"></el-input>
                 </el-form-item>
                 <el-form-item class="col_48">
                    <el-input type="text" v-model="ruleForm.lastname" placeholder="Last Name"></el-input>
                 </el-form-item>
            </div>
            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.company" placeholder="Company"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100 downSan">
                    <el-select v-model="ruleForm.role" placeholder="Role">
                      <el-option
                        v-for="item in roleOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.title" placeholder="Title"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.email" placeholder="Email*"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100 downSan">
                    <el-select v-model="ruleForm.location" placeholder="Location">
                      <el-option
                        v-for="item in roleOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.phone" placeholder="Phone*"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.fax" placeholder="Fax"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <el-input type="text" v-model="ruleForm.country" placeholder="Country*"></el-input>
                 </el-form-item>
            </div>

            <div class="flexBox justify_between_stretch regFix">
                <el-form-item class="col_100">
                    <h2 class="text_upper regist_btn" @click="registToLogin">{{$t('home.Registration')}}</h2>
                 </el-form-item>
            </div>
           
        </el-form>
    </div>
</template>

<script>
import {bus} from '../../utils/bus'
export default {
    name:"registe",
    prop:['loginVisible'],
    data() {
       var CheckFirstName = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('Error'));
        }
      };
     return{
         ruleForm:{
           firstname:'',
           lastname:'',
           company:'',
           role:'',
           title:'',
           email:'',
           location:'',
           phone:'',
           fax:'',
           country:"",
         },

         //验证数据
         rules: {
          firstname: [
            { validator: CheckFirstName, trigger: 'blur' }
          ],
        },

        //下拉选项
        roleOptions: [{
              value: '选项1',
              label: '选项1'
            }, {
              value: '选项2',
              label: '选项2'
            }, {
              value: '选项3',
              label: '选项3'
            }, {
              value: '选项4',
              label: '选项4'
            }, {
              value: '选项5',
              label: '选项5'
        }],
          
      }
    },
    methods: {
        registToLogin(){
          this.loginVisible = true;
          bus.$emit('loginfun',this.loginVisible);
        }
    }
}
</script>

<style lang="scss" scoped>
body{
    background: #344a5f;
}

.flexBox {margin-bottom: 25px;}
.regist_btn{
        padding: 20px;
        width: 100%;
        height: auto;
        position: relative;
        border-radius: 50px;
        background: #e30613;
        color: #fff;
        text-align: center;
        cursor: pointer;
    }
</style>