<template>
	<div id="user">
		<el-table
		 	:data="tableData"
		   
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="180">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="邮箱"
		      width="280">
		    </el-table-column>
		    <el-table-column		     
		      label="操作"
		      width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
		        <el-button type="text">编辑</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'user',
		data(){
			return {
				tableData: [
				{
		          date: '2016-05-02',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1518 弄',
		          zip: 200333
		        }, {
		          date: '2016-05-04',
		          name: '王小虎',
		          province: '上海',
		          city: '普陀区',
		          address: '上海市普陀区金沙江路 1517 弄',
		          zip: 200333
		        }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>