import { useState } from 'react';
import { Search, GitBranch, GitCommit, GitMerge, GitPullRequest, Terminal, Upload, Download, ChevronDown, ChevronRight, RotateCcw } from 'lucide-react';

export default function GitReference() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState(new Set());

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const referenceData = [
    {
      id: 'setup',
      title: 'Setup & Configuration',
      icon: Terminal,
      color: 'from-blue-500 to-blue-600',
      items: [
        {
          name: 'git config',
          syntax: 'git config [--global] key value',
          description: 'Set configuration values for Git',
          example: 'git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"',
          use: 'Configure username, email, editor, and other Git settings'
        },
        {
          name: 'git init',
          syntax: 'git init [directory]',
          description: 'Initialize a new Git repository',
          example: 'git init\ngit init my-project',
          use: 'Create a new local repository in current or specified directory'
        },
        {
          name: 'git clone',
          syntax: 'git clone <url> [directory]',
          description: 'Clone a repository from a remote source',
          example: 'git clone https://github.com/user/repo.git\ngit clone <url> my-folder',
          use: 'Download a complete copy of a remote repository'
        },
        {
          name: 'git remote',
          syntax: 'git remote [add|remove|rename] <name> <url>',
          description: 'Manage remote repository connections',
          example: 'git remote add origin <url>\ngit remote -v\ngit remote remove origin',
          use: 'Add, view, or remove remote repositories'
        }
      ]
    },
    {
      id: 'basic',
      title: 'Basic Commands',
      icon: GitCommit,
      color: 'from-green-500 to-green-600',
      items: [
        {
          name: 'git status',
          syntax: 'git status',
          description: 'Show working tree status',
          example: 'git status\ngit status -s  # Short format',
          use: 'Check which files are modified, staged, or untracked'
        },
        {
          name: 'git add',
          syntax: 'git add <file|directory|.>',
          description: 'Add files to staging area',
          example: 'git add file.txt\ngit add .\ngit add -A  # All changes',
          use: 'Stage changes for next commit'
        },
        {
          name: 'git commit',
          syntax: 'git commit -m "message"',
          description: 'Record changes to repository',
          example: 'git commit -m "Add new feature"\ngit commit -am "Fix bug"  # Add + commit',
          use: 'Save staged changes with a descriptive message'
        },
        {
          name: 'git diff',
          syntax: 'git diff [file]',
          description: 'Show changes between commits, working tree, etc.',
          example: 'git diff\ngit diff --staged\ngit diff HEAD~1',
          use: 'View differences in files before committing'
        },
        {
          name: 'git log',
          syntax: 'git log [options]',
          description: 'Show commit history',
          example: 'git log\ngit log --oneline\ngit log --graph --all',
          use: 'View commit history with various formatting options'
        },
        {
          name: 'git show',
          syntax: 'git show <commit>',
          description: 'Show various types of objects',
          example: 'git show HEAD\ngit show abc123',
          use: 'Display information about commits, tags, or other objects'
        }
      ]
    },
    {
      id: 'branching',
      title: 'Branching & Merging',
      icon: GitBranch,
      color: 'from-purple-500 to-purple-600',
      items: [
        {
          name: 'git branch',
          syntax: 'git branch [options] [branch-name]',
          description: 'List, create, or delete branches',
          example: 'git branch\ngit branch feature-x\ngit branch -d old-branch',
          use: 'Manage branches in your repository'
        },
        {
          name: 'git checkout',
          syntax: 'git checkout <branch|commit>',
          description: 'Switch branches or restore files',
          example: 'git checkout main\ngit checkout -b new-branch',
          use: 'Switch to different branches or commits'
        },
        {
          name: 'git switch',
          syntax: 'git switch <branch>',
          description: 'Switch branches (modern alternative to checkout)',
          example: 'git switch main\ngit switch -c new-branch',
          use: 'Cleaner way to switch branches without file operations'
        },
        {
          name: 'git merge',
          syntax: 'git merge <branch>',
          description: 'Join two or more development histories',
          example: 'git merge feature-x\ngit merge --no-ff feature-x',
          use: 'Combine changes from different branches'
        },
        {
          name: 'git rebase',
          syntax: 'git rebase <branch>',
          description: 'Reapply commits on top of another base',
          example: 'git rebase main\ngit rebase -i HEAD~3',
          use: 'Create linear history by moving commits'
        },
        {
          name: 'git cherry-pick',
          syntax: 'git cherry-pick <commit>',
          description: 'Apply changes from specific commits',
          example: 'git cherry-pick abc123\ngit cherry-pick abc123..def456',
          use: 'Copy specific commits to current branch'
        }
      ]
    },
    {
      id: 'remote',
      title: 'Remote Operations',
      icon: Upload,
      color: 'from-orange-500 to-orange-600',
      items: [
        {
          name: 'git fetch',
          syntax: 'git fetch [remote] [branch]',
          description: 'Download objects and refs from remote',
          example: 'git fetch origin\ngit fetch --all',
          use: 'Get latest changes without merging'
        },
        {
          name: 'git pull',
          syntax: 'git pull [remote] [branch]',
          description: 'Fetch and merge remote changes',
          example: 'git pull origin main\ngit pull --rebase',
          use: 'Update local branch with remote changes'
        },
        {
          name: 'git push',
          syntax: 'git push [remote] [branch]',
          description: 'Upload local changes to remote',
          example: 'git push origin main\ngit push -u origin feature-x',
          use: 'Send commits to remote repository'
        },
        {
          name: 'git push --force',
          syntax: 'git push --force-with-lease',
          description: 'Force push with safety check',
          example: 'git push --force-with-lease',
          use: 'Overwrite remote history safely (use with caution)'
        },
        {
          name: 'git remote prune',
          syntax: 'git remote prune <remote>',
          description: 'Delete stale remote-tracking branches',
          example: 'git remote prune origin',
          use: 'Clean up deleted remote branches locally'
        }
      ]
    },
    {
      id: 'undoing',
      title: 'Undoing Changes',
      icon: RotateCcw,
      color: 'from-red-500 to-red-600',
      items: [
        {
          name: 'git reset',
          syntax: 'git reset [--soft|--mixed|--hard] <commit>',
          description: 'Reset current HEAD to specified state',
          example: 'git reset HEAD~1\ngit reset --hard origin/main',
          use: 'Undo commits or unstage files (use --hard carefully)'
        },
        {
          name: 'git revert',
          syntax: 'git revert <commit>',
          description: 'Create new commit that undoes changes',
          example: 'git revert abc123\ngit revert HEAD',
          use: 'Safely undo commits by creating reverse commit'
        },
        {
          name: 'git restore',
          syntax: 'git restore [--staged] <file>',
          description: 'Restore working tree files',
          example: 'git restore file.txt\ngit restore --staged file.txt',
          use: 'Discard changes or unstage files (modern way)'
        },
        {
          name: 'git clean',
          syntax: 'git clean -fd',
          description: 'Remove untracked files from working tree',
          example: 'git clean -n  # Dry run\ngit clean -fd',
          use: 'Delete untracked files and directories'
        },
        {
          name: 'git stash',
          syntax: 'git stash [push|pop|list]',
          description: 'Temporarily save changes',
          example: 'git stash\ngit stash pop\ngit stash list',
          use: 'Save work in progress without committing'
        },
        {
          name: 'git reflog',
          syntax: 'git reflog',
          description: 'Show reference logs',
          example: 'git reflog\ngit reset --hard HEAD@{2}',
          use: 'Recover lost commits or undo mistakes'
        }
      ]
    },
    {
      id: 'inspection',
      title: 'Inspection & Comparison',
      icon: Search,
      color: 'from-teal-500 to-teal-600',
      items: [
        {
          name: 'git log --graph',
          syntax: 'git log --graph --oneline --all',
          description: 'Show commit history as graph',
          example: 'git log --graph --oneline --decorate --all',
          use: 'Visualize branch structure and history'
        },
        {
          name: 'git blame',
          syntax: 'git blame <file>',
          description: 'Show who modified each line',
          example: 'git blame file.txt\ngit blame -L 10,20 file.txt',
          use: 'Track down who made specific changes'
        },
        {
          name: 'git grep',
          syntax: 'git grep <pattern>',
          description: 'Search for text in repository',
          example: 'git grep "TODO"\ngit grep -n "function"',
          use: 'Find text across all tracked files'
        },
        {
          name: 'git shortlog',
          syntax: 'git shortlog [options]',
          description: 'Summarize git log output',
          example: 'git shortlog -sn',
          use: 'Get summary of contributions by author'
        },
        {
          name: 'git diff-tree',
          syntax: 'git diff-tree <commit>',
          description: 'Show changes in a commit',
          example: 'git diff-tree -p abc123',
          use: 'Compare tree objects in commits'
        }
      ]
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      icon: GitPullRequest,
      color: 'from-pink-500 to-pink-600',
      items: [
        {
          name: 'git tag',
          syntax: 'git tag [-a] <tagname> [commit]',
          description: 'Create, list, or delete tags',
          example: 'git tag v1.0.0\ngit tag -a v1.0.0 -m "Release 1.0"',
          use: 'Mark specific points in history (releases)'
        },
        {
          name: 'git archive',
          syntax: 'git archive <branch> -o file.zip',
          description: 'Create archive of files from repository',
          example: 'git archive main --format=zip -o release.zip',
          use: 'Export repository or branch as archive'
        },
        {
          name: 'git submodule',
          syntax: 'git submodule [add|update|init]',
          description: 'Manage repositories within repositories',
          example: 'git submodule add <url>\ngit submodule update --init',
          use: 'Include external repositories as subdirectories'
        },
        {
          name: 'git worktree',
          syntax: 'git worktree add <path> <branch>',
          description: 'Manage multiple working trees',
          example: 'git worktree add ../hotfix main',
          use: 'Work on multiple branches simultaneously'
        },
        {
          name: 'git bisect',
          syntax: 'git bisect [start|good|bad]',
          description: 'Binary search to find bug-introducing commit',
          example: 'git bisect start\ngit bisect bad\ngit bisect good v1.0',
          use: 'Find which commit introduced a bug'
        }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Operations',
      icon: GitMerge,
      color: 'from-indigo-500 to-indigo-600',
      items: [
        {
          name: 'git rebase -i',
          syntax: 'git rebase -i <commit>',
          description: 'Interactive rebase for editing history',
          example: 'git rebase -i HEAD~5',
          use: 'Squash, reorder, or edit commits'
        },
        {
          name: 'git filter-branch',
          syntax: 'git filter-branch [options]',
          description: 'Rewrite branches (deprecated, use filter-repo)',
          example: 'git filter-branch --tree-filter "rm file" HEAD',
          use: 'Rewrite history to remove files or change commits'
        },
        {
          name: 'git gc',
          syntax: 'git gc [--aggressive]',
          description: 'Cleanup and optimize repository',
          example: 'git gc\ngit gc --aggressive --prune=now',
          use: 'Compress file revisions and remove unreachable objects'
        },
        {
          name: 'git fsck',
          syntax: 'git fsck',
          description: 'Verify integrity of repository',
          example: 'git fsck --full',
          use: 'Check for corrupted objects in repository'
        },
        {
          name: 'git bundle',
          syntax: 'git bundle create <file> <branch>',
          description: 'Create archive for offline transport',
          example: 'git bundle create repo.bundle --all',
          use: 'Package repository for transfer without network'
        }
      ]
    }
  ];

  const filteredData = referenceData.map(section => ({
    ...section,
    items: section.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.syntax.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-3xl mb-6 backdrop-blur-sm">
              <GitBranch size={40} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Git Reference
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto mb-6">
              Complete guide to Git commands, branching, merging, and version control workflows
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Git commands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-2xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-orange-300 shadow-2xl"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Reference Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {filteredData.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections.has(section.id);
            
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-left">
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      <p className="text-sm text-gray-600 mt-1">{section.items.length} commands</p>
                    </div>
                  </div>
                  {isExpanded ? (
                    <ChevronDown className="text-gray-400" size={24} />
                  ) : (
                    <ChevronRight className="text-gray-400" size={24} />
                  )}
                </button>

                {/* Section Content */}
                {isExpanded && (
                  <div className="border-t border-gray-200">
                    <div className="p-6 space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-gray-200 pl-6 hover:border-orange-500 transition-colors">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                          <p className="text-gray-600 mb-3">{item.description}</p>
                          
                          <div className="bg-gray-50 rounded-lg p-4 mb-3 font-mono text-sm">
                            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Syntax</p>
                            <code className="text-purple-700">{item.syntax}</code>
                          </div>
                          
                          <div className="bg-gray-900 rounded-lg p-4 mb-3">
                            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Example</p>
                            <pre className="text-sm font-mono text-green-400 overflow-x-auto">
                              <code>{item.example}</code>
                            </pre>
                          </div>

                          <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                            <p className="text-xs font-semibold text-orange-600 uppercase mb-1">Usage</p>
                            <p className="text-sm text-orange-700">{item.use}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filteredData.length === 0 && (
          <div className="text-center py-16">
            <Search className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              No results found
            </h3>
            <p className="text-gray-500 mb-6">
              Try a different search term
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              Clear Search
            </button>
          </div>
        )}
      </section>

      {/* Quick Reference Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Git Best Practices
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitCommit className="text-orange-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commit Often</h3>
              <p className="text-gray-600 text-sm">
                Make small, focused commits with clear messages. One logical change per commit.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <GitBranch className="text-red-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Branch Strategy</h3>
              <p className="text-gray-600 text-sm">
                Use feature branches. Keep main/master stable. Merge via pull requests.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <Download className="text-pink-600 mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pull Before Push</h3>
              <p className="text-gray-600 text-sm">
                Always pull latest changes before pushing to avoid conflicts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}