<template>
	<div class="sticky top-0 bg-white w-full z-30">
	<header
		class="mx-lg wfull flex items-center justify-between h-fit py-4 w-full  px-5 border border-b border-black "
	>
		<!-- Logo -->
		<NuxtLink to="/">
			<IconLogo class="w-5" />
		</NuxtLink>
		<!-- Nav -->
		<ul class="md:flex items-center space-x-3 hidden">
			<template :key="`Navitem${i}`" v-for="(n, i) in nav">
				<li>
					<NuxtLink
						class="inline-block text-sm"
						:to="n.link"
						>{{ n.text }}</NuxtLink
					>
				</li>
			</template>
		</ul>
	
	</header>
</template>
<script setup>
	const nav = [
		{
			text: "Solutions",
			link: "/Solutions",
		},
		{
			text: "Services",
			link: "/services",
		},
		{
			text: "News & Events",
			link: "/News & Events",
		},
		
		{
			text: "Company",
			link: "/company",
		},
		{
			text: "Slide",
			link: "/slide",
		},
	];
</script>
<style>
.router-link-active{
	

}
.router-link-active:hover{

}
header{
	width: 100vw;
}
</style>