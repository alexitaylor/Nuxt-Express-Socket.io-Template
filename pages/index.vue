<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        cryptomarket
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link class="button" :to="{name: 'chat'}">CHAT</nuxt-link>
        <ul class="users">
          <li v-for="(user, index) in users" :key="index" class="user">
            <nuxt-link :to="{ name: 'user-id', params: { id: index }}">
              {{ user.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
    import axios from '~/plugins/axios'
    import Logo from '~/components/Logo.vue'

    export default {
        components: {
            Logo
        },
        async asyncData () {
            let { data } = await axios.get('/api/users')
            return { users: data }
        },
        head () {
            return {
                title: 'Users'
            }
        }
    }
</script>

<style scoped>

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .users {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .user {
    margin: 10px 0;
  }

  .button, .button:visited {
    display: inline-block;
    color: black;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #000;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
  }

  .button:hover, .button:focus {
    color: #fff;
    background-color: #000;
  }
</style>
