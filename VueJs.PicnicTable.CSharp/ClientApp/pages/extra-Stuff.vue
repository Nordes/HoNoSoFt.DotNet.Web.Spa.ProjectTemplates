<template>
  <div>
    <page-title title="Extra stuff" />
    <h2>What's on the Picnic Table ;)</h2>
    <ul>
      <li><a href="./swagger/">Swagger</a> (SwashBuckle)</li>
      <ul>
        <li><a href="https://github.com/domaindrivendev/Swashbuckle">Official GitHub Site</a></li>
        <li><a href="https://docs.microsoft.com/en-us/aspnet/core/tutorials/getting-started-with-swashbuckle?view=aspnetcore-2.1&amp;tabs=visual-studio%2Cvisual-studio-xml">MSDN Documentation</a></li>
      </ul>
      <li>vee-validate (Can also work with the i18n module if configured)</li>
      <ul>
        <li><a href="https://baianat.github.io/vee-validate/">Official Site for full documentation</a><br>
          <article class="card">
            <header>
              <h4>Sample form validation (Really simple example)</h4>
            </header>
            <form @submit.prevent="veeValidateSubmit">
              <fieldset class="flex two px-2 py-1">
                <input
                  v-validate="'required'"
                  name="name"
                  placeholder="Name"
                >
                <input
                  v-validate="'required|email'"
                  name="email"
                  type="text"
                  placeholder="E-Mail"
                >
                <span class="color-red">{{ errors.first('email') }}</span>
              </fieldset>
              <div class="bt px-1">
                <button type="submit">Send</button>
              </div>
            </form>
          </article>
        </li>
      </ul>
      <li>I18N (Multilingual) - Lazy way, but can be re-adapted per/component instead. Now if you set your files,
      they will be downloaded dynamically. The language will be basically loaded on demands. The setting is also
      made in order to alter the param within the route, so that all the application is affected at once.</li>
      <ul>
        <li><a href="https://kazupon.github.io/vue-i18n/">Official Documentation</a></li>
        <li>Sample: {{ $t('message.hello') }} (Should be adapted for the entire site, use the dropdown in order to
        change the language</li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    veeValidateSubmit () {
      this.$validator.validate().then(result => {
        if (!result) {
          // do stuff if not valid.
          alert('Failed to validate :(')
          return false
        }
        return alert('Validation passed!')
      })
    }
  }
}
</script>
