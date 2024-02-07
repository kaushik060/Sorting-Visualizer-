function creatbar(){
 var height = document.getElementById("visual").offsetHeight;
 document.getElementById("bar0").style.height=height-20+"px";
 var w = document.getElementById("visual").offsetWidth;
 for(var i=1;i<w/20;i++){
     var bar= document.getElementById("bar0").cloneNode(true);
     bar.id = "bar"+i;
     bar.style.height = String(Math.floor(Math.random()*(height-20)))+"px";
     document.getElementById("visual").appendChild(bar)
 }     
}

creatbar()
function sleep(delay){
    return new Promise(resolve=>setTimeout(resolve,delay));
}
async function recolour(n){
    for(var i=0;i<n;i++){
        document.getElementById("bar"+i).style.backgroundColor="rgb(3, 144, 130)";
        await sleep(50);
    }
}
function deactivate(n){
    if(n==1){
    document.getElementById("controles").style.opacity= "1";
    document.getElementById("controles").style.visibility= "visible";
}
 else{
     document.getElementById("controles").style.visibility= "visible";
     document.getElementById("controles").style.opacity= "1";
}
}
//function deactivate(n) {
//  var controlesElement = document.getElementById("controles");
//  if (n === 1) {
//    controlesElement.style.opacity = "1";
//    controlesElement.style.visibility = "visible";
//  } else {
//    controlesElement.style.opacity = "0.5"; // Set opacity to a different value
//    controlesElement.style.visibility = "hidden"; // Set visibility to "hidden"
//  }
//}



// async function Bubblesort(){
//     deactivate(1);
//     var array = document.getElementById("visual")
//     var n= array.childElementCount
//     for(var i=0;i<n;i++){
//         var h1=document.getElementById("bar"+i).offsetHeight;
//         for(var j=0;j<n;j++){
//             var h2 =document.getElementById("bar"+j).offsetHeight;
//             if (h1<h2){
//                 var temp = h1;
//                 h1=h2;
//                 h2=temp;
//                 document.getElementById("bar"+i).style.backgroundColor="red";
//                 document.getElementById("bar"+j).style.backgroundColor="green";
//                 await sleep(3000);
//                 document.getElementById("bar"+i).style.height=h1+"px";
//                 document.getElementById("bar"+j).style.height=h2+"px";
//                 document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
//                 document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
//             }

//         }
//     }
//     recolour(n);
//     deactivate(0);
// }
 async function Bubblesort(){
      deactivate(1);
      var array = document.getElementById("visual")
      var n= array.childElementCount
      for(var i=0;i<n-1;i++){
          // var h1=document.getElementById("bar"+i).offsetHeight;
          for(var j=0;j<n-i-1;j++){
            var h1 =document.getElementById("bar"+j).offsetHeight;
              var h2 =document.getElementById("bar"+String(j+1)).offsetHeight;
              if (h2<h1){
                  var temp = h1;
                  h1=h2;
                  h2=temp;
                  document.getElementById("bar"+j).style.backgroundColor="red";
                  document.getElementById("bar"+String(j+1)).style.backgroundColor="green";
                  await sleep(700);
                  document.getElementById("bar"+j).style.height=h1+"px";
                  document.getElementById("bar"+String(j+1)).style.height=h2+"px";
                  document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
                  document.getElementById("bar"+String(j+1)).style.backgroundColor="rebeccapurple";
              }
  
          }
      }
      recolour(n);
      deactivate(0);
  }

//async function selectionSort()  
//{ deactivate(1);
//    var array = document.getElementById("visual")
//    var n= array.childElementCount  
//    // One by one move boundary of unsorted subarray  
//    for (var i = 0; i<n-1; i++)  
//    {  
//        // Find the minimum element in unsorted array  
//       var  min_idx = i;  
//       var h1=document.getElementById("bar"+min_idx).offsetHeight;
//       var min_h=h1;
//        for (var j=i+1;j<n;j++) { 
//            document.getElementById("bar"+i).style.backgroundColor="red";
//            document.getElementById("bar"+j).style.backgroundColor="green";
//            var h2=document.getElementById("bar"+j).offsetHeight;
//            await sleep(300);
//            if (h2 < min_h ) { 
//                min_idx = j;
//                // min_h=h2; 
//            } 
//            document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
//            document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
//        }
//        document.getElementById("bar"+min_idx).style.height=h1+"px";
//        document.getElementById("bar"+i).style.height=min_h+"px";
//
//
//        // Swap the found minimum element with the first element  
//         
//    } 
//    
//    recolour(n);
//    deactivate(0);
//}
async function selectionSort() {
    deactivate(1);
    var array = document.getElementById("visual");
    var n = array.childElementCount;

    // One by one move boundary of unsorted subarray
    for (var i = 0; i < n - 1; i++) {
        // Find the minimum element in the unsorted array
        var min_idx = i;
        var min_h = document.getElementById("bar" + min_idx).offsetHeight;
        document.getElementById("bar" + min_idx).style.backgroundColor = "red";

        for (var j = i + 1; j < n; j++) {
            document.getElementById("bar" + j).style.backgroundColor = "green";
            await sleep(300);
            document.getElementById("bar" + j).style.backgroundColor = "rebeccapurple";

            var h2 = document.getElementById("bar" + j).offsetHeight;
            if (h2 < min_h) {
                document.getElementById("bar" + min_idx).style.backgroundColor = "rebeccapurple";
                min_idx = j;
                min_h = h2;
                document.getElementById("bar" + min_idx).style.backgroundColor = "red";
            }
        }

        // Swap the found minimum element with the first element
        var temp = document.getElementById("bar" + i).style.height;
        document.getElementById("bar" + i).style.height = min_h + "px";
        document.getElementById("bar" + min_idx).style.height = temp;

        document.getElementById("bar" + min_idx).style.backgroundColor = "rebeccapurple";
    }

    recolour(n);
    deactivate(0);
}


