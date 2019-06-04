import axios from 'axios'
// const BASE_URL = 'http://39.97.33.178/'
const requset = axios.create({
	// baseURL: BASE_URL,
 //  	timeout: 1000
})


export const getPlayingData = (id) => {
	return requset.get('/api/movieOnInfoList', {
		params: {
			cityId: id
		}
	})
}

export const getCityData = () => {
	return requset.get('/api/cityList')
}

//movieComingList
//searchList
//cityList
//detailmovie
//cinemaLists