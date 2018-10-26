<template>
  <div>
    <page-title title="Extra stuff"/>
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
                  <input v-validate="'required'" name="name" placeholder="Name" />
                  <input v-validate="'required|email'" name="email" type="text" placeholder="E-Mail">
                  <span class="font-red">{{ errors.first('email') }}</span>
                </fieldset>
              <div class="bt px-1">
              <button type="submit">Send</button>
              </div>
            </form>
          </article>
        </li>
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
          alert("Failed to validate :(");
          return false;
        }
        return alert("Validation passed!");
      });
    }
  }
}
</script>

