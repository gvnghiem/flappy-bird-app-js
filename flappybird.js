canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (gameState === 'IDLE') {
        resetGame();
        gameState = 'PLAYING';
    } else if (gameState === 'PLAYING') {
        birdVelocity = FLAP_POWER;
        sounds.flap.play().catch(() => console.log('Audio blocked'));
    } else if (gameState === 'GAME_OVER') {
        resetGame();
        gameState = 'IDLE';
    }
});
