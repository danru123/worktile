<template>
    <div class="new_detail">
        <div class="new_deta_main">
            <div class="new_deta_fetch">
                <div>上传文件</div>
            </div>
            <table class="new_de_con">
                <thead>
                    <tr>
                        <th>文件名</th>
                        <th>大小</th>
                        <th>上传者</th>
                        <th>上传时间</th>
                    </tr>
                </thead>
            </table>
        </div>
        <!-- <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->
    </div>
</template>

<script>
export default {
//     data() {
//       return {
//         fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
//       };
//     },
//     methods: {
//       handleRemove(file, fileList) {
//         console.log(file, fileList);
//       },
//       handlePreview(file) {
//         console.log(file);
//       },
//       handleExceed(files, fileList) {
//         this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
//       },
//       beforeRemove(file, fileList) {
//         return this.$confirm(`确定移除 ${ file.name }？`);
//       }
//     }
  }
</script>

<style scoped>
    ul li{
        list-style:none;
    }
    a{
        text-decoration: none;
    }
    em,i{
        font-style: normal;
    }
    .new_detail{
        width: 100%;
        height:100%;
        position: relative;
        background:url('../../../../assets/desktop-5.jpg')no-repeat;
        background-size: cover;
    }
    .new_deta_main{
        width: 81%;
        height: 82%;
        position: absolute;
        left: 1%;
        top: 3%;
        background: #fff;
    }
    .new_de_con{
        width: 100%;
        color: #333;
        margin-bottom: 1.25rem;
        background-color: transparent;
        position: relative;
        top: 15px;
    }
    .new_de_con tr{
        height: 55px;
    }
    .new_de_con tr th{
        padding-left: 35px;
        position: relative;
        border-top: 0;
        color: #888;
        vertical-align: bottom;
        font-weight: 400;
        border-bottom: 1px solid #eee;
        padding: 12px 15px;
    }
    .new_deta_fetch{
        width: 95%;
        margin: 10px;
    }
    .new_deta_fetch div{
        float: right;
        margin-right: 20px;
        width: 120px;
        height: 28px;
        border-radius: 18px;
        background-color: #22d7bb;
        border-color: #22d7bb;
        color: #fff;
        line-height: 28px;
        text-align: center;
        cursor: pointer;
        margin-top: 10px;
    }
    .new_deta_fetch img{
        display:inline-block;
        font-size: 70px;
        color: #ccc;
        position: relative;
        left: 45%;
        top: 140px;
    }
    .new_deta_fetch  span{
        font-size: 18px;
        color: #ccc;
        position: relative;
        left: 34%;
        top: 160px;
    }
</style>
