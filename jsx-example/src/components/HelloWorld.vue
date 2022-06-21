<script>
export default {
  name: 'HelloWorld',
  render(createElement, context) {
    return (
      <div>
        <div class="text-center" onClick="{this.pressed}"
             domPropsInnerHTML="{this.msg}"></div>
      </div>
    )
  },
  data () {
    return {
      msg : `<h${this.header}>안녕하세요 ${this.name}</h${this.header}>`,
    }
  },
  methods : {
    pressed(){
      alert("clicked");
    }
  },
  props: ['header','name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
