<template>
  <div>
    <page-title title="Weather Forecast"/>
    <div class="flex one clear-side">
    <table v-if="forecasts">
      <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(forecast, index) in forecasts" :key="index">
          <td>{{ forecast.dateFormatted }}</td>
          <td>{{ forecast.temperatureC }}</td>
          <td>{{ forecast.temperatureF }}</td>
          <td>{{ forecast.summary }}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<style scoped>
  .clear-side {
    padding: 0 0.5em;
  }
</style>

<script>
export default {
  data() {
    return {
      // forecasts: [{
      //   dateFormatted: "1223/12/12",
      //   temperatureC: 23,
      //   temperatureF: 82,
      //   summary: 'New-York'
      // }]
      forecasts: null,
      total: 0,
      pageSize: 5,
      currentPage: 1
    }
  },

  methods: {
    async loadPage (page) {
      // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
      // TypeScript can also transpile async/await down to ES5
      this.currentPage = page
      try {
        var from = (page - 1) * (this.pageSize)
        var to = from + this.pageSize
        let response = await this.$http.get(`/api/weather/forecasts?from=${from}&to=${to}`)
        console.log(response.data.forecasts)
        this.forecasts = response.data.forecasts
        this.total = response.data.total
      } catch (err) {
        window.alert(err)
        console.log(err)
      }
    }
  },

  async created () {
    this.loadPage(1)
  }
}
</script>
