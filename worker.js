function pause(ms){
    const start = Date.now()
    while (Date.now() < start + ms);
}
function showArrayWithPause(arr){
    for(let numbr of arr){
        pause(2000)
        self.postMessage({num:numbr})
    }
}
self.addEventListener('message', function(e){
    //checks the type of command being sent from the main thread
    switch(e.data.cmd){

        case 'setarray':{//handles the set:array command from the main thread and begins the AVL tree insertion process
            showArrayWithPause(e.data.array)
            break;
        }
    }
})