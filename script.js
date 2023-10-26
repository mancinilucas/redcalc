let total = 0;

function addGrade(grade) {
  total += grade;
  document.getElementById('totalGrade').textContent = total;
}

function resetGrades() {
  total = 0;
  document.getElementById('totalGrade').textContent = total;
  removeAllPressed();
}


function removeAllPressed(){
  const removePressedButton = document.getElementById('remove-pressed')

  removePressedButton.addEventListener('click', function() {
    toggleButtons()
  })
}


function toggleButtons(){
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.classList.remove('button-pressed');
  });
}

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Usa "this" para se referir ao botão atual
    this.classList.toggle('button-pressed');
  })});
