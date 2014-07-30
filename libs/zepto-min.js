




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>tabswitcher/zepto-min.js at master · jhchabran/tabswitcher</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="jhchabran/tabswitcher" name="twitter:title" /><meta content="tabswitcher - Textmate&amp;#39;s Command-T to switch tabs in Google Chrome" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/10151?v=1&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/10151?v=1&amp;s=400" property="og:image" /><meta content="jhchabran/tabswitcher" property="og:title" /><meta content="https://github.com/jhchabran/tabswitcher" property="og:url" /><meta content="tabswitcher - Textmate&#39;s Command-T to switch tabs in Google Chrome" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="5F1A48AC:2B9A:5DF090:53D94899" name="octolytics-dimension-request_id" /><meta content="369662" name="octolytics-actor-id" /><meta content="vladson" name="octolytics-actor-login" /><meta content="8476d0b1a7e619290dc3625f37f2e7efe6d73bf18dcaffa63e79a0b442091048" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="dn72q8qMCZp9lfC/iCZevjV5QLkafRR/KFkbIZREc6erdVX35BMO9KWrVzcFExHVzdPjEJdjQa/JsklvRf5YbQ==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-d58a3f71cf62aa8d379732c258db10075702874a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-ece7c1ba2f1e92e0ec11fcfae500e73ae7b1a412.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="5906bce1f9554bf1d7b01ba9e571e02a">

      
  <meta name="description" content="tabswitcher - Textmate&#39;s Command-T to switch tabs in Google Chrome">


  <meta content="10151" name="octolytics-dimension-user_id" /><meta content="jhchabran" name="octolytics-dimension-user_login" /><meta content="2186085" name="octolytics-dimension-repository_id" /><meta content="jhchabran/tabswitcher" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2186085" name="octolytics-dimension-repository_network_root_id" /><meta content="jhchabran/tabswitcher" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/jhchabran/tabswitcher/commits/master.atom" rel="alternate" title="Recent Commits to tabswitcher:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status unread"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="vladson"
    data-repo="jhchabran/tabswitcher"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="jhchabran/tabswitcher">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

<ul id="user-links">
  <li>
    <a href="/vladson" class="name">
      <img alt="Vladislav Bogomolov" data-user="369662" height="20" src="https://avatars2.githubusercontent.com/u/369662?v=1&amp;s=40" width="20" /> vladson
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="vYM2A/I+Bz1P6dkobsaZKs34ccJfmhF0VmaAK+H06KNg9DlXceoGsoubHBG8k0cqPqvVouN8rphIs7zXdJUuDQ==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="jhchabran/tabswitcher">This repository</span>
    </li>
      <li>
        <a href="/jhchabran/tabswitcher/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="ivQ0hMztnhZuOC8RAGLybMxhE1opktVKUkchkuAC91ZbSpVl64xuGAURZ1LFbhLNVcEbsMkvTKQvt6Gqo2UyBA==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="2186085" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/jhchabran/tabswitcher/watchers">
        3
      </a>
      <a href="/jhchabran/tabswitcher/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/jhchabran/tabswitcher/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="PTmx4yXHCEGMr95ZaqRKzrFKiurmzxMhTXSnAESKUUbsZZ/Tsm/tqi51RKFgA/QBMZJj/1HqlfS1YF0eO6PtKw==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar jhchabran/tabswitcher">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/jhchabran/tabswitcher/stargazers">
          25
        </a>
