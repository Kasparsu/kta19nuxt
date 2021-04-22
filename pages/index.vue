<template>
  <div>
      <ul>
        <li v-for="(message,index) in messages" :key="index"><v-chip>{{message}}</v-chip></li>
      </ul>
    <v-text-field v-model="message"></v-text-field><v-btn @click="send">Send</v-btn>
  </div>
</template>

<script>
export default {
  mounted(){
    this.ws = new WebSocket('ws://localhost:8080');
    this.ws.onopen = (message) => {
      console.log('open:', message);
    };
    this.ws.onmessage = (message) => {
      console.log('message:', message);
      this.messages.push(message.data);
    };
  },
  data(){
    return {
      messages: [],
      message: '',
      ws: null
    }
  },
  methods: {
    send(){
      this.ws.send(this.message);
      this.message = '';
    }
  }
}
</script>
