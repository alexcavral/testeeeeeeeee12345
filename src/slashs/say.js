  /*module.exports = {
    data: {
      name: "say",
      description: "Faça o bot falar",
         options: [{
          name: "text", 
          description: "texto que vai na mensagem",
          type: 3,
          required: true
        }],
    },
    run: async (client, send, i, message) => {
      
      var args = i.data.options
      
      var texto = args.find(args => args.name.toLowerCase() === "text").value;
      var author = 
        
      await send(i, texto, `Mensagem enviada por: ${message.author}`)
      
    }
  }*/