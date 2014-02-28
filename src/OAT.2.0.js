/*
 * OAT 2.0
 * pseudo-pattern
 *
 * jQuery version
 *
 * Name : Object App Template ( OAT )
 * Classification : Structural
 *
*/





(function(){

    /* Setting the OAT */

    var OAT = function( options ){
    
	options = options || {};
    
	// Add any recurring script settings inside the oat settings or ater them 
	// when initializing the OAT inside the app
	var that = {
	    settings : {
		templateLocationId : null,
		templateTargetId : null,
		// Create an abstraction on top of jQuery's ajax 
		// method to set your projects most recurring options as default.
		// using the helper ajax request to set recurring callback methods
		// for erros, timeouts etc...
		ajaxSettings : {
		    url : '/init_ajax/',
		    type : 'get',
		    data : '',
		    dataType : 'html',
		    cache : false,
		    timeout : '8000',
		    scope : that,
		    success : function(){ return true; }
		}
	    }
	};
    
    
	// Merge the options ( inherited object ) with the settings object
	that.settings = $.extend( true, that.settings, options )
    
	// Add all the shared helper methods 
	that.helper = {
	
	    ajaxRequest : function( newSettings ){ 
		// ...
	    },
	
	    templateRender : function( ajaxReturn ){ 
		// ... 
	    },
	
	
	};// helper 
    
    
	return that; 

    }; // OAT 




    /* Applying the OAT */ 


    
    var myApp = function(){ 
	
	var that = OAT({ 
		templateLocationId : '#headerTemplate',
		templateTargetId : null,
		headerId : 'headerId',
		ajaxSetting : { 
		    newSetting : 'bar'
		}
	    }),
	MA = that,
	s = MA.settings;


	MA.refreshElements = function(){ 
	    // 
	    $doc = $(document),
	    s.$header = $doc.find( '#' s.headerId );
	    //
	};
	
	
	MA.init = function(){ 
	    //
	    MA
	    //
	    .doSomething();
	    //
	    .doSomethingElse();
	    //
	    return MA;
	};
	

	
	MA.doSomething = function(){ 
	    //
	    var $element = s.$element;
	    //
	    $element.hide();
	    //
	    return MA;
	};

	
	MA.doSomethingElse = function(){ 
	    // ...
	}; 
	
       
	return MA;
	
    };//MyApp
    




    MyApp.init();
    


})(); // anon function