var bucketList = []
let items= prompt("Do you want to see your bucket list or add an item?")
while (items != "done") {
    bucketList.push(items.toLowerCase())
    items= prompt("Do you want to see your bucket list or add an item?")
}

let num=0
while (num>bucketList.length) {
    console.log(`${bucketList[items]}`)
    console.log("<br>")
    num = num+1
}
