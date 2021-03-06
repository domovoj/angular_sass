<!DOCTYPE html>
<!--{TODO(programmer)}-->
<html lang="" ng-app="todoApp">
<head>
    <title>TODO supply a title</title>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0"/>

    <!-- Start. after set on server rename 'process' to 'build' and make grunt at cmd-->
    <link rel="stylesheet" href="css/process/pages/main.css"/>
    <link rel="stylesheet" href="css/process/pages/item.css"/>
    <!-- delete all partialls after set on server-->
    <link rel="stylesheet" href="bower_components/normalize.css/normalize.css"/>
    <!-- End. after set on server -->

    <link href="css/process/other/print.css" media="print" rel="stylesheet" type="text/css"/>

    <!--[if IE]>
    <link href="css/process/other/ie.css" media="screen, projection" rel="stylesheet" type="text/css"/>
    <![endif]-->

    <meta name="HandheldFriendly" content="True"/>
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="cleartype" content="on"/>

    <!--{TODO(disegner)}-->
    <link rel="apple-touch-startup-image" href="images/startup.png">
    <link rel="apple-touch-icon" href="images/touch-icon-iphone.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="images/touch-icon-ipad.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="images/touch-icon-iphone-retina.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="images/touch-icon-ipad-retina.png"/>
    <!--{TODO(disegner)}-->

    <!--for Windows 8-->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>

    <!--{TODO(programmer)}-->
    <!--for Windows 8-->
    <meta name="application-name" content="Title"/>
    <meta name="msapplication-tooltip" content="Description"/>
    <!--{TODO(programmer)}-->

    <!--{TODO(disegner)}-->
    <meta name="msapplication-TileColor" content="#990000"/>
    <meta name="msapplication-TileImage" content="images/custom_icon_144.png"/>
    <meta name="msapplication-square70x70logo" content="images/custom_icon_70.png"/>
    <meta name="msapplication-square150x150logo" content="images/custom_icon_150.png"/>
    <meta name="msapplication-square310x310logo" content="images/custom_icon_310.png"/>
    <meta name="msapplication-wide310x150logo" content="images/custom_icon_310x150.png"/>
    <!--{TODO(disegner)}-->

    <meta name="msapplication-window" content="width=400;height=300"/>

    <!--for IE-->
    <meta http-equiv="http-equiv" content="text/html; charset=UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="msthemecompatible" content="no"/>
    <meta http-equiv="imagetoolbar" content="no"/>

    <!--for addresses and phones-->
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="address=no"/>

    <!--{TODO(programmer)}-->
    <meta name="description" content=""/>
    <meta name="keywords" content=""/>
    <meta name="author" content=""/>
    <meta name="copyright" content="(c)">
    <meta http-equiv="Reply-to" content="">
    <!--{TODO(programmer)}-->
</head>
<body>
<h2>Todo</h2>

<div ng-view>

</div>

<div ng-controller="FilterController as ctrl">
    <div>
        All entries:
        <span ng-repeat="entry in ctrl.array">{{entry.name}} </span>
    </div>
    <div>
        Entries that contain an "a":
        <span ng-repeat="entry in ctrl.filteredArray">{{entry.name}} </span>
    </div>
</div>

<!-- after set on production rename 'process' to 'build' -->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="js/angular/app.js"></script>
<script src="js/angular/controllers/main.js"></script>
</body>
</html>
