<template>
	<Header></Header>
	<div class="container my-3">
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	name: 'App',
	components: {
		Header
	}
}
</script>

<style>

	@import url('http://fonts.cdnfonts.com/css/baloo-2-2');

	* {
		font-family: 'Baloo 2', sans-serif;
		font-size: 18px;
	}

</style>