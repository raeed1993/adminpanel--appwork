<template>
  <!-- `.messages-wrapper` fills all available space of container -->
  <div class="messages-wrapper" :class="{'messages-sidebox-open': sideboxOpen}">

    <!-- Messages sidebox -->
    <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="messages-sidebox messages-scroll bg-body border-right">

      <div class="py-3 px-4">
        <div class="media align-items-center">
          <div class="media-body">
            <b-btn variant="primary" :block="true">Compose</b-btn>
          </div>
          <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="messages-sidebox-toggler d-lg-none d-block text-muted text-large font-weight-light pl-4">&times;</a>
        </div>
      </div>
      <hr class="border-light mx-4 mt-0 mb-4">

      <!-- Mail boxes -->
      <a v-for="(box, boxId) in mailBoxes" :key="box.title" href="javascript:void(0)" class="d-flex justify-content-between align-items-center py-2 px-4" :class="{'font-weight-bold text-body': currentMailBox === boxId, 'text-muted': currentMailBox !== boxId}">
        <div><i :class="box.icon"></i> &nbsp; {{box.title}}</div>
        <div class="badge badge-primary" v-if="box.count">{{box.count}}</div>
      </a>
      <!-- / Mail boxes -->

      <hr class="border-light m-4">

      <!-- Labels -->
      <h6 class="text-tiny font-weight-bold px-4">LABELS</h6>
      <a v-for="label in labels" :key="label.title" href="javascript:void(0)" class="d-block text-muted py-1 px-4">
        <span class="badge badge-dot" :class="`badge-${label.color}`"></span> &nbsp; {{label.title}}
      </a>
      <!-- / Labels -->

    </perfect-scrollbar>
    <!-- / Messages sidebox -->

    <!-- Messages content wrapper -->
    <div class="d-flex flex-column w-100">

      <!-- Header -->
      <div class="flex-grow-0">

        <h4 class="media align-items-center font-weight-bold container-p-x py-3 py-lg-4 m-0">
          <a @click.prevent="sideboxOpen = !sideboxOpen" href="#" class="messages-sidebox-toggler d-lg-none d-block align-self-center text-muted px-3 mr-3"><i class="ion ion-md-more"></i></a>
          <div class="media-body">
            <i class="ion ion-ios-filing"></i> &nbsp; Inbox
          </div>
          <b-input size="sm" placeholder="Search..." style="max-width: 10rem;" />
        </h4>
        <hr class="border-light m-0">

        <!-- Controls -->
        <div class="media flex-wrap align-items-center py-1 px-1 px-lg-4">
          <div class="media-body d-flex flex-wrap flex-basis-100 flex-basis-sm-auto">
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Refresh"><i class="ion ion-md-refresh"></i></b-btn>
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as unread"><i class="ion ion-md-mail-unread"></i></b-btn>
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Mark as important"><i class="ion ion-md-alert"></i></b-btn>
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to spam"><i class="ion ion-md-folder-open"></i></b-btn>
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted" v-b-tooltip.hover title="Move to trash"><i class="ion ion-md-trash"></i></b-btn>
          </div>

          <div class="text-muted mr-3 ml-auto">1-25 of 91</div>

          <div class="d-flex flex-wrap">
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-back"></i></b-btn>
            <b-btn variant="default borderless md-btn-flat icon-btn text-muted"><i class="ion ion-ios-arrow-forward"></i></b-btn>
          </div>
        </div>
        <hr class="border-light m-0">
        <!-- / Controls -->

      </div>
      <!-- / Header -->

      <!-- Wrap `.messages-scroll` to properly position scroll area. Remove this wrapper if you don't need scroll -->
      <div class="flex-grow-1 position-relative">

        <!-- Remove `.messages-scroll` and add `.flex-grow-1` if you don't need scroll -->
        <perfect-scrollbar :options="{ suppressScrollX: true, wheelPropagation: true }" class="messages-content messages-scroll">
          <ul class="list-group messages-list">

            <li class="list-group-item container-p-x" v-for="message in messagesData" :key="message.id">
              <div class="message-checkbox mr-1">
                <b-checkbox :checked="selected.includes(message)" @change="toggleSelect($event, message)" />
              </div>
              <a href="javascript:void(0)" class="ion d-block text-big mr-3" :class="{'text-lighter ion-md-star-outline': !message.marked, 'text-warning ion-md-star': message.marked}"></a>
              <a href="javascript:void(0)" class="message-sender flex-shrink-1 d-block text-body">
                <span class="badge badge-dot mr-1" v-if="message.label" :class="`badge-${labels[message.label].color}`"></span>
                {{message.sender}}
              </a>
              <a href="javascript:void(0)" class="message-subject flex-shrink-1 d-block text-body" :class="{'font-weight-bold': message.unread}">
                {{message.subject}}
                <i class="ion ion-md-attach" v-if="message.attachments"></i>
              </a>
              <div class="message-date text-muted">{{message.date}}</div>
            </li>

          </ul>
        </perfect-scrollbar><!-- / .messages-content -->
      </div>

    </div>

  </div><!-- / .messages-wrapper -->
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/messages.scss" lang="scss"></style>

