const API = 'https://jsonplaceholder.typicode.com/';
const API_COVID = 'https://api.covid19api.com/';
const API_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_BLOCKCHAIN_BTC = 'https://blockchain.info/ticker'
const API_CURRENCIES = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
const API_NEWS = 'http://newsapi.org/v2/top-headlines?country=ua&apiKey=628b0723c3e04260a5977868141a3ab4'
const API_DOGS = 'https://dog.ceo/api/breeds/image/random'
const API_CATS = 'https://api.thecatapi.com/v1/images/search?size=full'

export const getPosts = async () => {
    const response = await fetch(`${API}posts`)
    const posts = await response.json()
    return posts;
}

export const getComments = async (postId) => {
    const response = await fetch(`${API}posts/${postId}/comments`)
    const posts = await response.json()
    return posts;
}

export const createPost = async (sendData) => {
    const response = await fetch(`${API}posts`, {
        method: 'POST',
        body: JSON.stringify(sendData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const post = await response.json()
    return post
}

export const editPost = async (updateData) => {
    const response = await fetch(`${API}posts/${updateData.id}`, {
        method: 'PUT',
        body: JSON.stringify(updateData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const posts = await response.json()
    return posts
}

export const deletePost = async (id) => {
    // console.log('Id===>', id)
    const response = await fetch(`${API}posts/${id}`, {
        method: 'DELETE',
    })
    const posts = await response.json()
    return posts
}

export const getSummaryCovid = async () => {
    const response = await fetch(`${API_COVID}summary`)
    const dataCovid = await response.json()
    return dataCovid;
}

export const getWeather = async (city) => {
    const response = await fetch(`${API_WEATHER}${city}&appid=c93dd3b0d866284eada1abec31cafbe4`)
    const weather = await response.json()
    return weather;
}

export const getCurrencyBTC = async () => {
    const response = await fetch(`${API_BLOCKCHAIN_BTC}`)
    const currencyBTC = await response.json()
    return currencyBTC
}

export const getCurrenciesOfUkraine = async () => {
    const response = await fetch(`${API_CURRENCIES}`)
    const currenciesOfUkraine = await response.json()
    return currenciesOfUkraine
}

export const getNews = async () => {
    const response = await fetch(`${API_NEWS}`)
    const news = await response.json()
    return news
}

export const getDog = async () => {
    const response = await fetch(`${API_DOGS}`)
    const dog = await response.json()
    return dog
}

export const getCat = async () => {
    const response = await fetch(`${API_CATS}`)
    const cat = await response.json()
    return cat
}