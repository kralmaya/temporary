function addSpan(val){
    var spn = document.createElement('span')
    spn.style.marginLeft = '10px'
    spn.innerText = val
    document.getElementById('app').appendChild(spn)
}

function main(){
    mywrker = new Worker('worker.js')
    let arr = [1,2,3,4,5,6,7]
    mywrker.postMessage({array:arr, cmd:'setarray'})
    mywrker.onmessage = function(message){
        addSpan(message.data.num)
    }
}


main()
