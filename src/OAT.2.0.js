/*
 * OAT 2.0 template
 *
 * @OAT
 *
 */

/*
 *
 * OAT pseudo-pattern
 * inspired by Douglas Crockford’s  functional Object pattern

 * Name : Object App Template ( OAT )
 * Classification : Structural
 * Description :

 * Provides a simplified and easy to read template for large bodies of code, contained by a specific context.
 * Creates private variables accessible to all methods inside the specific context.
 * Sets a common language template for variables inside each object.
 * Stores the common denominator functions for all the apps in one script file, page or module. ( helpers )

*/

(function(){

    /* Setting the OAT */

    var OAT = function( options ){
    
	// Inherited object
	options = options || {};
    
	// Add any recurring settings inside the oat settings
	var that = {
	    settings : {
		templateLocationId : null,
		templateTargetId : null,
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
    
    
	// Merge the spec ( inherited object ) with the settings object
	that.settings = $.extend( true, that.settings, spec )
    
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