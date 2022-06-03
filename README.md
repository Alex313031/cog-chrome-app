# <img width="48px" src="https://raw.githubusercontent.com/Alex313031/cog-chromium/master/src/icons/icon_512.png"> COG - System Info Viewer App for Chromium

COG is a simple [Chrome App](https://developer.chrome.com/apps/about_apps) that showcases the [`chrome.system.*`](https://developer.chrome.com/extensions/declare_permissions#system.cpu) APIs. It is a fork of https://github.com/beaufortfrancois/cog-chrome-app. See Patches/Changes below.

![ScreenShot](https://raw.githubusercontent.com/alex313031/cog-chrome-app/master/screenshot.png)

## Patches & Changes <img src="https://github.com/Alex313031/Thorium/blob/main/logos/NEW/bulb_light.svg#gh-dark-mode-only"> <img src="https://github.com/Alex313031/Thorium/blob/main/logos/NEW/bulb_dark.svg#gh-light-mode-only">
 - "Chrome" changed to "Chromium".
 - Icon changed to new gear logo + more icon sizes.
 - Manifest updated to V3 with some extra things like offline enabled = true and minimum chromium version = 88.
 - Colours updated.
 - Spacing modified.
 - Themed Scrollbar added.
 - Memory Section now shows Used, Free, and Total.
 - Better Section descriptions.
 - Warnings if an API is not available.

## Installation <img src="https://github.com/Alex313031/Thorium/blob/main/logos/STAGING/thorium_bubbles.svg" width="36px">

* Check `Developer Mode` in `chrome://extensions`
* Drag and Drop the COG.crx file into the windows.
* Run it.

## Running the development version <img src="https://github.com/Alex313031/Thorium/blob/main/logos/NEW/build_light.svg#gh-dark-mode-only"> <img src="https://github.com/Alex313031/Thorium/blob/main/logos/NEW/build_dark.svg#gh-light-mode-only">

### <img width="32px" height="32px" src="https://raw.githubusercontent.com/Alex313031/Thorium/main/logos/NEW/chromium.svg"> Desktop

* Check `Developer Mode` in `chrome://extensions`
* Click "Load unpacked extension..." in `chrome://extensions` and select the `src` folder in the `cog-chrome-app` repository.
* Run it.

### Test mobile version

### <img width="36px" height="36px" src="https://raw.githubusercontent.com/Alex313031/Thorium/main/logos/STAGING/Android_Robot.svg"> Android

* Install the Chrome Apps on mobile [requirements](https://github.com/MobileChromeApps/mobile-chrome-apps/blob/master/docs/Installation.md).
* Create your project with `cca create cog-mobile-chrome-app --link-to=path/to/cog-chromium/src/manifest.json`
* Plug in your Android device. 
* Go to Settings->Developer Options and enable `USB debugging`.
* Run it with `cca run android`
