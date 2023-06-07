let total = 0;

    function addGrade(grade) {
      total += grade;
      document.getElementById('totalGrade').textContent = total;
    }

    function resetGrades() {
      total = 0;
      document.getElementById('totalGrade').textContent = total;
    }