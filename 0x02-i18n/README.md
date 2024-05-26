<h1 align="center"><b>0X02. I18N</b></h1>
<div align="center"><code>Back-end</code></div>

<br>
<div align="center">
<img width="40%" src="https://github.com/codenvibes/alx-backend/blob/master/0x02-i18n/images/91e1c50322b2428428f9.jpeg">
</div>

<!-- <br>
<hr>
<h3><a href=>Notes</a></h3>
<hr> -->


<!--==================================================-->
<br>

## Resources
<details>
<summary><b><a href="https://web.archive.org/web/20201111174034/https://flask-babel.tkte.ch/">Flask-Babel</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/RtGz7pI7TKnYqrMMG9rWMg">Flask i18n tutorial</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href="https://intranet.alxswe.com/rltoken/tw8sQWhB3HJvk3jmR2GBwg">pytz</a></b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<!--==================================================-->
<br>

## Learning Objectives
<details>
<summary><b><a href=" "> </a>Learn how to parametrize Flask templates to display different languages</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Learn how to infer the correct locale based on URL parameters, user settings or request headers</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>


<details>
<summary><b><a href=" "> </a>Learn how to localize timestamps</b></summary><br>


<br><p align="center">※※※※※※※※※※※※</p><br>
</details>



<br>

<!--==================================================-->
<br>

