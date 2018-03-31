export const myMixin = {
  methods: {
    jump () {
      this.$router.push({
        name: 'alarm_index'
      })
    }
  }
}
