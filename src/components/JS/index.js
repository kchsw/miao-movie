import Vue from 'vue';
import MessageBox from './MessageBox';

export const messageBox = (function(){

	
	return function(opts){

        const defaults = {
            title : '',
            content : '',
            cancel : '',
            sure : '',
            handleCancel : null,
            handleOk : null
        }

        const MyComponent = Vue.extend(MessageBox);

		const options = Object.assign({}, defaults, opts)

		const vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                title : options.title,
                content : options.content,
                cancel : options.cancel,
                sure : options.sure
            },
            methods : {
                handleCancel(){
                    options.handleCancel && options.handleCancel.call(this);
                    document.body.removeChild( vm.$el );
                },
                handleOk(){
                    options.handleOk && options.handleOk.call(this);
                    document.body.removeChild( vm.$el );
                }
            }
        });

        document.body.appendChild( vm.$el );
	}
})()