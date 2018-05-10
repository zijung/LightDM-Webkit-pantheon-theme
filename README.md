# Pantheon Theme
– for [lightdm-webkit2-greeter][1] *(v0.0.1)*

This project provides a theme for `lightdm-webkit2-greeter`, inspired by the `pantheon-greeter` as seen on
[elementary OS][2]. It is still work in progress, a lot of features are missing.

![](screenshot.png?raw=true)

## Demo
A live Demo can be found at https://pantheongreeter.mike-ochmann.de

## Installation
If you already have `lightdm-webkit2-greeter` installed, do the following:
```bash
git clone https://github.com/zijung/lightdm-webkit-theme-pantheon.git
```
second, enter the directory:
```bash
cd lightdm-webkit-theme-pantheon
```
then copy pantheon directory to `/usr/share/lightdm-webkit/themes`
```bash
cp -r pantheon /usr/share/lightdm-webkit/themes
```
or just run `make install`
finally edit the file `/etc/lightdm/lightdm-webkit2-greeter.conf` so it looks like this:
```bash
[greeter]
webkit-theme=pantheon
```

and you are done.

[1]: https://github.com/Antergos/lightdm-webkit2-greeter
[2]: https://elementary.io