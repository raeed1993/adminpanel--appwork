<template>
  <div class="ui-block">
    <h3 class="ui-block-heading">Bootstrap 4 toasts</h3>

    <h4 class="ui-block-heading">Default</h4>

    <div class="cui-example">

      <b-toast :toast-class="`bs4-toast ${toast.variant || ''}`" :static="true" :visible="true" :no-auto-hide="true" v-for="toast in bs4Toasts" :key="toast.title">
        <template v-slot:toast-title>
          <div class="d-flex align-items-center flex-grow-1 mr-2">
            <img :src="publicUrl + toast.avatar" class="d-block ui-w-20 rounded mr-2" alt="">
            <div class="font-weight-bold mr-auto">{{ toast.title }}</div>
            <div class="d-block small">{{ toast.time }}</div>
          </div>
        </template>
        {{ toast.message }}
      </b-toast>

    </div>

    <h4 class="ui-block-heading">Translucent</h4>

    <div class="cui-example">
      <div class="ui-bg-cover ui-bg-overlay-container p-4" :style="`background-image: url('${publicUrl}img/bg/1.jpg');`">
        <div class="ui-bg-overlay bg-dark opacity-50"></div>

          <b-toast :toast-class="`bs4-toast ${toast.variant || ''}`" :static="true" :visible="true" :no-auto-hide="true" v-for="toast in translucentBs4Toasts" :key="toast.title">
            <template v-slot:toast-title>
              <div class="d-flex align-items-center flex-grow-1 mr-2">
                <img :src="publicUrl + toast.avatar" class="d-block ui-w-20 rounded mr-2" alt="">
                <div class="font-weight-bold mr-auto">{{ toast.title }}</div>
                <div class="d-block small">{{ toast.time }}</div>
              </div>
            </template>
            {{ toast.message }}
          </b-toast>

      </div>
    </div>

    <h4 class="ui-block-heading">Page toasts</h4>

    <div class="cui-example">

      <b-btn variant="default" @click="showBs4Toast('Default')">Default</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Primary', 'primary')">Primary</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Secondary', 'secondary')">Secondary</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Success', 'success')">Success</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Warning', 'warning')">Warning</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Info', 'info')">Info</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Danger', 'danger')">Danger</b-btn>
      <b-btn variant="default" @click="showBs4Toast('Dark', 'dark')">Dark</b-btn>

    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bs4Toasts: [{
      variant: null,
      avatar: 'img/avatars/1.png',
      title: 'Default',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-primary',
      avatar: 'img/avatars/1.png',
      title: 'Primary',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-secondary',
      avatar: 'img/avatars/1.png',
      title: 'Secondary',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-success',
      avatar: 'img/avatars/1.png',
      title: 'Success',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-warning',
      avatar: 'img/avatars/1.png',
      title: 'Warning',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-info',
      avatar: 'img/avatars/1.png',
      title: 'Info',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-danger',
      avatar: 'img/avatars/1.png',
      title: 'Danger',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-dark',
      avatar: 'img/avatars/1.png',
      title: 'Dark',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }],

    translucentBs4Toasts: [{
      variant: null,
      avatar: 'img/avatars/1.png',
      title: 'Default',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-primary',
      avatar: 'img/avatars/1.png',
      title: 'Primary',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-secondary',
      avatar: 'img/avatars/1.png',
      title: 'Secondary',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-success',
      avatar: 'img/avatars/1.png',
      title: 'Success',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-warning',
      avatar: 'img/avatars/1.png',
      title: 'Warning',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-info',
      avatar: 'img/avatars/1.png',
      title: 'Info',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-danger',
      avatar: 'img/avatars/1.png',
      title: 'Danger',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }, {
      variant: 'bg-dark',
      avatar: 'img/avatars/1.png',
      title: 'Dark',
      time: '11 mins ago',
      message: 'Hello, world! This is a toast message.'
    }]
  }),
  methods: {
    showBs4Toast (text, variant) {
      this.$bvToast.toast('This is a toast', {
        title: `${text} Toast`,
        autoHideDelay: 5000,
        appendToast: true,
        toastClass: variant ? `bs4-toast bg-${variant}` : 'bs4-toast'
      })
    }
  }
}
</script>
