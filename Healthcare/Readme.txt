Hi there! 

Congrats on getting a copy of this stunning sample application. The 
Personal Healthcare app is a Web application that was specifically designed 
and built with PhoneGap in mind. Although it was made for PhoneGap, it should 
work fine as a standalone Web app, too. In fact, that's how this code will 
work if you just run with it as is. But we wanted to give you a few pointers 
on how to get going with PhoneGap using this as an example.

How to get going with PhoneGap (http://PhoneGap.com/):
	1) Log in into your existing PhoneGap account or create a new user account.
	2) Create a new PhoneGap build as explained on the product website. 
	   If you don't know how to do that, see https://build.PhoneGap.com/faq
	3) Go to project containing folder and open /Healthcare folder, 
	   which contains all the files of the project.
	4) Open index.html with your preferred text editor.
	5) Find <script src="PhoneGap.mock.js"></script> and replace it with <script src="PhoneGap.js"></script>. If you are building a package for WindowsPhone,
	   Find <script src="config.js"></script> and replace it with <script src="config.wp8.js"></script>
	7) Save and close index.html.
	8) Zip all the files and folders in /Healthcare folder into a new zip file.
	9) Upload that zip file into the build created in Step 2. 
	   If you don't know how to do that, see https://build.PhoneGap.com/faq
	10) You're done. You have your now working Personal Healthcare app for 
	    Android, iOS* and WindowsPhone**.

*iOS platform require a developer keys that need to be 
provided to PhoneGap in order to create an app.

** You may have difficulties running on Windows Phone. 
In that case, try our Visual Studio project template - http://vsgallery.infragistics.com/Extension?vsixId=VSIXHealthcare..19bd1e03-19d1-4946-ba6c-7731065679b9_CS, 
which should help you get it going on that platform.
