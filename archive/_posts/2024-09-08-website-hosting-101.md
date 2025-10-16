---
layout: post
author:
- Ali Khudiyev
title: "Website Hosting \"101\": How I built and deployed my own
  website"
date: 2024-09-08 16:38:00 +0400
categories: archive how-to-do tutorial web
---

**TLDR;** Do you have a dynamic website idea? I did, too. I also wanted
to know what it would take to build and deploy my website using Python.
Here's how I did it:

1.  I came across the [Django](https://www.djangoproject.com) web
    framework and started learning its basics by reading its
    well-written [documentation](https://docs.djangoproject.com/en/5.1/intro/tutorial01/).
    The main reason for learning Django was to be able to write a
    backend for my website.

2.  I used [ChatGPT](https://chatgpt.com) to have a frontend (as well as
    other boring stuff) for my website. I hate centering divs.

3.  I used [NameCheap](https://www.namecheap.com) to buy a custom domain
    name, and I deployed my website (Python app) on it.

# What does \"having a website\" mean?

A website is a site that you can visit on the web. This means that it is
an online document that provides information to people who might need
it. This online document is stored in one or more physical machines. For
simplicity, let us assume that it is stored only on your machine and its
content is about learning a new programming language. If it is stored on
your own laptop, you can easily access the document. Now begins the
monologue: 

<style>
table, tr, td {
    border: none;
}
</style>

<table cellspacing="0" cellpadding="0">
  <tr><td>
      * But what if you also wanted others to be able to access it? 
    </td></tr>
  <tr><td>
      ^ Well, you could just send them the document via email or other messaging services, right? 
    </td></tr>
  <tr><td>
      * Yeah, you're right.
  </td></tr>
  <tr><td>
      * Hm... But what if there are hundreds of people whom the document should be sent to?
  </td></tr>
  <tr><td>
      ^ You could automate the process by writing a computer program to send the documents to every person via email for you.
  </td></tr>
  <tr><td>
      * Nice! Wait... But... How on Earth can other people access the document if I am the one sending it to a bunch of my friends whose email addresses I know?
  </td></tr>
  <tr><td>
      ^ Well, you could just advertise this document by putting a nice title on the street walls and, at the bottom, put your email address to let them message you in case they want the full document.
  </td></tr>
  <tr><td>
      ^ Then you can even modify your computer program to wait to get messages from strangers and send them back your document.
  </td></tr>
  <tr><td>
      * Cool. This was very simple to understand, but we have much more to do than I initially thought.
  </td></tr>
</table>

In the monologue above, the computer and the program that sends your
document to other people is called a web server. It is just a computer
with a program that sends documents. Its purpose is to automate the
\"document sending\" processes that you would have done manually if you
didn't have or use a web server. Using the analogy, advertising your
document on street walls and publicly letting other people know your
(email) address is called a domain name. It is some sort of address that
is accessible publicly. Finally, the process of waiting to get messages
from strangers and then sending them back documents is called web
hosting. It is the process that takes place in a web server. This web
server could be your computer but then if you shut it down or
electricity is cut, your service would cease working too. So, people
usually rent computers that are running 24 hours for 7 days. When it
comes to making your web content accessible to the public, people also
use a domain name server (DNS) instead of putting your email address on
the street walls all over the world. DNS gives you the flexibility to
choose a name for your address so that people could easily remember and
use this name to access your content. It is like an email but instead of
forwarding user requests to your personal email, it forwards them to
your web server so that it can deal with each request and send back
relevant content. This is how it works in a nutshell.

<table>
    <tr><td>
      * I could also do this for other types of documents, right?
    </td></tr>
    <tr><td>
      ^ Right.
    </td></tr>
    <tr><td>
      * For images, videos, songs..?
    </td></tr>
    <tr><td>
      ^ Sure.
    </td></tr>
    <tr><td>
      * I could even send some sort of a form as a document asking for the title of the document you would like to receive, and then people can fill in the form and send it back to me, and then I can again send them a document based on their interests. Right?
    </td></tr>
    <tr><td>
      ^ Yeah, man. It is like a message exchange between you and the people. It is, in fact, a message exchange.
    </td></tr>
</table>

This is what makes websites dynamic as opposed to static, where websites
can only serve static content that is not based on the user input. Since
a web server is nothing more than a computer with a program that sends
documents, you could modify the program to make it do all sorts of
things. The program that processes the requests is called the backend of
the website. It is running on the background without people knowing its
content and how it works, so the name makes sense. In contrast, what
people see on your website (i.e., stylish designs to make your content
look nicer) is called frontend. This name also makes sense if you think
about it. To summarize, there are both frontend and backend components
in a web server, and when the web server starts hosting your content to
the public, it waits to receive requests from users, then sends those
requests to the backend for it to process them and send back relevant
documents and whatnot, then mixes those documents with the frontend to
make them look better visually, and finally sends them nice looking
documents back to the users.

<table>
    <tr><td>
      * So, how could I make this thing just work now?
    </td></tr>
    <tr><td>
      ^ You need to rent (or buy) a computer that runs 24/7 and acts as the web server, then write a program that acts as the backend (and optionally write the frontend), then host it on your web server.
    </td></tr>
    <tr><td>
      ^ Then people can just connect to your web server and play with your website (backend + frontend).
    </td></tr>
    <tr><td>
      ^ You could optionally buy a domain name, too, to make the address of your web server seem a lot more memorizable for the users. It's like an old telephone directory or the \"Contacts\" app in your phone -- it just substitutes computer addresses with words as your \"Contacts\" app would substitute phone numbers with names.
    </td></tr>
    <tr><td>
      * Show me da way.
    </td></tr>
</table>

Now, we know what we are after. It is time to build it.

<figure>
    <img src="/assets/images/archive/website-hosting-pipeline.png" style="width: 50%; margin: auto;"/>
</figure>

# 1. Learning Django Framework

Django is a web framework you can use in Python to build dynamic web
apps. I tend to stick with the basics, so I didn't learn the advanced
stuff to become a Django pro. Only the things that I really needed or
thought that I needed (but I didn't sometimes). But this is the beauty
of trying to do something on your own -- you diverge and converge as a
mathematical function that has never been seen before. To converge and
finally know what you are doing, you must first diverge A LOT, like
REALLY A LOT. In the process, you learn so much, though. Anyway, back to
the Django.

I started with Django's tutorials initially, then jumped on and off this
video on YouTube to shortcut my way to implementing Django Forms and
whatnot. I quickly realized how Django made everything very easy.
Writing the backend was just a matter of sitting down and spelling out
your backend logic. This is also hugely due to Python; you don't need to
think about and type every technical decision that needs to be made.
This is another topic in itself, but now, let's focus on today's topic.

# 2. The Right Job for ChatGPT

I asked ChatGPT to write the frontend for my website. It generated a
bunch of HTML and CSS files, and I copied them viciously. Well, I made
some changes to make it show my web content, but other than that, it was
pure joy for me to be able to skip this kind of design work for a
website. It also did a great job with the design, by the way. So, I was
happy with what I got. The prompting started with me directly asking for
the HTML/CSS files by describing the purpose of my website (very)
briefly in one or two sentences. It was like, \"Generate a web page
template with HTML and CSS files for a website whose aim is simply to
let users sign up and do X.\". Then, as I needed designs for my
different web pages, my prompting template was \"Now, generate a user
profile page where the user's name, email, and bio are displayed along
with the list of posts that he has posted.\". ChatGPT generated one HTML
and one CSS each time I prompted it like that. Then I would copy them
and make some minor changes as I needed, and if a big change needed to
be done, I would prefer to ask ChatGPT to redo it for me. I also asked
it to generate images for my website but I ended up using none of them;
good ol' google images was the best place to find appropriate images. 

Yeah\... There is not actually much to say here. This is all it was.
Simple stuff.

# 3. Hosting? Deploying? How?

I tried several options: Vercel, AWS, Kamatera, NameCheap. Well, Vercel
was easy and fast to deploy the project by importing it from my private
GitHub repository. But the problem was that I couldn't figure out why it
gave me "read-only database" error when I was trying to write to the
database through my web app. I also decoupled the backend from the
database. I used Vercel Postgres as a separate database and connected my
Django backend to it by changing the settings.py file as follows:

```[python]
ALLOWED_HOSTS = ['localhost', '127.0.0.1', 
                 '162.0.217.25', # ip address of my website
                 'giblabs.net', 'www.giblabs.net'] # domain name(s)

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "app_db",
        "USER": "postgres",
        "PASSWORD": "admin",
        "HOST": "localhost",
        "PORT": "5432",
    }
}

STATIC_URL = "static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = [
    BASE_DIR / "static",
    # "/var/www/static/",
]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
```

But it didn't work for some reason. So, I thought maybe I should use AWS
to run my PostgreSQL database. Would be easier with AWS, wouldn't it? It
turned out that you cannot remotely access your database running on an
AWS server because the accessibility is set to "private" instead of
"public" by default. I changed to public accessibility, but I still
couldn't connect to it from my own laptop. So, I dropped it and quickly
found out Kamatera. I quickly signed up and installed a 4\$ per month
machine, which is free to use for the first month. I ssh-ed into the
machine and installed Postgres. My initial idea was that my backend
running on Vercel would connect a normal readable and writable
PostgreSQL database running on Kamatera's server. It didn't work. So, I
copied all my project files from my machine to Kamatera's server. It
worked, and I could even remotely connect to the database from my own
laptop. The thing was, I needed to run it as a web server. So, I
installed found \[this article\] about nginx on the internet. The
article helped me to install and configure nginx on the Kamatera's
Ubuntu 22.04 server. And... It worked. Well, except that I used a raw
IP4 address to access my website, and it kept losing its connection to
the database that was running on the same machine. For some reason, even
though PostgreSQL status was active, it constantly stopped to listen on
port 5432. I had to restart it manually several times. I thought I could
write a cronjob for this but then I thought, man, this is already
running on a duck tape; no need to make my luck run out. So, I went back
to NameCheap and clicked "Go to cPanel" button near my domain name. On
the cPanel, I saw things like "Manage shell", "SSH Access", "Python
App", and other potentially useful and interesting stuff. I ended up
ssh-ing the server and remotely exploring the machine a bit. Then, I
clicked "Python App" to run my Django website on this server. Here is
how I configured it:

```[python]
Project root: DID/
Project URI: giblabs.net/
Application: DID/wsgi.py
Entry point: app
```

# Summary

It was easier for me to implement the backend with Django and then use
the frontend files that ChatGPT generated than dealing with the website
hosting part. I think I didn't have a good enough mental model and
understanding of what was going on under the whole web hosting
abstractions. I still don't have a good understanding for sure, but it
is enough to deploy something even if everything is not done in a
\"pro\" way. This is, I think, all one needs, though -- just dive into
the deep scary ocean of learning new things, learn how to make a really
shitty prototype that is held together with a bunch of duck tapes, and
then improve by learning how to remove one duck tape at a time.

# Links

- Django - <https://www.djangoproject.com>

- freeCodeCamp.org's Django tutorial on
  YouTube: <https://youtu.be/F5mRW0jo-U4?si=P-_SEVIa_m_rIRqW>

- ChatGPT: <https://chatgpt.com>

- NameCheap - <https://www.namecheap.com>

- My website: <https://www.giblabs.net>