async function insertion_Sort(){
    deactivate(1);
    //getting numver of bars
    var array = document.getElementById("visual")
    var n= array.childElementCount

    //sorting logic
    for (let i = 1; i < n; i++) {
        let j = i - 1
        let temp = document.getElementById("bar"+i).offsetHeight;
        document.getElementById("bar"+i).style.backgroundColor="red";
        while (j >= 0 && document.getElementById("bar"+j).offsetHeight > temp) {
            document.getElementById("bar"+j).style.backgroundColor="green";
            await sleep(600);
            document.getElementById("bar"+String(j+1)).style.height = document.getElementById("bar"+j).offsetHeight+"px";
            document.getElementById("bar"+j).style.backgroundColor="rebeccapurple";
          j--
        }
        document.getElementById("bar"+String(j+1)).style.height = temp+"px"

        document.getElementById("bar"+i).style.backgroundColor="rebeccapurple";
        document.getElementById("bar"+String(j+1)).style.backgroundColor="rebeccapurple";
      }

      recolour(n);
    deactivate(0);
}
async function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = await partition(arr, low, high);
        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
    }
}

async function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        // Highlight the pivot element and the current element being compared
        document.getElementById("bar" + high).style.backgroundColor = "red";
        document.getElementById("bar" + j).style.backgroundColor = "green";

        await sleep(300); // Delay for visualization

        // Reset the background color
        document.getElementById("bar" + high).style.backgroundColor = "rebeccapurple";
        document.getElementById("bar" + j).style.backgroundColor = "rebeccapurple";

        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // Swap the pivot element with the element at (i+1) to place it in the correct position
    swap(arr, i + 1, high);

    return i + 1; // Return the index of the pivot element
}

function swap(arr, i, j) {
    // Swap the heights of the bars for visualization
    let temp = document.getElementById("bar" + i).style.height;
    document.getElementById("bar" + i).style.height = document.getElementById("bar" + j).style.height;
    document.getElementById("bar" + j).style.height = temp;

    // Swap the actual elements in the array
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

async function visualizeQuickSort() {
    deactivate(1);
    let array = document.getElementById("visual");
    let n = array.childElementCount;
    let arr = [];

    // Extract heights of bars into an array for sorting
    for (let i = 0; i < n; i++) {
        let barHeight = document.getElementById("bar" + i).offsetHeight;
        arr.push(barHeight);
    }

    await quickSort(arr, 0, n - 1);

    // Recolor the bars after sorting
    recolour(n);
    deactivate(0);
}

async function mergeSort(arr, left, right) {
    if (left < right) {
        var mid = Math.floor((left + right) / 2);

        // Recursively sort the left and right halves
        await mergeSort(arr, left, mid);
        await mergeSort(arr, mid + 1, right);

        // Merge the sorted halves
        await merge(arr, left, mid, right);
    }
}

async function merge(arr, left, mid, right) {
    var n1 = mid - left + 1;
    var n2 = right - mid;

    // Create temporary arrays
    var leftArray = new Array(n1);
    var rightArray = new Array(n2);

    // Copy data to temporary arrays leftArray[] and rightArray[]
    for (var i = 0; i < n1; i++) {
        leftArray[i] = arr[left + i].offsetHeight;
        arr[left + i].style.backgroundColor = "green";
    }

    for (var i = 0; i < n2; i++) {
        rightArray[i] = arr[mid + 1 + i].offsetHeight;
        arr[mid + 1 + i].style.backgroundColor = "green";
    }

    var i = 0;
    var j = 0;
    var k = left;

    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k].style.height = leftArray[i] + "px";
            i++;
        } else {
            arr[k].style.height = rightArray[j] + "px";
            j++;
        }
        k++;

        // Delay to visualize the sorting process
        await sleep(300);

        // Reset background colors
        for (var x = left; x <= right; x++) {
            arr[x].style.backgroundColor = "rebeccapurple";
        }
    }

    // Copy remaining elements of leftArray[], if any
    while (i < n1) {
        arr[k].style.height = leftArray[i] + "px";
        i++;
        k++;

        // Delay to visualize the sorting process
        await sleep(300);
    }

    // Copy remaining elements of rightArray[], if any
    while (j < n2) {
        arr[k].style.height = rightArray[j] + "px";
        j++;
        k++;

        // Delay to visualize the sorting process
        await sleep(300);
    }
}

async function visualizeMergeSort() {
    var array = document.getElementById("visual").children;
    var n = array.length;

    // Call the mergeSort function to begin the sorting process
    await mergeSort(array, 0, n - 1);

    // Recolor and deactivate as needed
    recolour(n);
    deactivate(0);
}

