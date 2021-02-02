function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchAPI() {
    const urlAPI = 'http://localhost:25565/proxy/' + getRandom(1, 4000)
    try {
        const response = await fetch(urlAPI)
        const json = await response.json();
        var obj = json.image_files
        let test = obj.reduce((max, game) => max.height > game.height ? max : game);
        var test1 = 'http:' + test.file_url
        console.log(test1)
        if (test1.charAt(test1.length-1) === 'f') {
            return await fetchAPI()
        } else {return test1}
    } catch(err) {
        console.error(err);
    }
    
}

async function changeIMG(id) {
    document.getElementById(id).src = await fetchAPI()
}