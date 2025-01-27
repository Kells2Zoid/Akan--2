document.getElementById('birthdayNamerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const gender = document.getElementById('gender').value;

    
    const date = new Date(`${year}-${month}-${day}`);
    const dayOfWeek = date.getDay(); 

    // naming according to the input date,month an year
    let name ="";
    

if (gender === "male") {
    if (dayOfWeek === 1) {
      name = "Kwadwo";
    } else if (dayOfWeek === 2) {
      name = "Kwabena";
    } else if (dayOfWeek === 3) {
        name = "Kwaku";
    } else if (dayOfWeek === 4) {
            name = "Yaw";
     } else if (dayOfWeek === 5) {
            name = "Kofi";
        } else if (dayOfWeek === 6) {
            name = "Kwame";
        } else if (dayOfWeek === 0) {
            name = "Kwasi";
        }
    } else if (gender === "female") {
    if (dayOfWeek === 1) {
      name = "Adowa";
    } else if (dayOfWeek === 2) {
      name = "Abenaa";
    } else if (dayOfWeek === 3) {
        name = "Akua";
      } else if (dayOfWeek === 4) {
        name = "Yaa";
      } else if (dayOfWeek === 5) {
        name = "Afua";
      } else if (dayOfWeek === 6) {
        name = "Ama";
      } else if (dayOfWeek === 0) {
        name = "Akosua";
      }
}
const akaneName = `${name}`;

    // Display 
    const resultDiv = document.getElementById('generatedName');
    resultDiv.innerHTML = `<p>Your Akane birthday name is: <strong>${akaneName}</strong></p>`;
  });