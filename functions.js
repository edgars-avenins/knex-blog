module.exports = {
    isUser,
    addId,
    removeFav,
    addFav
}

function isUser(credentials, isMyPage){
    if(!credentials) return false
    return credentials.id === isMyPage.user_id
}

function addId(newId, data){
    return data.map(item => item.user_id = newId)
}

function removeFav(id, data, callback){
    let newData = data.fav_id.split(',')
    callback(null, newData.filter(item => item !== id ).join(','))
}

function addFav(id, data, callback){
    let newData = data.fav_id.split(',')
    newData.push(id)

    callback(null, newData.join(','))
}