<script>
import PerfectScrollbar from '@/vendor/libs/perfect-scrollbar/PerfectScrollbar'

export default {
  name: 'pages-messages-v1-list',
  metaInfo: {
    title: 'Messages list v1 - Pages'
  },
  components: {
    PerfectScrollbar
  },
  data: () => ({
    sideboxOpen: false,
    selected: [],

    // Mail boxes
    currentMailBox: 'inbox',
    mailBoxes: {
      inbox: { title: 'Inbox', icon: 'ion ion-ios-filing', count: 15 },
      sent: { title: 'Sent', icon: 'ion ion ion-ios-mail' },
      drafts: { title: 'Drafts', icon: 'ion ion ion-md-create' },
      spam: { title: 'Spam', icon: 'ion ion ion-md-folder-open' },
      trash: { title: 'Trash', icon: 'ion ion ion-md-trash' }
    },

    // Labels
    labels: {
      clients: { title: 'Clients', color: 'success' },
      important: { title: 'Important', color: 'danger' },
      social: { title: 'Social', color: 'info' },
      other: { title: 'Other', color: 'warning' }
    },

    // Messages
    messagesData: [
      { id: 1, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 2, marked: true, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 3, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 4, marked: true, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 5, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 6, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 7, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 8, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 9, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 10, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 11, marked: true, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 12, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 13, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 14, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 15, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 16, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 17, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 18, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 19, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' },
      { id: 20, marked: false, label: null, unread: false, attachments: false, sender: 'Mae Gibson', subject: 'Street Photography Competition', date: '1d ago' },
      { id: 21, marked: false, label: 'important', unread: false, attachments: false, sender: 'GitHub', subject: '[GitHub] Your password has been changed', date: '1d ago' },
      { id: 22, marked: false, label: 'clients', unread: true, attachments: true, sender: 'Nelle Maxwell', subject: 'New design concepts', date: '1d ago' },
      { id: 23, marked: false, label: null, unread: false, attachments: false, sender: 'Dropbox', subject: 'Complete your Dropbox setup', date: '1d ago' },
      { id: 24, marked: false, label: 'other', unread: false, attachments: false, sender: 'Task manager', subject: 'You have 5 overdue tasks!', date: '1d ago' },
      { id: 25, marked: false, label: 'social', unread: true, attachments: false, sender: 'Facebook', subject: 'Reset your account password', date: '1d ago' }
    ]
  }),
  methods: {
    toggleSelect (checked, message) {
      if (checked) {
        this.selected.push(message)
      } else {
        this.selected.splice(this.selected.indexOf(message), 1)
      }
    }
  },
  mounted () {
    this.layoutHelpers.setCollapsed(true, false)
  }
}
</script>
