#!/usr/bin/env python
from livereload import Server, shell
server = Server()
server.watch('*.html')
server.watch('*.css')
server.watch('*.js')
server.serve()
