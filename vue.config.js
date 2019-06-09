module.exports = {
	devServer: {
		host: "0.0.0.0",
	    proxy: {
	    	'/api2': {
	    		target: 'http://localhost:3000/',
	    		changeOrigin: true
	    	},
	    	'/api': {
	    		target: 'http://39.97.33.178/',
	    		changeOrigin: true
	    	}
	    }
	}
}