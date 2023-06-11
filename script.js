var students = [
    {
        name: 'Abdul Qadir',
        rollNumber: 1,
        math: 100,
        eng: 100,
        urd: 100,
        sci: 100,
        sst: 100,
        sindhi: 100,
    },
    {
        name: 'Habib',
        rollNumber: 298,
        math: 80,
        eng: 57,
        urd: 74,
        sci: 64,
        sst: 95,
        sindhi: 45,
    },
    {
        name: 'Imran Ahmed',
        rollNumber: 334,
        math: 60,
        eng: 86,
        urd: 67,
        sci: 57,
        sst: 32,
        sindhi: 80,
    },
    {
        name: 'M.Saleem',
        rollNumber: 504,
        math: 76,
        eng: 44,
        urd: 55,
        sci: 54,
        sst: 98,
        sindhi: 96,
    },
    {
        name: 'M.Meraj',
        rollNumber: 125,
        math: 23,
        eng: 64,
        urd: 57,
        sci: 97,
        sst: 98,
        sindhi: 34,
    },
    {
        name: 'M.Yousuf',
        rollNumber: 633,
        math: 87,
        eng: 67,
        urd: 78,
        sci: 67,
        sst: 68,
        sindhi: 67,
    },
    {
        name: 'Faraz Khan',
        rollNumber: 754,
        math: 56,
        eng: 87,
        urd: 56,
        sci: 89,
        sst: 64,
        sindhi: 54,
    },
    {
        name: 'Zeeshan',
        rollNumber: 800,
        math: 23,
        eng: 54,
        urd: 76,
        sci: 98,
        sst: 78,
        sindhi: 67,
    },
    {
        name: 'Sohail',
        rollNumber: 99,
        math: 34,
        eng: 65,
        urd: 98,
        sci: 85,
        sst: 64,
        sindhi: 72,
    },
    {
        name: 'Haider',
        rollNumber: 101,
        math: 57,
        eng: 77,
        urd: 89,
        sci: 65,
        sst: 55,
        sindhi: 90,
    },
]
var main = document.getElementById('main')
var searched = document.getElementById("search")
function add() {
    for (var i = 0; i < students.length; i++) {
        main.innerHTML += `
<tr>
<td>${[i + 1]}</td>
<td>${students[i].name}</td>
<td>${students[i].rollNumber}</td>
<td>${students[i].math}</td>
<td>${students[i].eng}</td>
<td>${students[i].urd}</td>
<td>${students[i].sci}</td>
<td>${students[i].sst}</td>
<td>${students[i].sindhi}</td>
<td>${students[i].math + students[i].eng + students[i].urd + students[i].sci + students[i].sst + students[i].sindhi}</td>
<td>${((students[i].math + students[i].eng + students[i].urd + students[i].sci + students[i].sst + students[i].sindhi) * 100 / 600).toFixed(2)}%</td>
<tr>
`};
}
add();
function search() {
    var found = false;
    for (i = 0; i < students.length; i++) {
        if (searched.value == students[i].name) {
            found = true;
            Swal.fire({
                title: `Student Found!`,
                text: `Name: ${students[i].name} | Maths: ${students[i].math} | English: ${students[i].eng} | Urdu: ${students[i].urd} | Science ${students[i].sci} | Sst: ${students[i].sst} | Sindhi: ${students[i].sindhi} | Total: ${students[i].math + students[i].eng + students[i].urd + students[i].sci + students[i].sst + students[i].sindhi} | Percentage: ${((students[i].math + students[i].eng + students[i].urd + students[i].sci + students[i].sst + students[i].sindhi) * 100 / 600).toFixed(2)}%`,
                icon: 'success',
                confirmButtonText: 'Done'
            });
            searched.value = ""
        }
    }
    if (found === false) {
        Swal.fire({
            icon: 'error',
            title: 'Error Finding Student',
            text: searched.value + ' Is Not In This List',
        })
        searched.value = ""
    }
}
function perc() {
    Swal.fire({
      title: 'Enter Student Details',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Name">' +
        '<input id="swal-input2" class="swal2-input" placeholder="Roll Number">' +
        '<input id="swal-input3" class="swal2-input" placeholder="Math">' +
        '<input id="swal-input4" class="swal2-input" placeholder="English">' +
        '<input id="swal-input5" class="swal2-input" placeholder="Urdu">' +
        '<input id="swal-input6" class="swal2-input" placeholder="Science">' +
        '<input id="swal-input7" class="swal2-input" placeholder="SST">' +
        '<input id="swal-input8" class="swal2-input" placeholder="Sindhi">',
      focusConfirm: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input1').value;
        const rollNumber = document.getElementById('swal-input2').value;
        const math = parseInt(document.getElementById('swal-input3').value);
        const eng = parseInt(document.getElementById('swal-input4').value);
        const urd = parseInt(document.getElementById('swal-input5').value);
        const sci = parseInt(document.getElementById('swal-input6').value);
        const sst = parseInt(document.getElementById('swal-input7').value);
        const sindhi = parseInt(document.getElementById('swal-input8').value);
  
        if (isNaN(math) || isNaN(eng) || isNaN(urd) || isNaN(sci) || isNaN(sst) || isNaN(sindhi)) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid Input',
            text: 'Please enter numeric values for Math, English, Urdu, Science, SST, and Sindhi.',
          });
          return false; // Prevent closing the alert
        }
  
        return [name, rollNumber, math, eng, urd, sci, sst, sindhi];
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const formValues = result.value;
  
        const student = {
          name: formValues[0],
          rollNumber: parseInt(formValues[1]),
          math: parseInt(formValues[2]),
          eng: parseInt(formValues[3]),
          urd: parseInt(formValues[4]),
          sci: parseInt(formValues[5]),
          sst: parseInt(formValues[6]),
          sindhi: parseInt(formValues[7])
        };
  
        students.push(student);
        const index = students.length - 1;
        main.innerHTML += `
          <tr>
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.math}</td>
            <td>${student.eng}</td>
            <td>${student.urd}</td>
            <td>${student.sci}</td>
            <td>${student.sst}</td>
            <td>${student.sindhi}</td>
            <td>${student.math + student.eng + student.urd + student.sci + student.sst + student.sindhi}</td>
            <td>${((student.math + student.eng + student.urd + student.sci + student.sst + student.sindhi) * 100 / 600).toFixed(2)}%</td>
          </tr>
        `;
      }
    });
  }