<template>
    <div id="skills">
      <div id="todo-card">
        <div class="container">
          <div class="alert alert-primar" role="alert">
            <h2>{{ msg6 }}</h2>
            
              <body>
                <p>
                  <p>Skills:</p>
                  <p>HTML</p>
                </p>
                <p>
                  <p>CSS</p>
                  <p></p>
                </p>
                <p>
                  <p>JS</p>
                  <p></p>
                </p>
              </body>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  <style>
  #skills {
    background-color: pink;
  }
  </style>
  <script>
  export default {
    name: 'skills',
    data() {
      return {
        msg6: 'My Skills:',
      };
    },
  };
  </script>
  