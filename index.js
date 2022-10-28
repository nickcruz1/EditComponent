function edit() {
  let editInput = document.querySelector(".editInput");
  let editInput2 = document.querySelector(".editInput2");
  let output = document.getElementById("output");
  
  if(editInput.value == "" || editInput2.value == "")  {
   return false;
  } else {
     output.innerHTML = `<div class="d-flex justify-content-center flex-column border border-info w-50 m-auto">
     <div class="mb-2">
  <h2 class="text-center text-primary fs-3 mt-2">New Entry</h2>
  </div>
  
  <div class="row d-flex justify-content-center flex-row">
  
  <div class="col-4 d-flex justify-content-center flex-column">
  <label class="col-5 mb-1" for="editInput1">Description 1:</label>
  <p class="col-5">${editInput.value}</p>
  </div>
  
  <div class="col-4 d-flex justify-content-center flex-column">
  <label class="col-5 mb-1" for="Description 2">Description 2:</label>
  <p class="col-5">${editInput2.value}</p>
  </div>
  
  
  <button onclick="deleteEntry()" class="col-2 btn btn-danger p-2 mb-2 border border-dark">Delete -</button>
  </div>
  </div>
  `;
  }
 
  editInput.value = "";
  editInput2.value = "";
}

function deleteEntry() {
  let output = document.getElementById("output"); 
  
  output.innerHTML = "";
}
