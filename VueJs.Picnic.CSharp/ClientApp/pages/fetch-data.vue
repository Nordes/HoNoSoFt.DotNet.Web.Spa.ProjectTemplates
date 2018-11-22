<template>
  <div>
    <page-title title="Weather Forecast" />
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
          <tr
            v-for="(forecast, index) in forecasts"
            :key="index"
          >
            <td>{{ forecast.dateFormatted }}</td>
            <td>{{ forecast.temperatureC }}</td>
            <td>{{ forecast.temperatureF }}</td>
            <td>{{ forecast.summary }}</td>
          </tr>
        </tbody>
      </table>
      <!-- paging -->
      <div class="flex seven center">
        <div><span
          class="button paging"
          :disabled="previousDisabled"
          @click="loadPage(currentPage - 1)"
        >Previous</span></div>
        <div
          v-for="(n, index) in totalPages"
          :key="index"
        >
          <span
            :class="'button paging' + (n == currentPage ? ' success active' : '')"
            @click="loadPage(n)"
          >{{ n }}</span></div>
        <div><span
          class="button paging"
          :disabled="nextDisabled"
          @click="loadPage(currentPage + 1)"
        >Next</span></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .clear-side {
    padding: 0 0.5em;
  }
  .paging {
    text-align:center;
    display:block;
  }
</style>

<script>
export default {

  data () {
    return {
      forecasts: null,
      total: 1,
      pageSize: 10,
      currentPage: -1
    }
  },
  computed: {
    previousDisabled: function () {
      return this.currentPage === 1
    },
    nextDisabled: function () {
      return !(this.currentPage < this.totalPages)
    },
    totalPages: function () {
      return Math.ceil(this.total / this.pageSize)
    }
  },

  async created () {
    this.loadPage(1)
  },

  methods: {
    async loadPage (page) {
      // ES2017 async/await syntax via babel-plugin-transform-async-to-generator
      // TypeScript can also transpile async/await down to ES5

      if (this.currentPage === page || page < 1 || page > this.totalPages) {
        // Nothing to do... we're at some extremity.
        return
      }

      this.currentPage = page
      try {
        var from = (page - 1) * (this.pageSize)
        var to = from + this.pageSize
        let response = await this.$http.get(`api/weather/forecasts?from=${from}&to=${to}`)
        console.log(response.data.forecasts)
        this.forecasts = response.data.forecasts
        this.total = response.data.total
      } catch (err) {
        window.alert(err)
        console.log(err)
      }
    }
  }
}
</script>
