module.exports = {
    fetchMusic(){
        fetch('/api/musics')
            .then(res => res.json())
            .then(data => console.log(data));
    }
}