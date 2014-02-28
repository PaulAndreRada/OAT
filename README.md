
OAT.js
===
pseudo-pattern
Name : Object App Template [ OAT ]

Classification : Structural

Description :

A design pattern intended to streamline the javascript module writing process [ for front end apps ], reducing redundancy by abstracting the most used settings and helper functions. The pattern is designed to be implemented in a readable stream of functions, organized in object literal notation. It is currently illustrated using several jQuery Methods but the pattern could easily be made into a stand alone app by replacing the $.extend method and using traditional ajax methods.

<ul>
<li>   Provides a simplified and easy to read template for large bodies of code, contained by a specific context. </li>
<li>  Creates private variables accessible to all methods inside the specific context.</li>
<li>  Sets a common language template for variables inside each object. </li>
<li>   Stores the common denominator functions for all the apps in one script file, page or module. ( helpers ) </li>
</ul>	
	
	



inspired by Douglas Crockford’s functional Object pattern
