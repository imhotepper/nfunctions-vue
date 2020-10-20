<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <div>
      <button v-on:click="fetchData"> <h4> Fetch Random </h4></button>
      <div>
        <h3 v-text="data"></h3>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    data: String
  },
  methods:{
    fetchData(){
      this.data = "....";
      fetch('/.netlify/functions/hello')
      .then(data => data.json())
      .then(json => this.data =  json.message );
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
