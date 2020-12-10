<template>
  <!-- Provides the application the proper gutter -->
  <v-container fluid class="people-container notransition">
    <!-- <v-subheader>Subheader here</v-subheader> -->
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :to="{ name: 'main-app-page', params: { id: item.title } }"         
          :key="item.title"
        >
          <v-list-item-avatar :color="item.color">
            <span class="white--text headline mx-auto">{{ item.initials }}</span>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-html="item.title"
              class="font-weight-bold"
            ></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-list-item-action-text
              v-text="item.action"
            ></v-list-item-action-text>

          </v-list-item-action>
        </v-list-item>
      </template>
    </v-list>
  </v-container>
</template>

 

<script>

export default {
  name: "AppListView",

  data: () => ({
    items: [
      // { header: 'Today' },

      {
        action: "08:21",
        initials: "F1",
        title: "Folder 1",
        subtitle: "random text",
        color: "green"
      },
      { divider: true, inset: false },
      {
        initials: "F2",
        action: "19:28",
        color: "blue",
        title: "Folder 2",
        subtitle: "random text",
      },
      { divider: true, inset: false },

      {
        initials: "F3",
        color: "red",
        action: "10:40",
        title: "Folder 3",
        subtitle: "some text",
      },
      { divider: true, inset: false },
      {
        action: "09:16",
        initials: 'F4',
        color: "orange",
        title: "Folder 4",
        subtitle: "random text",
      },
      { divider: true, inset: false },
      {
        action: "10:20",
        initials: "F5",
        color: "pink",
        title: "Folder 5",
        subtitle: "random text",          
      },

      { divider: true, inset: false },
      {
        action: "04:11",
        initials: "F6",
        title: "Folder 6",
        subtitle: "random text",
        color: "black"
      },
      { divider: true, inset: false },
      {
        initials: "F7",
        action: "09:41",
        color: "blue",
        title: "Folder 7",
        subtitle: "random text",
      },
      { divider: true, inset: false },

      {
        initials: "F8",
        color: "red",
        action: "21:52",
        title: "Folder 8",
        subtitle: "some text",
      },
      { divider: true, inset: false },
      {
        action: "14:32",
        initials: 'F9',
        color: "purple", 
        title: "Folder 9",
        subtitle: "random text",
      },

    ],
  }),


};
</script>
