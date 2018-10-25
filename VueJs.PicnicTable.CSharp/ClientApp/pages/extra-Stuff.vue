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
      <li>vee-validate</li>
      <ul>
        <li><a href="https://baianat.github.io/vee-validate/">Official Site</a><br>
          <form v-on:submit.prevent="">
            <div class="third">
              <input v-validate="'required'" class="stack" placeholder="Name" />
              <input class="stack" placeholder="Email" />
              <input v-validate="'required|email'" name="email2" type="text">
              <span>{{ errors.first('email2') }}</span>
              <button class="stack icon-paper-plane">
                  Send
              </button>
            </div>
          </form>
        </li>
      </ul>
    </ul>
  </div>
</template>
