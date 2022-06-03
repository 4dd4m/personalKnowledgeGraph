---
draft: true
---
[#](#) Personal Knowledge Graph

[This](https://adamtorok.xyz/) is my modified take on [zettlekasten](https://duckduckgo.com/?q=zettlekasten&t=vivaldi&ia=web) note taking. I put my things here for reviewing (and searching). 


The structure, idea, the "isosec" format etc. originated from rwxrob[^1]

## Learning Goals
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/65) [Docker in action, 2nd Edition](https://www.manning.com/books/docker-in-action-second-edition)
* ![ 447 ](https://us-central1-progress-markdown.cloudfunctions.net/progress/60) [The Linux Command Line and Shell Scripting Bible, 3rd Edition](https://www.amazon.co.uk/Linux-Command-Shell-Scripting-Bible/dp/111898384X)
* ![  ](https://us-central1-progress-markdown.cloudfunctions.net/progress/35) [Vue - The Complete Guide @ udemy.com ](https://www.udemy.com/course/vuejs-2-the-complete-guide)

## Future Learning
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/50) [C Programming For Beginners - Master the C Language](https://www.udemy.com/course/c-programming-for-beginners-/learn)
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/30) [The Complete JavaScript Course 2022: From Zero to Expert!  ](https://www.udemy.com/course/the-complete-javascript-course/)
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/20) [Laravel: Up & Running](https://laravelupandrunning.com)
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/0) [Mastering TypeScript - Fourth Edition](https://www.packtpub.com/product/mastering-typescript-fourth-edition/9781800564732)
* ![ ](https://us-central1-progress-markdown.cloudfunctions.net/progress/5) [Advanced C Programming Course](https://www.udemy.com/course-dashboard-redirect/?course_id=2800976)

## How to search
Github provides a powerful search engine, as a fallback I just use a simple `grep`, `:vimgrep` from the terminal.

## Commands
* `./bin/note new` add a new note
* `./bin/note last` edit the last note in vim
* `./bin/note title` list all note title
* `./bin/note tags` list all tags in the notes
* `./bin/note searchTag tag` search a tag in all available tags
* `./bin/wrap` is a vim filter wrap the source code in vim
* `./bin/isosec` prints out the current time in isosec format

`./bin` has to be in the `path`.

## Todo
* `./bin/note suggest tagName` a bash filter which gives a link to a corresponding notes tagged with tagName `[note.md]`


[^1]: https://www.youtube.com/rwxrob
