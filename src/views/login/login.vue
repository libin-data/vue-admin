<template>
  <div>
	<div class="angle"></div>
	<buttonChild id="share" :buttonContent="buttonCon" @change="getChild" >
		ceshi
		<template v-slot:jvming>
			<p>ceshijvming</p>
		</template>
		<template #zuoyongyu="slotuser">
			{{slotuser.user.name}}
		</template>
	</buttonChild>
  </div>
  
</template>
<script>
import { getsms } from "@/api/login.js";
import buttonChild from "@/components/childOne.vue";
export default {
	components:{
		buttonChild
	},
  data() {
    return {
		buttonCon:'测试内容'
	};
  },

  mounted() {
    // getsms();
    console.log(process.env.VUE_APP_BASEURL);
    console.log(parseInt("0"));
  },
  methods: {
    getsms() {
      getsms()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
	getChild() {
		console.log('change')
	}
  }
};
</script>
<style>
	.angle{
		height: 0;
		width: 0;
		border-bottom: 10px solid black;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 0;
	}
</style>
