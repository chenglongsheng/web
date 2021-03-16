var arr41 = ["pitaya","apple","orange","peach"]
for (const iterator of arr41) {
    console.log(iterator)
}
for (const key in arr41) {
    if (Object.hasOwnProperty.call(arr41, key)) {
        const element = arr41[key];
        console.log(key)
    }
}