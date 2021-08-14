<template>
	<section>
		<h1>{{ pageTitle }}</h1>
		<ul>
			<li v-for="user in users" :key="user.id">
				<h2>
					User:
					<a href="#" @click.prevent="goTo(user)"> {{ user.name }} </a>
				</h2>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
  async	asyncData({ store, error }) {
		try {
			const users = await store.dispatch('users/fetchUsers')
			return { users }
		} catch (e) {
			error(e)
		}
	},

	data() {
		return {
			pageTitle: 'User Page',
		}
	},
	methods: {
		goTo(user) {
			this.$router.push('/users/' + user.id)
			console.log(user)
		},
	},
}
</script>
