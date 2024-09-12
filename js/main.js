const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  }
  
  const game = new Phaser.Game(config)
  
  let score = 0
  let scoreText
  
  function preload() {
    this.load.image('button', 'https://examples.phaser.io/assets/sprites/button.png')  // Imagem de um botão simples
  }
  
  function create() {
    let button = this.add.image(400, 300, 'button').setInteractive()
    
    // Quando o botão é clicado
    button.on('pointerdown', () => {
      score += 1
      document.getElementById('score').innerText = `Pontos: ${score}`
    })
  
    // Adiciona texto de instrução
    scoreText = this.add.text(16, 16, 'Clique para ganhar pontos', {
      fontSize: '32px',
      fill: '#fff'
    })
  }
  
  function update() {
    // Podemos adicionar mais lógica de jogo aqui no futuro
  }
  