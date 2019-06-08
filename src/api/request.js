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

export const getMovieComingData = (id) => {
	return requset.get('/api/movieComingList', {
		params: {
			cityId: id
		}
	})
}

export const getSearchData = (id, kw) => {
	return requset.get('/api/searchList', {
		params: {
			cityId: id,
			kw: kw
		}
	})
}

export const getCinemaData = (id) => {
	return requset.get('/api/cinemaList', {
		params: {
			cityId: id,
		}
	})
}

export const getLocation = () => {
	return requset.get('/api/getLocation')
}

export const getDetailData = (id) => {
	return requset.get('/api/detailmovie', {
		params: {
			movieId: id
		}
	})
}

//movieComingList?cityId
//searchList?cityId&kw=a
//cityList
//detailmovie?movieId=345808
//cinemaList?cityId=10
//getLocation