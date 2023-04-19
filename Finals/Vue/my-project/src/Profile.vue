<template>
    <div id="profile">
      <div id="todo-card">
        <div class="container">
          <div class="alert alert-primar" role="alert">
            <h2>{{ msg6 }}</h2>
            
              <body>
                <p>
                  <p>Name:</p>
                  <p>Chantengco Lowell Jireh P.</p>
                </p>
                <p>
                  <p>Age:</p>
                  <p>19</p>
                </P>
                <p>
                  <p>Address:</p>
                  <p>517 purok 3 Pulong Santol Porac Pampanga</p>
                  </p>
              </body>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  <style>
  #profile {
    background-color: black;
  }
  </style>
  <script>
  export default {
    name: 'profile',
    data() {
      return {
        msg6: 'My profile:',
      };
    },
  };
  </script>
  