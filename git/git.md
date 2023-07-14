# Git Commands Cheat Sheet

## Initializing a Repository

- `git init`: Create a new repository in the current directory.

## Cloning a Repository

- `git clone <path-to-repository-to-clone>`: Create an identical copy of an existing repository.

## Repository Status

- `git status`: Display the current status of the repository.

## Viewing Commits

- `git log`: Display all of the commits of a repository.
- `git log --oneline`: Display the commits in a concise format.
- `git log --stat`: Display the files that have been changed in each commit.
- `git log -p`: Display the actual changes made to a file in each commit.
- `git log -p --stat`: Display both the changes and file statistics in each commit.
- `git log -p <commit-SHA>`: Show only one specific commit.
- `git show`: Show the details of a commit.

## Staging and Committing Changes

- `git add <file1> <file2> ... <fileN>`: Move files from the Working Directory to the Staging Index.
- `git rm --cached <file>...`: Unstage files from the Staging Index.
- `git commit -m "commit message"`: Create a new commit with a descriptive message.
- `git diff`: View the changes that have been made but not committed yet.

## Tags

- `git tag <tag-name>`: Set a tag at the current commit.
- `git tag`: Display all tags in the repository.
- `git tag -d <tag-name>`: Delete a tag.
- `git tag -a <tag-name> <commit-SHA>`: Add a tag to a past commit.

## Branches

- `git branch`: List all branch names in the repository.
- `git branch <new-branch-name>`: Create a new branch.
- `git checkout <branch-name>`: Switch to a different branch.
- `git branch -d <branch-name>`: Delete a branch.
- `git branch -D <branch-name>`: Force delete a branch.
- `git checkout -b <new-branch-name>`: Create a new branch and switch to it.

## Merging

- `git merge <name-of-branch-to-merge-in>`: Merge a branch into the current branch.

## Modifying Commits

- `git commit --amend`: Change the most recent commit.
- `git revert <SHA-of-commit-to-revert>`: Revert a commit.
- `git reset <reference-to-commit>`: Reset (erase) commits.
  - `--mixed`: Reset to the previous commit, keeping changes in the Working Directory.
  - `--soft`: Reset to the previous commit, keeping changes in the Staging Index.
  - `--hard`: Discard all changes and reset to the previous commit.

