[![Build Status](https://travis-ci.org/carlosbaraza/unicorn-contributor.svg?branch=master)](https://travis-ci.org/carlosbaraza/unicorn-contributor)

# Unicorn Contributor

![Full GitHub contribution bar - Unicorn Contributor](https://raw.githubusercontent.com/carlosbaraza/unicorn-contributor/master/docs/imgs/green-bar.png)

Pressed to complete your GitHub profile green bar? Complete the bar in one second.

1. ```npm i -g unicorn-contributor```
2. Create a new repository in GitHub
3. ```git clone YOUR_REPO_GIT_URL```
4. ```cd YOUR_REPO_NAME```
5. ```unicorn-contributor```

# Options
```
Usage: unicorn-contributor [options]


Options:

  -V, --version                        output the version number
  -r, --realistic                      Humans can not contribute every day
  -g, --realistic-gaps [gaps]          Leaves gaps between contributions, so your history looks realistic [100]
  -w, --only-weekends                  Recruiters love geeks without social life (WIP)
  -Z, --crazy-hours                    Pretend you code instead of watching Netflix every night (WIP)
  -a, --artistic                       Write your name in the history graph (WIP)
  -p, --profile <stereotype>           Available profiles: night-owl, early-bird, office-hours, weekender (WIP)
  -t, --timezone [timezone]            Change your timezone (tz) [GMT]
  -u, --time-wake-up [time]            Time for first commit of the day [6]
  -s, --time-sleep [time]              Time for last sleepy commit [24]
  -f, --from [date]                    Date to start contributing [20160101]
  -t, --to [date]                      Date to stop contributing [20190101]
  -c, --contributions [contributions]  How many contributions make you the best Engineer at your company? [3000]
  -f, --force                          Commit to this repository, even if it is not empty
  -v, --verbose                        Show git commands being executed, etc.
  -h, --help                           output usage information
```


# Why did I do this?

In my opinion, none of the graphs/statistics provided by GitHub are useful.
If anything, they can be misleading. Those metrics are not an
accurate measurement of value, which is the only thing that matters.

Some real life examples that upset me enough to push me to create this:

* Recruiters looking at the GitHub green bar like if it accurately displayed the
quality of my potential work.

* Engineers judging other engineers just by looking at the GitHub profile.

* Managers or other engineers looking at the commit and line counts. These
metrics can be found for each Engineer and repository. Like if writing 1000 lines
actually added 1000 times the value. Sometimes, a simple dependency version
bump can improve performance and bring much more value.


# Disagree?

If you think that code metrics are useful for anything, please open an
issue to this repo, and if your argumentation is good enough I will even
consider removing the repository and the npm module.
