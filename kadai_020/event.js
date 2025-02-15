const btn = document.getElementById('btn');

const messageDiv = document.getElementById('message');

btn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
  text.textContent = 'ボタンをクリックしました';
});