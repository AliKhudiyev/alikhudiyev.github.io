---
layout: post
author:
- Ali Khudiyev
title: "Simple but honest tech stack"
date: 2025-03-07 13:12:00 +0400
categories: archive miscellaneous tech-stack
---

Are you one of those people who are looking for the best tech stack out
there for programming? Do you want to have the tech stack of the coolest
developers who flex with their perfectly clean desktop setups while
being tech-stacked out of their minds? If you do, then you are
definitely in the wrong place. The reason is that most of the time, the
coolest-seeming devs are actually the normies, while the guys they call
\"normies\" are the coolest devs out there. You see, it does not really
matter how tech-stacked you are or how clean your desktop is. It is all
about getting things done as efficiently as possible. If your tech stack
obstructs your way of doing things and puts you in a position where you
have to click your way through hundreds of GUI elements to get what you
want, then I would say you are missing out on a lot.

There is not much to say about the tech stack I use because it is very
simple. It starts with choosing a proper OS, which is clearly not
Windows, and keeps adding different \"tools\" on top of each other until
the tools that can be added on top of the layers below become
domain-specific, depending on your workflow. Before diving into the
toolset, I just want to give you the descriptions of a couple of terms
used in this post. First of all, the term \"window\" (as in \"a window
on your desktop\") is used to refer to a stand-alone application window
that has a unique process ID. Secondly, the term \"tab\" (as in \"a tab
on your window\") is used to refer to the part of the application window
on which (some or all) contents of the same application are displayed.

# Your soul is an OS

Whether you believe it or not, you are controlled by an operating system
called HumanSoul v+2025. I don't know how or when it gets upgraded, but
one thing's for sure: it is there all the time with the bucket of meat
that we call \"us.\" We aren't usually asked to choose our own OS when
we are born, and some may say that's unfortunate. Luckily, though, we
can choose an OS for our computers, and if you make a bad choice, it may
haunt you for years, if not forever. It may shape your personality to
the extent that you may even stop programming and start reading Emacs
tutorials, wasting your life. One such bad example of an OS for me is
Windows. Why? Well, maybe you should go ask the Windows devs who wrote
WSL for Windows. They might be so frustrated with their own OS that they
bring a Linux environment to it. However, I count it as a win-win
situation for everyone: windows devs are happy because of what WSL
brings to the table, and Linux devs are happy because they get to say,
\"told ya it sucks!\" all day long.

Let me now give you better OS options that are preferred by many real
computer programmers. It has to be a Unix-based OS, folks! Such as Linux
distros or MacOS. One of the popular Linux distros is Ubuntu, and this
was the first OS that I started using when I got more seriously involved
in the programming business. Other examples of this kind include, but
are not limited to, Federo Linux, Kali Linux, SUSE Linux, and Arch
Linux. Nowadays, I use MacOS, which is also Unix-based, so they feel
pretty much the same to me for most of the things I do on my machine.
So, if you have a MacBook computer, you can just use MacOS without any
hesitation. If you have any other personal computer, you can just
install Ubuntu if you don't want to waste too much time deciding which
OS is the best for your workflow.

# Gotta love the good ol' terminal window.

Do you feel comfortable working with multiple windows on your PC? Work
with the terminal windows. It is much simpler than the other types of
windows you might feel comfortable working with at first glance, but the
neat part is that you are not actually comfortable; you have just been
brainwashed to think that it's more comfortable. You haven't just seen
the actual peak speed and efficiency some people possess while working
on a computer. You haven't seen how things could have been done way, and
I mean way, faster by using a good ol' terminal instead of low-iq fancy
GUI elements\... Let me now introduce you to the world of efficiency.

We will start with the terminal, obviously. You need to first have a
package manager to download and install stuff on your computer. If you
are using MacOS, you can go with the homebrew package manager, and if
you are using another Linux-based OS, you can go with the built-in apt
manager. Unfortunately, MacOS does not ship with the preinstalled
homebrew binaries, so you have to install it manually. Fortunately,
doing so is easy. After you have your package manager installed, you can
now start downloading stuff from your terminal. Let's see what would be
the first thing to install.

## Oh, My Zsh!

