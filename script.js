function mult(){
    let inputNum = document.getElementById('txtn')
    let mult = document.getElementById('selmult')

    if(inputNum.value.length == 0) {
        window.alert('[ERRO] no number entered!')
    }else {
        let num = Number(inputNum.value)
        let count = 1
        mult.innerHTML = ''
        while(count <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${count} = ${num*count}`
            item.value = `tab${count}`
            mult.appendChild(item)
            count++
        }
    }
}