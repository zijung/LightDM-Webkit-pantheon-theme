all:

install:
	install -d $(DESTDIR)/usr/share/lightdm-webkit/themes
	cp -r pantheon $(DESTDIR)/usr/share/lightdm-webkit/themes

uninstall:
	rm -rf $(DESTDIR)/usr/share/lightdm-webkit/themes/pantheon