Now, you need to configure your shell environment inside your favorite
choice of terminal.[^1] My personal choice for a shell configuration is
[**Zsh**](https://ohmyz.sh) or [**Oh My Zsh!**](https://ohmyz.sh) I have
been using it for quite a while now, and I like it so far. So you can
also start by downloading it to give it a try to see if you like it,
too. I will not talk about detailed instructions on how to install and
configure it, but I will leave some links to guide you through the
process. This blog post is not about the nitty-gritty details of how to
install and configure stuff; it is only about giving you the necessary
information about the useful tools so that you can go do your own
research on them. One helpful resource for reading about Zsh and its
installation/configuration process is [their GitHub
repo](https://github.com/ohmyzsh/ohmyzsh/wiki).

I assume you have already installed and/or configured Zsh. Now, you need
to play with it and see what it can do for you. It won't be too long
before you realize some bottlenecks in your workflow, and you will
probably want to switch back to using multiple non-terminal windows
again. Don't do it. Not yet, at least. Feeling that you cannot unleash
your true potential by only using Zsh on your terminal is pretty
understandable, well, because it is true. Now, you should ask yourself
the following question: How do I work with (text) files on my terminal?
The answer is, obviously, by using a text editor. The trick is knowing
which editor is being used specifically. The first rule of thumb is to
avoid any GUI-based text editors, such as your OS's default text editor,
or VS Code, Sublime, Atom, and things like that, and I don't even
mention IDEs. You should switch to using terminal-based editors, such as
Nano, Vi(m), NeoVim, Emacs, and so on. To be more specific, not all of
these tools are really that great for efficiency. For peak efficiency, I
would suggest using Vi (or Vim, whatever).[^2]

## You must be full of Vim!

If you are a coding enthusiast, then you must utilize what
[**Vim**](https://www.vim.org) offers you. Vim is a highly configurable
text editor built to make creating and changing any kind of text very
efficient, according to its website, and I confirm the accuracy of this
description firmly. I am, in fact, a big believer in Vim. It comes as
just vi in most Unix and MacOS systems. After downloading Vim with a
package manager, you should learn how to use it. You will find yourself
not being able to quit Vim once you realize how much value it brings to
your life. And, you are usually blessed with this realization twice in
your life: when you launch Vim for the first time in your life and after
you have launched it \"many-many\" times. At some point, you may want to
do everything in Vim, like, literally everything. But you should maybe
go socialize with real people sometimes instead of just smiling at the
ASCII image produced by the :smile command in Vim. Definitely not
always, though. Learning Vim will require some time, but it won't take
long before you get the basics settled in. Its learning curve is
probably steeper than that of Emacs because Vim's default commands are
more intuitive to remember and get used to. Some may even call Vim
motions the motions that the god used to navigate between different
human body parts for further modifications. Who knows? Might be true\...
Anyway, here is a cool [**vim cheat sheet**](https://vim.rtorr.com).
Practice Vim by working on some real projects you have, as it is usually
the best way to dial up your custom key bindings in vim configuration
file (.vimrc) since you will realize what things actually matter to you
to do even faster.

I assume you have already set up Vim and learned how to use it properly
(to some extent, at least). Now, you are probably thinking that you are
already on peak programmer performance by using your terminal and Vim,
but no, no, no, my friend, you are only halfway there (maybe even less).
Still not mind-blown? Okay, let's continue to the next bit. You may have
realized that your efficiency is now bottlenecked by switching back and
forth between your Vim editor and terminal window. You probably have
multiple terminal tabs open, on some of which you have your Vim session
and on the rest of which you have other things going on. The other
possibility is you have multiple terminal windows open, in which case
you are already reducing your performance by working with multiple
windows without knowing how to navigate between them efficiently. You
also don't close your terminal(s) to avoid throwing your already-running
sessions into the empty void. That's why I would like to now introduce
you to the terminal multiplexer, or tmux for short.

## Terminal multiplexer got your back.

You ask, what is the [**terminal
multiplexer**](https://github.com/tmux/tmux/wiki) or
[**tmux**](https://github.com/tmux/tmux/wiki)? It is a tool that
operates on your terminal to make life easier for you. It makes life
easier by addressing the problems mentioned above. These are some of the
problems: working with multiple terminal sessions, terminal window/tab
management, and terminal sessions running in the background. The first
thing is that you can have multiple terminal sessions within one tmux
session, and those sessions do not go anywhere even when you quit your
terminal unless you explicitly want them to be gone; they just run as
the background processes by default which you can connect to on after
opening up a new terminal session. Then, you can display multiple
terminals on the same Tmux window, divided into horizontal and/or
vertical sections; you can navigate between different Tmux sessions and
terminal windows really fast within Tmux. Here is a [**tmux cheat
sheet**](https://tmuxcheatsheet.com) that will get you started.

Tmux will quickly become your best terminal multiplexer due to its
simplicity and efficiency. Once you have played with it enough with the
default settings, you will jump to customization by creating your own
tmux configuration file (.tmux.conf). At that point, the big picture of
the tech stack will have to emerge slowly -- you use Vim as a text
editor (with plugins and whatnot) on top of Tmux (also with plugins),
which acts as a terminal manager on top of your terminal, which has the
Zsh shell environment (also with custom configurations) and a package
manager such as apt or homebrew. Cool!

# Still insisting on using multiple windows?

You have come this far already and feel comfortable using the tech stack
described up until this point? Bravo, you are already much more
performant in the things you are doing with your computer than you were
when you started reading this blog post. Let's get to the serious talk
now. You may still think that you are somewhat bottlenecked. Let me ask,
though: Bottlenecked by what? You say: By not being able to use multiple
windows efficiently. I say: But you don't need to! You say: F\*ck you! I
say: I understand your frustration now, and let me help you with that.
Some say this is an NPC dialogue from an old-ass game, but I claim we
are all NPCs anyway, and the game we are playing has thousands of
billions of years. So, bear with me here for a minute, okay?

## You are allowed to use a web browser.

Technically speaking, you don't even need to use a web browser window
outside the terminal because there are also tools to search stuff on the
web without leaving the terminal. Some of such tools are
[**brow.sh**](https://www.brow.sh),
[**w3m**](https://w3m.sourceforge.net), and
[**lynx**](https://lynx.invisible-island.net). However, let's say you
want to watch a video on YT after having a 4-hour burnout from debugging
your C code. Actually, this is not the only reason that you would want
to use a graphical web browser. You can use a browser for pretty much
any reasonable reason. The thing that threw me off about using a
graphical web browser at first was that I had to move my fingers away
from the keyboard to a trackpad or mouse too often. If you also want to
keep using a graphical web browser like me, the solution is to use an
extension that lets you navigate through the browser elements by using
keyboard shortcuts. One such extension that I am using with Safari is
the [**Vim-like**](https://www.jasminestudios.net/vimlike/) extension.
It should be supported by Firefox, too (not that I necessarily recommend
using Firefox).

## Window manager is what you need.

Usually, all well-known OSs come with a crappy window manager (wm). A WM
is a tool, like many others, that helps to ease our lives with multiple
windows by giving us functionalities for fast navigation by using
terminal commands. If it is a terminal command, you can just type it
without moving your fingers to your mouse or trackpad, and that's what
we like! There is more than one WMs, but I will just give you two based
on the different OS you might have. If you are using MacOS, you can go
with the [**Yabai**](https://github.com/koekeishiya/yabai), and if you
are using a Linux-based OS, you can go with the
[**i3**](https://i3wm.org) window manager.

The thing with the window manager is that you get to navigate between
your displays, workspaces, and open windows very fast. A display refers
to a monitor screen; a workspace refers to a group of open windows in a
display; an open window refers to a running application window. For
example, you can have 2 displays (your laptop's screen + an additional
monitor connected to it), 3 workspaces in your laptop's display and 4
workspaces in the other display, and 1-to-4 open windows in each
workspace. It is also worth mentioning that WMs are all about running
commands to navigate between your windows and whatnot, but you don't
actually want to type commands on your terminal each time you want to
move from one window to another. What you want is the shortcuts, and
those shortcuts can be made by using another \"extension-like\" tool
known as hotkey daemon. You can use
[**sxhkd**](https://manpages.ubuntu.com/manpages/kinetic/man1/sxhkd.1.html)
for Linux and [**skhd**](https://github.com/koekeishiya/skhd) for MacOS.
As with other tools, you will probably end up having your own custom
settings for the WM and the hotkey daemon you use; you can create and
modify .yabairc and .skhdrc configuration files for yabai and skhd,
respectively.

# Congrats!

You have come this far, huh? Maybe you are one of the most efficient in
the game, and being one of the most efficient may make you one of the
best at some point, too. So, stick with your determination; it may be
worth it after all.

<figure>
    <img src="/assets/images/archive/tech-stack.jpg" style="width=50%;" />
</figure>

I will say no more. I'll leave you with the [simple but honest tech
stack](https://github.com/AliKhudiyev/tech-stack/tree/main). Enjoy!

[^1]: You can use iTerm on MacOS, but if you are new to things, you can
    just start working with the vanilla Terminal itself.

[^2]: We don't do Emacs here, Emacs users. Are we sorry about it? Not
    one bit.
