function newCallback(nama, asal, callback) {
    console.log(nama + ' ' + asal);
    callback()
}   

function pulang() {
    console.log('pulang kampung');
}

newCallback("adi","yusuf", pulang)
