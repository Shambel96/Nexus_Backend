- linux Commands
- Window Commands
- node installation
- vs code
- github 

Git and github
- What is Version Control?
keeps track history of changes
Problem
- Junior might break the code
- 2 or more person can work on the same file -> Conflict
- new changes or new feature -> Commit

1. Git - most famous VC

Git it have 3 areas
- Working area
where untracked files exist
git doesn't know anything about this thing
- staging area
all files be part certain version
git does know about it
Local Repo
- remote area
-

some Commands
git config --list
git init
- How to take from wa to sa?
git add <file/folder>
- How to make actual version?
git commit -m <message>
- How to take it to remote area?
git push <remote name> <branch name> 
- to see commit history information
git log
- how to discard changes made in the staging area
git remote
- a command used to connect our local repo with the remote repo
git remote <remote name> <branch name>
- merge conflict will happen merge Conflict how to resolve

How it works?
- Tree and Hashing (SHA1 Algorithms)
f086efb555b5a7d2ef1262c9282fcd520dfb5db3 : "file change"

branch 
- feature/add new UI for Logout
- bug-fix/fixed some issue
- to create a new branch
git pull > before branching
git checkout -b <branch name>
- git stash
- git revert
- git rebase
