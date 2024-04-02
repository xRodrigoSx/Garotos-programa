.POSIX:
.PHONY: clean all deps perms

all: deps perms

deps:
	npm install readline
perms:
	chmod +x src/*

clean:
	rm -rf package-lock.json package.json node_modules