</form>
    <form accept-charset="UTF-8" action="/jhchabran/tabswitcher/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="vipPFq/VccheicVrJwJTN3EoRmM7ErIo3Vs7UzVlBlhcARcwu5LS3uqjAHa+Il9UFEVqAAh4XEERhB03Bc3dAg==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star jhchabran/tabswitcher">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/jhchabran/tabswitcher/stargazers">
          25
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/jhchabran/tabswitcher/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of jhchabran/tabswitcher to your account" aria-label="Fork your own copy of jhchabran/tabswitcher to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/jhchabran/tabswitcher/network" class="social-count">10</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/jhchabran" class="url fn" itemprop="url" rel="author"><span itemprop="title">jhchabran</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/jhchabran/tabswitcher" class="js-current-repository js-repo-home-link">tabswitcher</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/jhchabran/tabswitcher/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/jhchabran/tabswitcher" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /jhchabran/tabswitcher">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/jhchabran/tabswitcher/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /jhchabran/tabswitcher/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/jhchabran/tabswitcher/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /jhchabran/tabswitcher/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/jhchabran/tabswitcher/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g w" data-selected-links="repo_wiki /jhchabran/tabswitcher/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/jhchabran/tabswitcher/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /jhchabran/tabswitcher/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/jhchabran/tabswitcher/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /jhchabran/tabswitcher/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url "
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jhchabran/tabswitcher.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jhchabran/tabswitcher.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url open"
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:jhchabran/tabswitcher.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:jhchabran/tabswitcher.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/jhchabran/tabswitcher" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/jhchabran/tabswitcher" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/jhchabran/tabswitcher" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save jhchabran/tabswitcher to your computer and use it in GitHub Desktop." aria-label="Save jhchabran/tabswitcher to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/jhchabran/tabswitcher/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download jhchabran/tabswitcher as a zip file"
                   title="Download jhchabran/tabswitcher as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/jhchabran/tabswitcher/blob/264859a9b3cb325619b852d51b0369c7ee5b37e5/libs/zepto-min.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f3635eb426d118dd05c8ede5f6b9f8cb -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/jhchabran/tabswitcher/blob/master/libs/zepto-min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/jhchabran/tabswitcher/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="libs/zepto-min.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jhchabran/tabswitcher" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">tabswitcher</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/jhchabran/tabswitcher/tree/master/libs" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">libs</span></a></span><span class="separator"> / </span><strong class="final-path">zepto-min.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/jhchabran/tabswitcher/contributors/master/libs/zepto-min.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>2 lines (1 sloc)</span>
          <span class="meta-divider"></span>
        <span>13.151 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/jhchabran/tabswitcher/raw/master/libs/zepto-min.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/jhchabran/tabswitcher/blame/master/libs/zepto-min.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/jhchabran/tabswitcher/commits/master/libs/zepto-min.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/jhchabran/tabswitcher?branch=master&amp;filepath=libs%2Fzepto-min.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/jhchabran/tabswitcher/edit/master/libs/zepto-min.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/jhchabran/tabswitcher/delete/master/libs/zepto-min.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'>(function(a){String.prototype.trim===a&amp;&amp;(String.prototype.trim=function(){return this.replace(/^\s+/,&quot;&quot;).replace(/\s+$/,&quot;&quot;)}),Array.prototype.reduce===a&amp;&amp;(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length&gt;&gt;&gt;0,e=0,f;if(typeof b!=&quot;function&quot;)throw new TypeError;if(d==0&amp;&amp;arguments.length==1)throw new TypeError;if(arguments.length&gt;=2)f=arguments[1];else for(;;){if(e in c){f=c[e++];break}if(++e&gt;=d)throw new TypeError}while(e&lt;d)e in c&amp;&amp;(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function C(a,b,c){var d=!a||a==3?b:b.parentNode;d.insertBefore(c,a?a==1?b.nextSibling:a==2?b:null:d.firstChild)}function A(a,b,c,d){return n(b)?b.call(a,c,d):b}function z(b,c){return c===a?y(b):y(b).filter(c)}function y(b,c){if(!b)return x();if(c!==a)return y(c).find(b);if(n(b))return y(h).ready(b);if(b instanceof x)return b;var e;p(b)?e=q(b):b instanceof Element||b===window||b===h?(e=[b],b=null):l.test(b)?e=w(b):b.nodeType&amp;&amp;b.nodeType==3?e=[b]:e=d(h,b);return x(e,b)}function x(a,b){a=a||f,a.__proto__=x.prototype,a.selector=b||&quot;&quot;;return a}function w(a){m.innerHTML=(&quot;&quot;+a).trim();return g.call(m.childNodes)}function v(a){var b,c;i[a]||(b=h.createElement(a),h.body.insertAdjacentElement(&quot;beforeEnd&quot;,b),c=k(b,&quot;&quot;).getPropertyValue(&quot;display&quot;),b.parentNode.removeChild(b),c==&quot;none&quot;&amp;&amp;(c=&quot;block&quot;),i[a]=c);return i[a]}function u(a){return a in j?j[a]:j[a]=new RegExp(&quot;(^|\\s)&quot;+a+&quot;(\\s|$)&quot;)}function t(a){return a.filter(function(a,b,c){return c.indexOf(a)==b})}function s(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():&quot;&quot;})}function r(a){return[].concat.apply([],a)}function q(b){return b.filter(function(b){return b!==a&amp;&amp;b!==null})}function p(a){return a instanceof Array}function o(a){return a instanceof Object}function n(a){return{}.toString.call(a)==&quot;[object Function]&quot;}var a,b,c,d,e,f=[],g=f.slice,h=window.document,i={},j={},k=h.defaultView.getComputedStyle,l=/^\s*&lt;[^&gt;]+&gt;/,m=h.createElement(&quot;div&quot;);y.extend=function(a,c){for(b in c)a[b]=c[b];return a},y.qsa=d=function(a,b){return g.call(a.querySelectorAll(b))},y.isFunction=n,y.isObject=o,y.isArray=p,y.fn={forEach:f.forEach,map:f.map,reduce:f.reduce,push:f.push,indexOf:f.indexOf,concat:f.concat,ready:function(a){(h.readyState==&quot;complete&quot;||h.readyState==&quot;loaded&quot;)&amp;&amp;a(),h.addEventListener(&quot;DOMContentLoaded&quot;,a,!1);return this},get:function(b){return b===a?this:this[b]},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode.removeChild(this)})},each:function(a){this.forEach(function(b,c){a.call(b,c,b)});return this},filter:function(a){return y([].filter.call(this,function(b){return d(b.parentNode,a).indexOf(b)&gt;=0}))},add:function(a,b){return y(t(this.concat(y(a,b))))},is:function(a){return this.length&gt;0&amp;&amp;y(this[0]).filter(a).length&gt;0},not:function(b){var c=[];if(n(b)&amp;&amp;b.call!==a)this.each(function(a){b.call(this,a)||c.push(this)});else{var d=g.call(typeof b==&quot;string&quot;?this.filter(b):b instanceof NodeList?b:y(b));g.call(this).forEach(function(a){d.indexOf(a)&lt;0&amp;&amp;c.push(a)})}return y(c)},eq:function(a){return y(this[a])},first:function(){return y(this[0])},last:function(){return y(this[this.length-1])},find:function(a){var b;this.length==1?b=d(this[0],a):b=r(this.map(function(b){return d(b,a)}));return y(b)},closest:function(b,c){var e=this[0],f=d(c!==a?c:h,b);f.length===0&amp;&amp;(e=null);while(e&amp;&amp;e!==h&amp;&amp;f.indexOf(e)&lt;0)e=e.parentNode;return y(e!==h&amp;&amp;e)},parents:function(a){var b=[],c=this;while(c.length&gt;0)c=q(c.map(function(a){if((a=a.parentNode)&amp;&amp;a!==h&amp;&amp;b.indexOf(a)&lt;0){b.push(a);return a}}));return z(b,a)},parent:function(a){return z(t(q(this.pluck(&quot;parentNode&quot;))),a)},children:function(a){return z(r(this.map(function(a){return g.call(a.children)})),a)},siblings:function(a){return z(r(this.map(function(a){return g.call(a.parentNode.children).filter(function(b){return b!==a})})),a)},empty:function(){return this.each(function(){this.innerHTML=&quot;&quot;})},pluck:function(a){return this.map(function(b){return b[a]})},show:function(){return this.each(function(){this.style.display==&quot;none&quot;&amp;&amp;(this.style.display=null),k(this,&quot;&quot;).getPropertyValue(&quot;display&quot;)==&quot;none&quot;&amp;&amp;(this.style.display=v(this.nodeName))})},replaceWith:function(a){return this.each(function(){var b=y(this),c=b.prev();b.remove(),c.after(a)})},hide:function(){return this.css(&quot;display&quot;,&quot;none&quot;)},toggle:function(){return this.css(&quot;display&quot;)==&quot;none&quot;?this.show():this.hide()},prev:function(){return y(this.pluck(&quot;previousElementSibling&quot;))},next:function(){return y(this.pluck(&quot;nextElementSibling&quot;))},html:function(b){return b===a?this.length&gt;0?this[0].innerHTML:null:this.each(function(a){this.innerHTML=A(this,b,a,this.innerHTML)})},text:function(b){return b===a?this.length&gt;0?this[0].innerText:null:this.each(function(){this.innerText=b})},attr:function(c,d){return typeof c==&quot;string&quot;&amp;&amp;d===a?this.length&gt;0&amp;&amp;this[0].nodeName==&quot;INPUT&quot;&amp;&amp;this[0].type==&quot;text&quot;&amp;&amp;c==&quot;value&quot;?this.val():this.length&gt;0?this[0].getAttribute(c)||(c in this[0]?this[0][c]:a):a:this.each(function(a){if(o(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,A(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.removeAttribute(a)})},data:function(a,b){return this.attr(&quot;data-&quot;+a,b)},val:function(b){return b===a?this.length&gt;0?this[0].value:null:this.each(function(){this.value=b})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+h.body.scrollLeft,top:a.top+h.body.scrollTop,width:a.width,height:a.height}},css:function(d,e){if(e===a&amp;&amp;typeof d==&quot;string&quot;)return this[0].style[s(d)]||k(this[0],&quot;&quot;).getPropertyValue(d);c=&quot;&quot;;for(b in d)c+=b+&quot;:&quot;+d[b]+&quot;;&quot;;typeof d==&quot;string&quot;&amp;&amp;(c=d+&quot;:&quot;+e);return this.each(function(){this.style.cssText+=&quot;;&quot;+c})},index:function(a){return this.indexOf(y(a)[0])},hasClass:function(a){return u(a).test(this[0].className)},addClass:function(a){return this.each(function(b){e=[];var c=this.className,d=A(this,a,b,c);d.split(/\s+/g).forEach(function(a){y(this).hasClass(a)||e.push(a)},this),e.length&amp;&amp;(this.className+=(c?&quot; &quot;:&quot;&quot;)+e.join(&quot; &quot;))})},removeClass:function(a){return this.each(function(b){e=this.className,A(this,a,b,e).split(/\s+/g).forEach(function(a){e=e.replace(u(a),&quot; &quot;)}),this.className=e.trim()})},toggleClass:function(b,c){return this.each(function(d){var e=this.className,f=A(this,b,d,e);c!==a&amp;&amp;!c||y(this).hasClass(f)?y(this).removeClass(f):y(this).addClass(f)})},submit:function(){return this.each(function(){try{this.submit();return}catch(a){}})}},[&quot;width&quot;,&quot;height&quot;].forEach(function(a){y.fn[a]=function(){var b=this.offset();return b?b[a]:null}});var B=[&quot;prepend&quot;,&quot;after&quot;,&quot;before&quot;,&quot;append&quot;];B.forEach(function(a,b){y.fn[a]=function(a){typeof a!=&quot;object&quot;&amp;&amp;(a=w(a));return this.each(function(c,d){if(a.length||a instanceof x){dom=a;for(var e=0;e&lt;dom.length;e++){var f=dom[b&lt;2?dom.length-e-1:e];C(b,d,f)}}else C(b,d,a)})}});var D=[&quot;append&quot;,&quot;prepend&quot;];D.forEach(function(a){y.fn[a+&quot;To&quot;]=function(b){typeof b!=&quot;object&quot;&amp;&amp;(b=w(b)),b[a](this);return this}}),x.prototype=y.fn;return y}();&quot;$&quot;in window||(window.$=Zepto),function(a){function l(b){var c=a.extend({originalEvent:b},b);k.forEach(function(a){c[a]=function(){return b[a].apply(b,arguments)}});return c}function j(a,b,d,g){var h=e(a);(b||&quot;&quot;).split(/\s/).forEach(function(b){f(a,b,d,g).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function i(b,d,f,h,i){var j=e(b),k=c[j]||(c[j]=[]);d.split(/\s/).forEach(function(c){var d=i||f,e=function(a){return d(a,a.data)},j=a.extend(g(c),{fn:f,proxy:e,sel:h,del:i,i:k.length});k.push(j),b.addEventListener(j.e,e,!1)})}function h(a){return new RegExp(&quot;(?:^| )&quot;+a.replace(&quot; &quot;,&quot; .* ?&quot;)+&quot;(?: |$)&quot;)}function g(a){var b=(&quot;&quot;+a).split(&quot;.&quot;);return{e:b[0],ns:b.slice(1).sort().join(&quot; &quot;)}}function f(a,b,d,f){b=g(b);if(b.ns)var i=h(b.ns);return(c[e(a)]||[]).filter(function(a){return a&amp;&amp;(!b.e||a.e==b.e)&amp;&amp;(!b.ns||i.test(a.ns))&amp;&amp;(!d||a.fn==d)&amp;&amp;(!f||a.sel==f)})}function e(a){return a._zid||(a._zid=d++)}var b=a.qsa,c={},d=1;a.event={add:i,remove:j},a.fn.bind=function(a,b){return this.each(function(){i(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){j(this,a,b)})},a.fn.one=function(a,b){return this.each(function(){var c=this;i(this,a,function(){b(),j(c,a,arguments.callee)})})};var k=[&quot;preventDefault&quot;,&quot;stopImmediatePropagation&quot;,&quot;stopPropagation&quot;];a.fn.delegate=function(c,d,e){return this.each(function(f,g){i(g,d,e,c,function(d,f){var h=d.target,i=b(g,c);while(h&amp;&amp;i.indexOf(h)&lt;0)h=h.parentNode;h&amp;&amp;h!==g&amp;&amp;h!==document&amp;&amp;e.call(h,a.extend(l(d),{currentTarget:h,liveFired:g}),f)})})},a.fn.undelegate=function(a,b,c){return this.each(function(){j(this,b,c,a)})},a.fn.live=function(b,c){a(document.body).delegate(this.selector,b,c);return this},a.fn.die=function(b,c){a(document.body).undelegate(this.selector,b,c);return this},a.fn.trigger=function(a,b){return this.each(function(){var c=document.createEvent(&quot;Events&quot;);c.initEvent(a,!0,!0),c.data=b,this.dispatchEvent(c)})}}(Zepto),function(a){function b(a){var a=a,b={},c=a.match(/(Android)\s+([\d.]+)/),d=a.match(/(iPhone\sOS)\s([\d_]+)/),e=a.match(/(iPad).*OS\s([\d_]+)/),f=a.match(/(webOS)\/([\d.]+)/),g=a.match(/(BlackBerry).*Version\/([\d.]+)/);c&amp;&amp;(b.android=!0,b.version=c[2]),d&amp;&amp;(b.ios=!0,b.version=d[2].replace(/_/g,&quot;.&quot;),b.iphone=!0),e&amp;&amp;(b.ios=!0,b.version=e[2].replace(/_/g,&quot;.&quot;),b.ipad=!0),f&amp;&amp;(b.webos=!0,b.version=f[2]),g&amp;&amp;(b.blackberry=!0,b.version=g[2]);return b}a.os=b(navigator.userAgent),a.__detect=b;var c=navigator.userAgent.match(/WebKit\/([\d.]+)/);a.browser=c?{webkit:!0,version:c[1]}:{webkit:!1}}(Zepto),function(a,b){a.fn.anim=function(c,d,e,f){var g=[],h,i;for(i in c)i===&quot;opacity&quot;?h=c[i]:g.push(i+&quot;(&quot;+c[i]+&quot;)&quot;);a.isFunction(f)&amp;&amp;this.one(&quot;webkitTransitionEnd&quot;,f);return this.css({&quot;-webkit-transition&quot;:&quot;all &quot;+(d!==b?d:.5)+&quot;s &quot;+(e||&quot;&quot;),&quot;-webkit-transform&quot;:g.join(&quot; &quot;),opacity:h})}}(Zepto),function(a){function e(){}var b=0,c=a.isObject,d;a.ajaxJSONP=function(c){var d=&quot;jsonp&quot;+ ++b,e=document.createElement(&quot;script&quot;);window[d]=function(a){c.success(a),delete window[d]},e.src=c.url.replace(/=\?/,&quot;=&quot;+d),a(&quot;head&quot;).append(e)},a.ajaxSettings={type:&quot;GET&quot;,beforeSend:e,success:e,error:e,complete:e,accepts:{script:&quot;text/javascript, application/javascript&quot;,json:&quot;application/json&quot;,xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,text:&quot;text/plain&quot;}},a.ajax=function(b){b=b||{};var e=a.extend({},b);for(d in a.ajaxSettings)e[d]||(e[d]=a.ajaxSettings[d]);if(/=\?/.test(e.url))return a.ajaxJSONP(e);e.url||(e.url=window.location.toString()),e.data&amp;&amp;!e.contentType&amp;&amp;(e.contentType=&quot;application/x-www-form-urlencoded&quot;),c(e.data)&amp;&amp;(e.data=a.param(e.data));if(e.type.match(/get/i)&amp;&amp;e.data){var f=e.data;e.url.match(/\?.*=/)?f=&quot;&amp;&quot;+f:f[0]!=&quot;?&quot;&amp;&amp;(f=&quot;?&quot;+f),e.url+=f}var g=e.accepts[e.dataType],h=new XMLHttpRequest;e.headers=a.extend({&quot;X-Requested-With&quot;:&quot;XMLHttpRequest&quot;},e.headers||{}),g&amp;&amp;(e.headers.Accept=g),h.onreadystatechange=function(){if(h.readyState==4){var a,b=!1;if(h.status&gt;=200&amp;&amp;h.status&lt;300||h.status==0){if(g==&quot;application/json&quot;)try{a=JSON.parse(h.responseText)}catch(c){b=c}else a=h.responseText;b?e.error(h,&quot;parsererror&quot;,b):e.success(a,&quot;success&quot;,h)}else b=!0,e.error(h,&quot;error&quot;);e.complete(h,b?&quot;error&quot;:&quot;success&quot;)}},h.open(e.type,e.url,!0);if(e.beforeSend(h,e)===!1){h.abort();return!1}e.contentType&amp;&amp;(e.headers[&quot;Content-Type&quot;]=e.contentType);for(name in e.headers)h.setRequestHeader(name,e.headers[name]);h.send(e.data);return h},a.get=function(b,c){a.ajax({url:b,success:c})},a.post=function(b,c,d,e){a.isFunction(c)&amp;&amp;(e=e||d,d=c,c=null),a.ajax({type:&quot;POST&quot;,url:b,data:c,success:d,dataType:e})},a.getJSON=function(b,c){a.ajax({url:b,success:c,dataType:&quot;json&quot;})},a.fn.load=function(b,c){if(!this.length)return this;var d=this,e=b.split(/\s/),f;e.length&gt;1&amp;&amp;(b=e[0],f=e[1]),a.get(b,function(b){d.html(f?a(document.createElement(&quot;div&quot;)).html(b).find(f).html():b),c&amp;&amp;c()});return this},a.param=function(b,e){var f=[],g=function(a,b){f.push(encodeURIComponent(e?e+&quot;[&quot;+a+&quot;]&quot;:a)+&quot;=&quot;+encodeURIComponent(b))},h=a.isArray(b);for(d in b)c(b[d])?f.push(a.param(b[d],e?e+&quot;[&quot;+d+&quot;]&quot;:d)):g(h?&quot;&quot;:d,b[d]);return f.join(&quot;&amp;&quot;).replace(&quot;%20&quot;,&quot;+&quot;)}}(Zepto),function(a){function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e&gt;=f?a-b&gt;0?&quot;Left&quot;:&quot;Right&quot;:c-d&gt;0?&quot;Up&quot;:&quot;Down&quot;}function d(a){return&quot;tagName&quot;in a?a:a.parentNode}var b={},c;a(document).ready(function(){a(document.body).bind(&quot;touchstart&quot;,function(a){var e=Date.now(),f=e-(b.last||e);b.target=d(a.touches[0].target),c&amp;&amp;clearTimeout(c),b.x1=a.touches[0].pageX,b.y1=a.touches[0].pageY,f&gt;0&amp;&amp;f&lt;=250&amp;&amp;(b.isDoubleTap=!0),b.last=e}).bind(&quot;touchmove&quot;,function(a){b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind(&quot;touchend&quot;,function(d){b.isDoubleTap?(a(b.target).trigger(&quot;doubleTap&quot;),b={}):b.x2&gt;0||b.y2&gt;0?((Math.abs(b.x1-b.x2)&gt;30||Math.abs(b.y1-b.y2)&gt;30)&amp;&amp;a(b.target).trigger(&quot;swipe&quot;)&amp;&amp;a(b.target).trigger(&quot;swipe&quot;+e(b.x1,b.x2,b.y1,b.y2)),b.x1=b.x2=b.y1=b.y2=b.last=0):&quot;last&quot;in b&amp;&amp;(c=setTimeout(function(){c=null,a(b.target).trigger(&quot;tap&quot;),b={}},250))}).bind(&quot;touchcancel&quot;,function(){b={}})}),[&quot;swipe&quot;,&quot;swipeLeft&quot;,&quot;swipeRight&quot;,&quot;swipeUp&quot;,&quot;swipeDown&quot;,&quot;doubleTap&quot;,&quot;tap&quot;].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto)</div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.05554s from github-fe134-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-caa5b172e276e6cfb9657534025e7be159dc931e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-0957e47aab83e901eaecc1a61a25e3c9e8363764.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

