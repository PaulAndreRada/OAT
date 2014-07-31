/*
 * OAT 2.0
 * pseudo-pattern
 *
 * jQuery version
 *
 * Name : Object App Template ( OAT )
 * Classification : Structural
 *
 * Description :
 * 
 *  A design pattern intended to streamline the writing process of javascript modules [ for front end apps ],
 *  reducing redundancy by abstracting the most used settings and helper functions. 
 *  The pattern is designed to be implemented in a readable stream of functions, organized in object literal notation.
 *  It is currently illustrated using several jQuery Methods but the pattern could easily be made into a stand alone 
 *  app by replacing the $.extend method with custom functions
 *
 *    - Provides a simplified and easy to read template for large bodies of code, contained by a specific context.
 *    - Creates pseudo-private variables accessible to all methods inside the specific context.
 *    - Sets a common language template for variables inside each object.
 *    - Stores the common denominator functions for all the apps in one script file, page or module. ( helpers )
 * 
 *  inspired by Douglas Crockford’s functional Object pattern
 *
*/





(function(){

    /* Setting the OAT */

    var OAT = function( options ){
    
	options = options || {};
    
	// Add any recurring script variables inside the oat settings
	// to use them globally while app specific variables can be added 
	// to each scope separetly while maintaining variable privacy
	// by using the options argument
	var that = {
	    settings : {
		templateLocationId : null,
		templateTargetId : null,
		// Optional :
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
	//
    }; // OAT 




    /* Applying the OAT */ 
    var myApp = function(){ 
	//
	// Set the app specific variables and replace global settings only on this scope by
	// adding an object to the OAT argument
	var that = OAT({ 
		templateLocationId : '#headerTemplate',
		templateTargetId : null,
		headerId : 'headerId',
		ajaxSetting : { 
		    newSetting : 'bar'
		}
	    }),
	// 
	// Maintain a dynamic object by using a simple closure
	MA = ( function(){ return that; }() ),
	//
	// save the now dynamic settings into a simple name
	s = MA.settings;
	
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
	//
    };//MyApp
    //
    // Initialise all the apps at the end after all the script dependencies have loaded
    MyApp.init();
    


})(); // anon function
