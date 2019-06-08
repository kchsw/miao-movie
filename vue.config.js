module.exports = {
	devServer: {
		host: "0.0.0.0",
	    proxy: {
	    	'/api': {
	    		target: 'http://39.97.33.178/',
	    		changeOrigin: true
	    	}
	    }
	}
}