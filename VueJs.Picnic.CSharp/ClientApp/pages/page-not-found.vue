<template>
  <div>
    <page-title
      class="color-red"
      title="Error 404 - Page Not Found"
    />
    <div class="shrug"><p><b>404</b></p><span class="left-arm">¯\_</span>(ツ)<span class="right-arm">_/¯</span><span class="blink" /><p>Not found</p></div>
  </div>
</template>

<style scoped>
/* from codepen: https://codepen.io/akselkreis/pen/doQxZV (Matthew A.K. Smith)*/
body{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
  color: #1F1F1F;
}

h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 60px;
}

.shrug{
  text-align: center;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 50px;
  white-space: nowrap;
  padding: 10px;
}

.left-arm,
.right-arm{
  display: inline-block;
  transform: rotate(0deg);
}

.left-arm{
  animation: 5s infinite left-arm;
}

.right-arm{
  animation: 5s infinite right-arm;
}

.blink{
  display: block;
  position: absolute;
  background: white;
  width: 35px;
  height: 25px;
  top: 16px;
  left: 86px;
  animation: 3s infinite blink;
  opacity: 0;
}

@keyframes blink{
  0%{opacity: 0;}
  50%{opacity: 0;}
  51%{opacity: 1;}
  55%{opacity: 1;}
  56%{opacity: 0;}
}

@keyframes left-arm{
  10%{
    transform: rotate(-20deg);
  }

  30%{
    transform: rotate(-20deg);
  }

  50%{
    transform: rotate(0deg);
  }
}

@keyframes right-arm{
  10%{
    transform: rotate(20deg);
  }

  30%{
    transform: rotate(20deg);
  }

  50%{
    transform: rotate(0deg);
  }
}
</style>