## Requirements
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7)
- All your files should end with a new line
- A <code>README.md</code> file, at the root of the folder of the project, is mandatory
- Your code should use the pycodestyle style (version 2.5)
- The first line of all your files should be exactly <code>#!/usr/bin/env python3</code>
- All your <code>*.py</code> files should be executable
- All your modules should have a documentation (<code>python3 -c 'print(__import__("my_module").__doc__)'</code>)
- All your classes should have a documentation (<code>python3 -c 'print(__import__("my_module").MyClass.__doc__)'</code>)
- All your functions and methods should have a documentation (<code>python3 -c 'print(__import__("my_module").my_function.__doc__)'</code> and <code>python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'</code>)
- A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
- All your functions and coroutines must be type-annotated.

<!--==================================================-->
<br>

## Tasks
<details>
<summary>

### 0. Basic Flask app
`mandatory`

File: [0-app.py](), [templates/0-index.html]()
</summary>

<p>First you will setup a basic Flask app in <code>0-app.py</code>. Create a single <code>/</code> route and an <code>index.html</code> template that simply outputs “Welcome to Holberton” as page title (<code>&lt;title&gt;</code>) and “Hello world” as header (<code>&lt;h1&gt;</code>).</p>


</details>

<details>
<summary>

### 1. Basic Babel setup
`mandatory`

File: [1-app.py](), [templates/1-index.html]()
</summary>

<p>Install the Babel Flask extension:</p>

<pre><code>$ pip3 install flask_babel==2.0.0
</code></pre>

<p>Then instantiate the <code>Babel</code> object in your app. Store it in a module-level variable named <code>babel</code>.</p>

<p>In order to configure available languages in our app, you will create a <code>Config</code> class that has a <code>LANGUAGES</code> class attribute equal to <code>["en", "fr"]</code>.</p>

<p>Use <code>Config</code> to set Babel’s default locale (<code>"en"</code>) and timezone (<code>"UTC"</code>).</p>

<p>Use that class as config for your Flask app.</p>


</details>

<details>
<summary>

### 2. Get locale from request
`mandatory`

File: [2-app.py](), [templates/2-index.html]()
</summary>

<p>Create a <code>get_locale</code> function with the <code>babel.localeselector</code> decorator. Use <code>request.accept_languages</code> to determine the best match with our supported languages.</p>


</details>

<details>
<summary>

### 3. Parametrize templates
`mandatory`

File: [3-app.py](), [babel.cfg](), [templates/3-index.html](), [translations/en/LC_MESSAGES/messages.po](), [translations/fr/LC_MESSAGES/messages.po](), [translations/en/LC_MESSAGES/messages.mo](), [translations/fr/LC_MESSAGES/messages.mo]()
</summary>

<p>Use the <code>_</code> or <code>gettext</code> function to parametrize your templates. Use the message IDs <code>home_title</code> and <code>home_header</code>.</p>

<p>Create a <code>babel.cfg</code> file containing</p>

<pre><code>[python: **.py]
[jinja2: **/templates/**.html]
extensions=jinja2.ext.autoescape,jinja2.ext.with_
</code></pre>

<p>Then initialize your translations with</p>

<pre><code>$ pybabel extract -F babel.cfg -o messages.pot .
</code></pre>

<p>and your two dictionaries with </p>

<pre><code>$ pybabel init -i messages.pot -d translations -l en
$ pybabel init -i messages.pot -d translations -l fr
</code></pre>

<p>Then edit files <code>translations/[en|fr]/LC_MESSAGES/messages.po</code> to provide the correct value for each message ID for each language. Use the following translations:</p>

<p>Then compile your dictionaries with</p>

<pre><code>$ pybabel compile -d translations
</code></pre>

<p>Reload the home page of your app and make sure that the correct messages show up.</p>


</details>

<details>
<summary>

### 4. Force locale with URL parameter
`mandatory`

File: [4-app.py](), [templates/4-index.html]()
</summary>

<p>In this task, you will implement a way to force a particular locale by passing the <code>locale=fr</code> parameter to your app’s URLs.</p>

<p>In your <code>get_locale</code> function, detect if the incoming request contains <code>locale</code> argument and ifs value is a supported locale, return it. If not or if the parameter is not present, resort to the previous default behavior.</p>

<p>Now you should be able to test different translations by visiting <code>http://127.0.0.1:5000?locale=[fr|en]</code>.</p>

<p><strong>Visiting <code>http://127.0.0.1:5000/?locale=fr</code> should display this level 1 heading:</strong>
<img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/f958f4a1529b535027ce.png" style=""/></p>


</details>

<details>
<summary>

### 5. Mock logging in
`mandatory`

File: [5-app.py](), [templates/5-index.html]()
</summary>

<p>Creating a user login system is outside the scope of this project. To emulate a similar behavior, copy the following user table in <code>5-app.py</code>.</p>

<pre><code>users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}
</code></pre>

<p>This will mock a database user table. Logging in will be mocked by passing <code>login_as</code> URL parameter containing the user ID to log in as.</p>

<p>Define a <code>get_user</code>  function that returns a user dictionary or <code>None</code> if the ID cannot be found or if <code>login_as</code> was not passed.</p>

<p>Define a <code>before_request</code> function and use the <code>app.before_request</code> decorator to make it be executed before all other functions. <code>before_request</code> should use <code>get_user</code> to find a user if any, and set it as a global on <code>flask.g.user</code>.</p>

<p>In your HTML template, if a user is logged in, in a paragraph tag, display a welcome message otherwise display a default message as shown in the table below.</p>

<p><strong>Visiting <code>http://127.0.0.1:5000/</code> in your browser should display this:</strong></p>

<p><img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/2c5b2c8190f88c6b4668.png" style=""/></p>

<p><strong>Visiting <code>http://127.0.0.1:5000/?login_as=2</code> in your browser should display this:</strong>
<img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/277f24308c856a09908c.png" style=""/></p>


</details>

<details>
<summary>

### 6. Use user locale
`mandatory`

File: [6-app.py](), [templates/6-index.html]()
</summary>

<p>Change your <code>get_locale</code> function to use a user’s preferred local if it is supported.</p>

<p>The order of priority should be</p>

<p>Test by logging in as different users</p>

<p><img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/9941b480b0b9d87dc5de.png" style=""/></p>


</details>

<details>
<summary>

### 7. Infer appropriate time zone
`mandatory`

File: [7-app.py](), [templates/7-index.html]()
</summary>

<p>Define a <code>get_timezone</code> function and use the <code>babel.timezoneselector</code> decorator.</p>

<p>The logic should be the same as <code>get_locale</code>:</p>

<p>Before returning a URL-provided or user time zone, you must validate that it is a valid time zone. To that, use <code>pytz.timezone</code> and catch the <code>pytz.exceptions.UnknownTimeZoneError</code> exception.</p>


</details>

<details>
<summary>

### 8. Display the current time
`#advanced`

File: [app.py](), [templates/index.html](), [translations/en/LC_MESSAGES/messages.po](), [translations/fr/LC_MESSAGES/messages.po]()
</summary>

<p>Based on the inferred time zone, display the current time on the home page in the default format. For example:</p>

<p><code>Jan 21, 2020, 5:55:39 AM</code> or <code>21 janv. 2020 à 05:56:28</code></p>

<p>Use the following translations</p>

<p><strong>Displaying the time in French looks like this:</strong></p>

<p><img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/bba4805d6dca0a46a0f6.png" style=""/></p>

<p><strong>Displaying the time in English looks like this:</strong></p>

<p><img alt="" loading="lazy" src="./Project_ 0x02. i18n _ Nairobi Intranet_files/54f3be802024dbcf06f4.png" style=""/></p>


</details>

