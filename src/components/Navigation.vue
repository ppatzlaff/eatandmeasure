<template>
  <div>
      <v-app-bar color="primary" prominent class="elevation-0">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Eat & Measure</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer permanent color="primary" v-model="drawer" location="left" v-bind:width="100" app class="elevation-0" >

        <v-list dense nav class="mt-1">
          <v-list-item v-for="item in items"
                       :key="item"
                       :to="item.path"
                       :title="item.title"
          >
            <v-list-item-icon><v-icon> {{ item.icon }}</v-icon></v-list-item-icon>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>

      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>
  </div>
</template>

<script>

  export default {

    data: () => ({
      drawer: false,
      group: null,
      items: [
        { title: 'Dashboard', path: '/dashboard', icon: 'mdi-monitor-dashboard'},
        { title: 'Manage', path: '/manage', icon: 'mdi-food'},
        { title: 'Measure', path: '/measure', icon: 'mdi-scale-balance'},
      ]
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>
