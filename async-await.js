async function f3() {
    try {
        var z = await Promise.reject(30);
    }
    catch(e) {
        console.log(e); //30
    }
}

f3();