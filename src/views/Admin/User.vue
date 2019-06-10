<template>
	<div id="user">
		<el-table
		 	:data="tableDataPage"
		   
		    border
		    style="width: 100%">
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="200"
		      align='center'>
		    </el-table-column>
		    <el-table-column
		      prop="avatar"
		      label="头像"
		      width="80"
		      align='center'>
		      <template slot-scope="scope">
		      	<img class="avatar" :src="scope.row.avatar" alt="">
		      </template>
		    </el-table-column>
		    <el-table-column
		      prop="username"
		      label="用户名"
		      width="140"
		      align='center'>
		    </el-table-column>		 
		    <el-table-column
		      prop="email"
		      label="邮箱"
		      width="280"
		      align='center'>
		    </el-table-column>
		    <el-table-column		     
		      label="操作"
		      width="200"
		      align='center'>
		      <template slot-scope="scope">
		        <el-button @click="handleToFreeze(scope.$index,scope.row)" type="primary"
		        size="small">{{scope.row.isFreeze ? '已冻结' : '未冻结'}}</el-button>
		        <el-button @click="handleToDelete(scope.$index,scope.row)" type="danger" size="small">删除</el-button>
		      </template>
		    </el-table-column>
		</el-table>
		<el-pagination
		  class="page"
		  background
		  :page-size="pagesize"
		  :current-page.sync="currentPage"
		  layout="prev, pager, next"
		  :total="tableData.length">
		</el-pagination>
	</div>
</template>

<script>
	import { getUserList, updetaFreeze, deleteUser } from '@/api/request'
	export default {
		name: 'user',
		data(){
			return {
				tableData: [],
				currentPage: 1,
				pagesize: 5
			}
		},
		computed: {
			tableDataPage(){
				return this.tableData.slice((this.currentPage - 1) * this.pagesize, this.pagesize * this.currentPage)
			}
		},
		created(){
			getUserList().then(res => {
				if(res.data.status === 0){
					this.tableData = res.data.data.userList
				}
			})
		},
		methods: {
			handleToFreeze(index, row){
				updetaFreeze({
					email: row.email,
					isFreeze: !row.isFreeze
				}).then((res) => {
					console.log(res)
					const status = res.data.status
					if(status === 0){
						this.$alert('冻结操作成功', '信息', {
				          confirmButtonText: '确定',
				          callback: action => {
				  			row.isFreeze = !row.isFreeze
				          }
				        });
					}else{
						this.$alert('冻结操作失败', '信息', {
				          confirmButtonText: '确定',				      
				        });
					}
				})
			},
			handleToDelete(index, row){
				deleteUser({
					email: row.email
				}).then((res) => {
					console.log(res)
					const status = res.data.status
					if(status === 0){
						this.$alert('删除用户成功', '信息', {
				          confirmButtonText: '确定',
				          callback: action => {
				  			this.tableData.splice(index, 1)
				          }
				        });
					}else{
						this.$alert('删除用户失败', '信息', {
				          confirmButtonText: '确定',				      
				        });
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.avatar{
		width: 40px;
		height: 40px;
	}
	.page{
		margin-top: 20px;
		text-align: left;
	}
</style>