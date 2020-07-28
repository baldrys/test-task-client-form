<template>
	<div id="app">
		<ClientForm />
	</div>
</template>

<script>
import ClientForm from "./components/ClientForm.vue";

export default {
	name: "App",
	components: {
		ClientForm,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

html,
body {
	font-family: "Roboto Condensed", sans-serif;
}

#app {
	font-family: "Roboto Condensed", sans-serif;
}
</style>
