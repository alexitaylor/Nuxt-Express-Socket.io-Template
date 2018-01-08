<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        User
      </h1>
      <h2 class="info">
        {{ user.name }}
      </h2>
      <div class="links">
        <nuxt-link class="button" to="/">
          Users
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
    import axios from '~/plugins/axios'
    import Logo from '~/components/Logo'

    export default {
        name: 'id',
        components: {
            Logo
        },
        asyncData ({ params, error }) {
            return axios.get('/api/users/' + params.id)
                .then((res) => {
                    return { user: res.data }
                })
                .catch((e) => {
                    error({ statusCode: 404, message: 'User not found' })
                })
        },
        head () {
            return {
                title: `User: ${this.user.name}`
            }
        }
    }
</script>

<style scoped>
  .title {
    margin-top: 30px;
  }

  .info {
    font-weight: 300;
    color: #9aabb1;
    margin: 0;
    margin-top: 10px;
  }

  .button {
    margin-top: 30px;
  }
</style>
