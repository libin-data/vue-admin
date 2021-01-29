<template>
	<div class="childOne">
		<button class="childButton" @click="change">
			{{buttonContent}}
			<slot>ceshislot</slot>
			<slot name="jvming"></slot>
			<slot name="zuoyongyu" :user="user"></slot>
		</button>
	</div>
</template>

<script>
	export default{
		props:{
			buttonContent:{
				type: String,
				required: true
			}
		},
		data () {
			return {
				child: '',
				user: {
					name: 'libin',
					address: 'changning'
				}
			}
		},
		methods: {
			change() {
				console.log('change')
				this.$emit('change')
			}
		}
	}
</script>

<style>
</style>
