import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['flashNotif']),
    notAllowed() {
      this.flashNotif({
        message: {
          title: 'Warning',
          text: `Action not allowed. \n Only for authenticated users.`
        },
        type: 'warning',
        pos: 'top',
        duration: 3000,
        vibrate: true
      })
    }
  }
}