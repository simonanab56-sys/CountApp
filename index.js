


    let countEl = document.getElementById("count-el");
    let count = 0;

  function increment() 
{
    console.log("The button was clicked");
     count = count + 1
      countEl.textContent = count
}

  function decrement() 
{
    console.log("The button was clicked");
     count -= 1;
      countEl.textContent = count;
}

    let saveEl = document.getElementById("previous-el");
    let totalEl = document.getElementById("total-el");
    let total = 0;

  function save() 
{
      console.log(count);
        let countStr = count + " - ";
          saveEl.textContent += countStr;
           total += count;
            totalEl.textContent = "Total: " + total;
             countEl.textContent = 0;
              count = 0;
}

 function reset() 
{
      count = 0;
       total = 0;
        countEl.textContent = count;
         saveEl.textContent = "Previous Entries: ";
          totalEl.textContent = "Total: " + total;
}


